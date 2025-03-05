import { UserModel } from "@/models/user";

export type DoctorReviewModel = {
  id: string;
  doctorId: string;
  rate: number;
  text: string;
  user: UserModel;
  date: string;
};
