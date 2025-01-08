import { DoctorModel } from "@/models/doctor";
import { ServiceType } from "@/enums/service-type";

export const doctors: DoctorModel[] = [
  {
    id: "97420f0d-b576-4f65-9ffc-a81b4b1b4e77",
    name: "Sara",
    serviceType: ServiceType.IN_PERSON,
    image: "@/assets/doctors-images/sara.jpg",
    rate: 4.99,
    totalVotes: 294,
    address: "Germany",
    firstAvailableAppointment: "Tomorrow",
    specialityId: "1",
    specialityName: "Gynecologist",
  },
  {
    id: "88820f0d-b576-335-9ffc-a81b4b1b4e7",
    name: "John",
    serviceType: ServiceType.ONLINE,
    image: "@/assets/doctors-images/John.jpg",
    rate: 4.99,
    totalVotes: 294,
    address: "Netherlands",
    firstAvailableAppointment: "Next Week",
    specialityId: "2",
    specialityName: "Cardiologist",
  },
];
