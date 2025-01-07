"use client";
import React, { createContext, PropsWithChildren, useReducer } from "react";
import { ServiceType } from "@/enums/service-type";
import { SPECIALITY_OPTIONS } from "@/options/speciality-options";
import { FiltersType } from "@/app/search/types/filters-type";
import {
  filtersReducer,
  FiltersAction,
} from "@/app/search/reducers/FiltersReducer";
import { Dispatch } from "react";

const defaultValue: FiltersType = {
  serviceType: ServiceType.ONLINE,
  specialityId: SPECIALITY_OPTIONS[0].value,
};

type ContextType = {
  filters: FiltersType;
  dispatchFilters: Dispatch<FiltersAction>;
};

export const FiltersContext = createContext<ContextType>({
  filters: defaultValue,
  dispatchFilters: () => {},
});

function FiltersProvider({ children }: PropsWithChildren) {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultValue);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

export default FiltersProvider;
