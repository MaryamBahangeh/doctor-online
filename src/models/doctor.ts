import { ServiceType } from "@/enums/service-type";

export type DoctorModel = {
  id: string;
  name: string;
  serviceType: ServiceType;
  image: string;
  rate: number;
  totalVotes: number;
  address: string;
  firstAvailableAppointment: string;
  specialityId: string;
  specialityName: string;
  description: string;
};
