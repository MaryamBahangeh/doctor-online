"use client";

import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useReducer,
  Dispatch,
} from "react";

import {
  filtersReducer,
  FiltersAction,
} from "@/app/search/reducers/FiltersReducer";

import { ServiceType } from "@/enums/service-type";
import { FiltersType } from "@/app/search/types/filters-type";
import { SPECIALITY_OPTIONS } from "@/options/speciality-options";

const defaultValue: FiltersType = {
  serviceType: ServiceType.BOTH,
};

type ContextType = {
  filters: FiltersType;
  dispatchFilters: Dispatch<FiltersAction>;
  selectedFiltersText: string;
};

export const FiltersContext = createContext<ContextType>({
  filters: defaultValue,
  dispatchFilters: () => {},
  selectedFiltersText: "",
});

function FiltersProvider({ children }: PropsWithChildren) {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultValue);

  const selectedFiltersText = useMemo(() => {
    let selected: string = "";

    if (filters.specialityId) {
      selected = (SPECIALITY_OPTIONS.find(
        (option) => option.value === filters.specialityId,
      )?.label + ", ") as string;
    }

    if (filters.serviceType != ServiceType.BOTH) {
      selected = selected + filters.serviceType + ", ";
    }
    return selected.substring(0, selected.length - 2);
  }, [filters]);

  return (
    <FiltersContext.Provider
      value={{ filters, dispatchFilters, selectedFiltersText }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export default FiltersProvider;
