"use client";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { DoctorModel } from "@/models/doctor";
import { doctors } from "@/assests/doctors";
import { FiltersContext } from "@/app/search/providers/FiltersProvider";

type ContextType = {
  filteredDoctors: DoctorModel[];
};

export const DoctorsContext = createContext<ContextType>({
  filteredDoctors: [],
});

type Props = PropsWithChildren;

function DoctorsProvider({ children }: Props) {
  const { filters } = useContext(FiltersContext);

  const filteredDoctors = useMemo(() => {
    console.log("ttttttttttttttttt");
    const filteredBySpecialityId = doctors.filter(
      (doctor) => doctor.specialityId === filters.specialityId,
    );

    return filteredBySpecialityId.filter(
      (doctor) => doctor.serviceType === filters.serviceType,
    );
  }, [filters]);

  return (
    <DoctorsContext.Provider value={{ filteredDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
}

export default DoctorsProvider;
