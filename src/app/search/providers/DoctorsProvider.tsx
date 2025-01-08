"use client";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";
import { ServiceType } from "@/enums/service-type";

import { DoctorModel } from "@/models/doctor";
import { doctors } from "@/assests/doctors";

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
    let filtered = [...doctors];

    if (filters.specialityId) {
      filtered = doctors.filter(
        (doctor) => doctor.specialityId === filters.specialityId,
      );
    }

    if (filters.serviceType != ServiceType.BOTH) {
      return filtered.filter(
        (doctor) => doctor.serviceType === filters.serviceType,
      );
    }
    return filtered;
  }, [filters]);

  return (
    <DoctorsContext.Provider value={{ filteredDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
}

export default DoctorsProvider;
