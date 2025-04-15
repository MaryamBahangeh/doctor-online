import { DoctorModel } from "@/models/doctor";

import sara from "@/assests/doctors-images/sara.jpg";
import john from "@/assests/doctors-images/john.jpg";
import mary from "@/assests/doctors-images/mary.jpg";
import jack from "@/assests/doctors-images/jack.png";
import mateo from "@/assests/doctors-images/mateo.jpg";
import martin from "@/assests/doctors-images/martin.jpg";
import amaris from "@/assests/doctors-images/amaris.webp";
import lukas from "@/assests/doctors-images/lukas.webp";
import brody from "@/assests/doctors-images/brody.webp";

import { SERVICE_TYPE } from "@/options/service-types-options";
import { APPOINTMENT_TIMES } from "@/options/appointment-time-options";
import { DEGREE } from "@/options/degree-options";
import { SPECIALITY_OPTIONS } from "@/options/speciality-options";

export const doctors: DoctorModel[] = [
  {
    id: "1",
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
    aboutMe:
      "Dr.\tStern\thas\tthirty\tyears’\texperience\tin\tophthalmic\tsurgery,\twith\tspecial\tinterest\tin\t\n" +
      "cataract\tsurgery,\tcorneal\ttransplantation,\tand\tlaser\trefractive\tprocedures.\tHe\tis\ta\t\n" +
      "founding\tmember\tof\tPrecision\tLASIK\tGroup,\tChief\tof\tOphthalmology\tat\tThe\tHospital\t\n" +
      "of\tCentral\tConnecticut,\tand\tco-medical\tdirector\tof\tthe\tConnecticut\teye\tbank.",
    price: 200,
    consultations: 120,
    membershipDuration: "2 years and 3 months",
  },
  {
    id: "2",
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
    aboutMe: "",
    price: 250,
    consultations: 20,
    membershipDuration: "1 years and 2 months",
  },
  {
    id: "3",
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
    aboutMe: "",
    price: 350,
    consultations: 300,
    membershipDuration: "5 years and 7 months",
  },

  {
    id: "5",
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
    aboutMe: "",
    price: 220,
    consultations: 40,
    membershipDuration: "6 years and 8 months",
  },
  {
    id: "6",
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
    aboutMe: "",
    price: 200,
    consultations: 100,
    membershipDuration: "3 years and 4 months",
  },
  {
    id: "8",
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
    aboutMe:
      "Dr.\tStern\thas\tthirty\tyears’\texperience\tin\tophthalmic\tsurgery,\twith\tspecial\tinterest\tin\t\n" +
      "cataract\tsurgery,\tcorneal\ttransplantation,\tand\tlaser\trefractive\tprocedures.\tHe\tis\ta\t\n" +
      "founding\tmember\tof\tPrecision\tLASIK\tGroup,\tChief\tof\tOphthalmology\tat\tThe\tHospital\t\n" +
      "of\tCentral\tConnecticut,\tand\tco-medical\tdirector\tof\tthe\tConnecticut\teye\tbank.",
    price: 320,
    consultations: 50,
    membershipDuration: "1 years and 2 months",
  },

  {
    id: "9",
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
    aboutMe: "",
    price: 220,
    consultations: 5,
    membershipDuration: "10 months",
  },

  {
    id: "10",
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
    aboutMe: "",
    price: 220,
    consultations: 40,
    membershipDuration: "3 years and 7 months",
  },
  {
    id: "11",
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
    aboutMe: "",
    price: 180,
    consultations: 70,
    membershipDuration: "4 years and 3 months",
  }
];
