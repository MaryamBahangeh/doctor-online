"use client";

import React, {
  createContext,
  PropsWithChildren,
  useReducer,
  Dispatch,
} from "react";

import {
  filtersReducer,
  FiltersAction,
} from "@/app/search/reducers/FiltersReducer";

import { FiltersType } from "@/app/search/types/filters-type";

const filterDefaultValue: FiltersType = {};

type ContextType = {
  filters: FiltersType;
  dispatchFilters: Dispatch<FiltersAction>;
};

export const FiltersContext = createContext<ContextType>({
  filters: {},
  dispatchFilters: () => {},
});

function FiltersProvider({ children }: PropsWithChildren) {
  const [filters, dispatchFilters] = useReducer(
    filtersReducer,
    filterDefaultValue,
  );

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

export default FiltersProvider;
