import { SelectOptionType } from "@/types/select-option-type";

export const APPOINTMENT_TIMES: SelectOptionType[] = [
  { value: "all", label: "All" },
  { value: "0d", label: "Today" },
  { value: "1d", label: "Tomorrow" },
  { value: "3d", label: "In 3 days" },
  { value: "5d", label: "In 5 days" },
  { value: "7d", label: "In 7 days" },
];
