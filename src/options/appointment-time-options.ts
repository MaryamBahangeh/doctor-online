import { SelectOptionType } from "@/types/select-option-type";

export const APPOINTMENT_TIMES: SelectOptionType[] = [
  { value: "1", label: "All" },
  { value: "0", label: "Today" },
  { value: "0.1", label: "Tomorrow" },
  { value: "0.2", label: "In 3 days" },
  { value: "0.3", label: "In 5 days" },
  { value: "0.4", label: "In 7 days" },
];
