"use client";

import React, {
  createContext,
  PropsWithChildren,
  useReducer,
  Dispatch,
  ReactElement,
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

type Props = PropsWithChildren & {
  defaultFilters: FiltersType;
};

export default function FiltersProvider({
  children,
  defaultFilters,
}: Props): ReactElement {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultFilters);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
