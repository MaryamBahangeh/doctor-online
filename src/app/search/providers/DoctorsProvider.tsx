"use client";

import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import { DoctorModel } from "@/models/doctor";
import { doctors } from "@/assests/doctors";
import { SORT_OPTIONS } from "@/options/sort-options";
import { SelectOptionType } from "@/types/select-option-type";

type ContextType = {
  sortedDoctors: DoctorModel[];
  sortBy: SelectOptionType;
  setSortBy: Dispatch<SetStateAction<SelectOptionType>>;
};

export const DoctorsContext = createContext<ContextType>({
  sortedDoctors: [],
  sortBy: SORT_OPTIONS[0],
  setSortBy: () => {},
});

type Props = PropsWithChildren;

function DoctorsProvider({ children }: Props) {
  const { filters } = useContext(FiltersContext);
  const [sortBy, setSortBy] = useState<SelectOptionType>(SORT_OPTIONS[0]);

  const isVisible = useCallback(
    (doctor: DoctorModel): boolean => {
      return (
        doesDoctorInclude(doctor, filters.query) &&
        doesInclude(doctor.speciality.value, filters.speciality) &&
        doesInclude(doctor.serviceType.value, filters.serviceType) &&
        doesInclude(doctor.appointment.value, filters.appointment) &&
        doesInclude(doctor.degree.value, filters.degree)
      );
    },
    [filters],
  );

  const sortedDoctors = useMemo((): DoctorModel[] => {
    const filteredDoctors = doctors.filter(isVisible);

    switch (sortBy.value) {
      case "rating": {
        return filteredDoctors.sort((a, b) => b.rate - a.rate);
      }

      case "appointment": {
        return filteredDoctors.sort((a, b) =>
          a.appointment.value.localeCompare(b.appointment.value),
        );
      }

      case "popularity": {
        return filteredDoctors.sort((a, b) => b.totalVotes - a.totalVotes);
      }

      default: {
        return filteredDoctors;
      }
    }
  }, [sortBy, isVisible]);

  return (
    <DoctorsContext.Provider value={{ sortedDoctors, sortBy, setSortBy }}>
      {children}
    </DoctorsContext.Provider>
  );
}

function doesDoctorInclude(doctor: DoctorModel, query?: string): boolean {
  if (!query) {
    return true;
  }

  return doesSomeInclude(
    [doctor.name, doctor.speciality.label, doctor.address, doctor.description],
    query,
  );
}

function doesSomeInclude(items: string[], query?: string): boolean {
  if (!query) {
    return true;
  }

  return items.some((item) => doesInclude(item, query));
}

function doesInclude(item: string, query?: string): boolean {
  if (!query) {
    return true;
  }

  return item.toLowerCase().includes(query.toLowerCase());
}

export default DoctorsProvider;
