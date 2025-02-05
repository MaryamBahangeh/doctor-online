"use client";

import { useContext } from "react";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import SelectedFilters from "@/app/search/components/selected-filters/SelectedFilters";

import { SPECIALITY_OPTIONS } from "@/options/speciality-options";

import styles from "./Filters.module.css";

import ItemsFilter from "@/app/search/components/items-filters/ItemsFilter";

import { DEGREE } from "@/options/degree-options";
import { SERVICE_TYPE } from "@/options/service-types-options";

function Filters() {
  const { filters } = useContext(FiltersContext);

  return (
    <div className={styles.filter}>
      {Object.keys(filters).length > 0 && <SelectedFilters />}

      <ItemsFilter
        title="Speciality"
        options={SPECIALITY_OPTIONS}
        fieldName="speciality"
      />
      <ItemsFilter
        title="Academic Degree"
        options={DEGREE}
        fieldName="degree"
      />

      <ItemsFilter
        title="Service type"
        options={SERVICE_TYPE}
        fieldName="serviceType"
      />
    </div>
  );
}

export default Filters;
