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

  const doesSomeInclude = (
    filterName: keyof FiltersType,
    doctor: DoctorModel,
  ) => {
    if (filters[filterName] === "") {
      return true;
    }

    return (
      doctor.name
        .toLowerCase()
        .includes((filters[filterName] as string).toLowerCase()) ||
      doctor.address
        .toLowerCase()
        .includes((filters[filterName] as string).toLowerCase()) ||
      doctor.specialityName
        .toLowerCase()
        .includes((filters[filterName] as string).toLowerCase()) ||
      doctor.description
        .toLowerCase()
        .includes((filters[filterName] as string).toLowerCase())
    );
  };

  const isActiveDoctor = useCallback(
    (doctor: DoctorModel): boolean => {
      const keyValues: (keyof FiltersType)[] = Object.keys(
        filters,
      ) as (keyof FiltersType)[];

      const result: boolean[] = [];
      keyValues.map((key) => {
        if (key === "name") {
          result.push(doesSomeInclude(key, doctor));
        } else {
          result.push(doesInclude(key, doctor));
        }
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
