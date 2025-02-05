import { SelectOptionType } from "@/types/select-option-type";

export type DoctorModel = {
  id: string;
  name: string;
  serviceType: SelectOptionType;
  image: string;
  rate: number;
  totalVotes: number;
  address: string;
  appointment: SelectOptionType;
  speciality: SelectOptionType;
  degree: SelectOptionType;
  description: string;
};
