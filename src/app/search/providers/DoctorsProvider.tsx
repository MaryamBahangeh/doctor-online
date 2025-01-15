"use client";
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import { DoctorModel } from "@/models/doctor";
import { doctors } from "@/assests/doctors";
import { FiltersType } from "@/types/filters-type";
import { SORT_OPTIONS } from "@/options/sort-options";

type ContextType = {
  sortedDoctors: DoctorModel[];
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

export const DoctorsContext = createContext<ContextType>({
  sortedDoctors: [],
  sortBy: "",
  setSortBy: () => {},
});

type Props = PropsWithChildren;

function DoctorsProvider({ children }: Props) {
  const { filters } = useContext(FiltersContext);
  const [sortBy, setSortBy] = useState<string>(SORT_OPTIONS[0].value);

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
    [filters, doesInclude, doesSomeInclude],
  );

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor: DoctorModel) => isActiveDoctor(doctor));
  }, [isActiveDoctor]);

  const sortedDoctors = useMemo(() => {
    if (sortBy === "rating") {
      return [...filteredDoctors].sort((a, b) => b.rate - a.rate);
    }
    if (sortBy === "appointment") {
      return [...filteredDoctors].sort((a, b) =>
        a.firstAvailableAppointmentValue.localeCompare(
          b.firstAvailableAppointmentValue,
        ),
      );
    }
    if (sortBy === "popularity") {
      return [...filteredDoctors].sort((a, b) => b.totalVotes - a.totalVotes);
    }

    return [...filteredDoctors];
  }, [filteredDoctors, sortBy]);

  return (
    <DoctorsContext.Provider value={{ sortedDoctors, sortBy, setSortBy }}>
      {children}
    </DoctorsContext.Provider>
  );
}

export default DoctorsProvider;
