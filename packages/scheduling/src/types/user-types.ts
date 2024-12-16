import { User as SupabaseUser } from "@supabase/supabase-js"

export type Role = "anesthesiologist" | "surgeon" | "medical-facility"

export interface RoleOption {
  title: string
  description: string
  value: Role
}

export interface AnesthesiologistProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  phoneNumber: string
  npiNumber?: string
  stateLicenseNumber?: string
  issuingState?: string
  credentialerContactName?: string
  credentialerContactEmail?: string
  credentialerContactNumber?: string
  certificationExperience?: string
  hospitalAffiliation?: string
  privilegeSelection?: string[]
  stateLicenseCopies?: { name: string; url: string }[]
  proofOfCertifications?: { name: string; url: string }[]
  professionalPhoto?: { name: string; url: string }[]
  aboutMe?: string
}

export interface SurgeonProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  phoneNumber: string
  npiNumber?: string
  stateLicenseNumber?: string
  organizationName?: string
  privilegeSelection?: string[]
  proofOfCertifications?: { name: string; url: string }[]
  stateLicenseCopies?: { name: string; url: string }[]
  professionalPhoto?: { name: string; url: string }[]
  aboutMe?: string
}

export interface MedicalFacilityProfile {
  id: string
  facilityName: string
  adminContactName: string
  adminEmail: string
  adminPhoneNumber: string
  facilityType?: string
  facilityAddress?: string
  facilityEmail?: string
  facilityPhone?: string
  operatingRooms?: number
  anesthesiologistPrivilegeSelection?: string[]
  surgeonPrivilegeSelection?: string[]
  accreditationDocuments?: { name: string; url: string }[]
  facilityLicense?: { name: string; url: string }[]
  proofOfInsurance?: { name: string; url: string }[]
  professionalPhoto?: { name: string; url: string }[]
  aboutMe?: string
}

export type ProfileData =
  | AnesthesiologistProfile
  | SurgeonProfile
  | MedicalFacilityProfile

export interface CalAccount {
  id: number
  username: string | null
  email: string
  timeZone: string
  weekStart: string
  createdDate: string
  timeFormat: number | null
  defaultScheduleId: number | null
  createdAt: Date | null
}

export type CreateCalAccount = Omit<CalAccount, "id" | "createdAt">

export type UpdateCalAccount = Partial<Omit<CalAccount, "id">> & { id: number }

export interface PublicUser {
  id: string
  role: Role
  calAccountId: number | null
  calAccessToken: string | null
  calRefreshToken: string | null
  scheduleId: number | null
}

export interface DSUser extends Omit<SupabaseUser, "role">, PublicUser {
  profileData?: ProfileData
}

export type UserInfo =
  | AnesthesiologistProfile
  | SurgeonProfile
  | MedicalFacilityProfile
