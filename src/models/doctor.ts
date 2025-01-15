export type DoctorModel = {
  id: string;
  name: string;
  serviceType: string;
  serviceTypeName: string;
  image: string;
  rate: number;
  totalVotes: number;
  address: string;
  firstAvailableAppointmentValue: string;
  firstAvailableAppointmentLabel: string;
  specialityId: string;
  specialityName: string;
  description: string;
};
