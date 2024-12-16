// packages/scheduling/src/types/availability.ts

export type DayOfWeek =
| "Monday"
| "Tuesday"
| "Wednesday"
| "Thursday"
| "Friday"
| "Saturday"
| "Sunday"

export interface AvailabilityTimeSlot {
days: DayOfWeek[]
startTime: string // Format: "HH:mm"
endTime: string // Format: "HH:mm"
}

export interface Schedule {
id: number
ownerId: number
name: string
timeZone: string
availability: AvailabilityTimeSlot[]
}

export interface ScheduleResponse {
status: "success" | "error"
data: Schedule
}