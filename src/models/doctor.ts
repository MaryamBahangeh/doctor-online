import { ServiceType } from "@/enums/service-type";
import Image from "next/image";

export type DoctorModel = {
  id: string;
  name: string;
  serviceType: ServiceType;
  image: typeof Image;
  rate: number;
  totalVotes: number;
  address: string;
  firstAvailableAppointment: string;
  specialityId: string;
  specialityName: string;
  description: string;
};
