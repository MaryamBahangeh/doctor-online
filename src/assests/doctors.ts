import { DoctorModel } from "@/models/doctor";

import sara from "@/assests/doctors-images/sara.jpg";
import john from "@/assests/doctors-images/john.jpg";
import mary from "@/assests/doctors-images/mary.jpg";
import jack from "@/assests/doctors-images/jack.png";
import mateo from "@/assests/doctors-images/mateo.jpg";
import martin from "@/assests/doctors-images/martin.jpg";
import amaris from "@/assests/doctors-images/amaris.webp";
import lukas from "@/assests/doctors-images/lukas.webp";
import whitley from "@/assests/doctors-images/whitley.jpeg";
import brody from "@/assests/doctors-images/brody.webp";

import { SERVICE_TYPE } from "@/options/service-types-options";
import { APPOINTMENT_TIMES } from "@/options/appointment-time-options";
import { DEGREE } from "@/options/degree-options";
import { SPECIALITY_OPTIONS } from "@/options/speciality-options";

export const doctors: DoctorModel[] = [
  {
    id: "97420f0d-b576-4f65-9ffc-a81b4b1b4e77",
    name: "Sara Smith",
    serviceType: SERVICE_TYPE[0],
    image: sara.src,
    rate: 4.99,
    totalVotes: 594,
    address: "Germany",
    appointment: APPOINTMENT_TIMES[4],
    speciality: SPECIALITY_OPTIONS[0],
    degree: DEGREE[0],
    description:
      "Diagnosing and treating conditions of the female reproductive system",
  },
  {
    id: "88820f0d-b576-9ffc-a81b4b1b4e7",
    name: "John William",
    serviceType: SERVICE_TYPE[1],
    image: john.src,
    rate: 2.8,
    totalVotes: 294,
    address: "Netherlands",
    appointment: APPOINTMENT_TIMES[1],
    speciality: SPECIALITY_OPTIONS[1],
    degree: DEGREE[1],
    description: "Expert in the care of your heart and blood vessels",
  },
  {
    id: "88820f0d-b576-335-9ffc-a81b1b4e7",
    name: "Mary Brown",
    serviceType: SERVICE_TYPE[0],
    image: mary.src,
    rate: 3.79,
    totalVotes: 894,
    address: "England",
    appointment: APPOINTMENT_TIMES[3],
    speciality: SPECIALITY_OPTIONS[2],
    degree: DEGREE[0],
    description: "caring for newborn and premature babies",
  },
  {
    id: "8882000f0d-b576-335-9ffc-a81b4b1b4e7",
    name: "Jack Davis",
    serviceType: SERVICE_TYPE[1],
    image: jack.src,
    rate: 2.99,
    totalVotes: 504,
    address: "Belgian",
    appointment: APPOINTMENT_TIMES[2],
    speciality: SPECIALITY_OPTIONS[3],
    degree: DEGREE[3],
    description:
      "Diagnosing and treating diseases of the respiratory system, including airways, alveoli and blood vessels",
  },

  {
    id: "97420f0d-b576-4f65-fc-a81b4b1b4e77",
    name: "Mateo Miller",
    serviceType: SERVICE_TYPE[1],
    image: mateo.src,
    rate: 4.25,
    totalVotes: 1594,
    address: "Germany",
    appointment: APPOINTMENT_TIMES[5],
    speciality: SPECIALITY_OPTIONS[4],
    degree: DEGREE[0],
    description:
      "Diagnosing and treating conditions of the female reproductive system",
  },
  {
    id: "88820f0d-76-9ffc-a81b4b1b4e7",
    name: "Martin Anderson",
    serviceType: SERVICE_TYPE[0],
    image: martin.src,
    rate: 3.99,
    totalVotes: 1204,
    address: "Netherlands",
    appointment: APPOINTMENT_TIMES[3],
    speciality: SPECIALITY_OPTIONS[5],
    degree: DEGREE[1],
    description: "Expert in the care of your heart and blood vessels",
  },
  {
    id: "88820f-b576-335ffc-a81b1b4e7",
    name: "Mary Taylor",
    serviceType: SERVICE_TYPE[0],
    image: mary.src,
    rate: 4.99,
    totalVotes: 834,
    address: "England",
    appointment: APPOINTMENT_TIMES[2],
    speciality: SPECIALITY_OPTIONS[5],
    degree: DEGREE[2],
    description: "caring for newborn and premature babies",
  },
  {
    id: "8882000f-b576-335-9ffc-a81b4b1b4e7",
    name: "Jack Clark",
    serviceType: SERVICE_TYPE[1],
    image: jack.src,
    rate: 5,
    totalVotes: 5014,
    address: "Belgian",
    appointment: APPOINTMENT_TIMES[4],
    speciality: SPECIALITY_OPTIONS[0],
    degree: DEGREE[3],
    description:
      "Diagnosing and treating diseases of the respiratory system, including airways, alveoli and blood vessels",
  },

  {
    id: "97420f0d-b576-4f6-a81b4b1b4e77",
    name: "Amaris Davenport",
    serviceType: SERVICE_TYPE[1],
    image: amaris.src,
    rate: 3.99,
    totalVotes: 1094,
    address: "England",
    appointment: APPOINTMENT_TIMES[3],
    speciality: SPECIALITY_OPTIONS[0],
    degree: DEGREE[2],
    description:
      "Diagnosing and treating conditions of the female reproductive system",
  },

  {
    id: "88820f0-576-9ffc-a81b4b1b4e7",
    name: "Lukas Magana",
    serviceType: SERVICE_TYPE[1],
    image: lukas.src,
    rate: 3.8,
    totalVotes: 694,
    address: "Netherlands",
    appointment: APPOINTMENT_TIMES[3],
    speciality: SPECIALITY_OPTIONS[1],
    degree: DEGREE[0],
    description: "Expert in the care of your heart and blood vessels",
  },
  {
    id: "88820d-b576-335-9ffc-a81b1b4e7",
    name: "Whitley Hail",
    serviceType: SERVICE_TYPE[0],
    image: whitley.src,
    rate: 4.22,
    totalVotes: 2264,
    address: "England",
    appointment: APPOINTMENT_TIMES[3],
    speciality: SPECIALITY_OPTIONS[2],
    degree: DEGREE[0],
    description: "caring for newborn and premature babies",
  },
  {
    id: "8800f0d-b576-335-9ffc-a81b4b1b4e7",
    name: "Brody Stone",
    serviceType: SERVICE_TYPE[1],
    image: brody.src,
    rate: 3.7,
    totalVotes: 1014,
    address: "Belgian",
    appointment: APPOINTMENT_TIMES[2],
    speciality: SPECIALITY_OPTIONS[3],
    degree: DEGREE[3],
    description:
      "Diagnosing and treating diseases of the respiratory system, including airways, alveoli and blood vessels",
  },

  {
    id: "88820f0d-b576-335ffc-a81b1b4e7",
    name: "River Strong",
    serviceType: SERVICE_TYPE[1],
    image: amaris.src,
    rate: 4.83,
    totalVotes: 456,
    address: "England",
    appointment: APPOINTMENT_TIMES[4],
    speciality: SPECIALITY_OPTIONS[5],
    degree: DEGREE[2],
    description: "caring for newborn and premature babies",
  },
  {
    id: "8882000f-b576-335-9ffc-a84b1b4e7",
    name: "Atlas Sierra",
    serviceType: SERVICE_TYPE[0],
    image: lukas.src,
    rate: 3.7,
    totalVotes: 9814,
    address: "Belgian",
    appointment: APPOINTMENT_TIMES[2],
    speciality: SPECIALITY_OPTIONS[0],
    degree: DEGREE[3],
    description:
      "Diagnosing and treating diseases of the respiratory system, including airways, alveoli and blood vessels",
  },

  {
    id: "97420f0d-b576-4f6-a84b1b4e77",
    name: "Abner Duran",
    serviceType: SERVICE_TYPE[0],
    image: jack.src,
    rate: 2.56,
    totalVotes: 7940,
    address: "England",
    appointment: APPOINTMENT_TIMES[1],
    speciality: SPECIALITY_OPTIONS[0],
    degree: DEGREE[1],
    description:
      "Diagnosing and treating conditions of the female reproductive system",
  },

  {
    id: "88820f0-576-9ffc-a84b1b4e7",
    name: "Jamal Tanner",
    serviceType: SERVICE_TYPE[0],
    image: lukas.src,
    rate: 4.6,
    totalVotes: 254,
    address: "England",
    appointment: APPOINTMENT_TIMES[3],
    speciality: SPECIALITY_OPTIONS[1],
    degree: DEGREE[0],
    description: "Expert in the care of your heart and blood vessels",
  },
];
