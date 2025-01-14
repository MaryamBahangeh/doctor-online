"use client";
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from "react";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import { DoctorModel } from "@/models/doctor";
import { doctors } from "@/assests/doctors";
import { FiltersType } from "@/app/search/types/filters-type";

type ContextType = {
  filteredDoctors: DoctorModel[];
};

export const DoctorsContext = createContext<ContextType>({
  filteredDoctors: [],
});

type Props = PropsWithChildren;

function DoctorsProvider({ children }: Props) {
  const { filters } = useContext(FiltersContext);

  const doesInclude = (
    filterName: keyof FiltersType,
    doctor: DoctorModel,
  ): boolean => {
    return doctor[filterName] === filters[filterName];
  };

  const isActiveDoctor = useCallback(
    (doctor: DoctorModel): boolean => {
      const keyValues: (keyof FiltersType)[] = Object.keys(filters);

      const result: boolean[] = [];
      keyValues.map((key) => {
        result.push(doesInclude(key, doctor));
      });
      return result.find((x) => !x) == undefined;
    },
    [filters, doesInclude],
  );

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor: DoctorModel) => isActiveDoctor(doctor));
  }, [isActiveDoctor]);

  return (
    <DoctorsContext.Provider value={{ filteredDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
}

export default DoctorsProvider;
