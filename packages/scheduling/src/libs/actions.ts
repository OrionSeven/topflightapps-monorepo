"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { createCalApi } from "./cal/createCalApi"
import { createServerClient } from "./server"

export async function createNewSchedule() {
  const { calApi, userData } = await createCalApi()
  const supabase = await createServerClient()
  const { data, error } = await supabase
    .from("cal_accounts")
    .select("timeZone")
    .eq("id", userData.calAccountId)
    .single()

  if (error) {
    console.error("Error fetching user timezone:", error)
    throw new Error("Failed to fetch user timezone")
  }

  const userTimeZone = data.timeZone

  const newSchedule = await calApi.createSchedule({
    name: "New Schedule",
    isDefault: false,
    timeZone: userTimeZone,
  })
  redirect(`/availability/${newSchedule.data.id}`)
}

export async function deleteSchedule(scheduleId: number) {
  try {
    const { calApi } = await createCalApi()
    await calApi.deleteSchedule(scheduleId)
    revalidatePath("/availability")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete schedule:", error)
    return { success: false, error: "Failed to delete schedule" }
  }
}

export async function getUserTimezone() {
  const { userData } = await createCalApi()
  if (!userData) throw new Error("User not found")
  const supabase = await createServerClient()
  const { data, error } = await supabase
    .from("cal_accounts")
    .select("timeZone")
    .eq("id", userData.calAccountId)
    .single()

  if (error) throw error
  return data.timeZone || "UTC" // Default to UTC if no timezone is set
}

export async function updateUserTimezone(timezone: string) {
  const { userData } = await createCalApi()
  if (!userData) throw new Error("User not found")
  const supabase = await createServerClient()
  const { error } = await supabase
    .from("cal_accounts")
    .update({ timeZone: timezone })
    .eq("id", userData.calAccountId)

  if (error) throw error
}
