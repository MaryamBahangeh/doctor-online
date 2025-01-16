"use client";

import { useContext } from "react";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import SelectedFilters from "@/app/search/components/selected-filters/SelectedFilters";

import { SPECIALITY_OPTIONS } from "@/options/speciality-options";

import { FiltersType } from "@/types/filters-type";

import styles from "./Filter.module.css";

import FilterItems, {
  FILTER_VARIANT,
} from "@/app/search/components/filter-items/FilterItems";

import { SPECIALITY_DEGREE } from "@/options/degree-options";
import { SERVICE_TYPE } from "@/options/service-types-options";

function Filter() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const filter = (value: string, filterType: keyof FiltersType): void => {
    dispatchFilters({
      type: "filtered",
      key: filterType,
      value: value,
    });
  };

  return (
    <div className={styles.filter}>
      {Object.keys(filters).length > 0 && <SelectedFilters />}

      <FilterItems
        filterVariant={FILTER_VARIANT.list}
        title="Speciality:"
        options={SPECIALITY_OPTIONS}
        fieldName="specialityName"
      />
      <FilterItems
        filterVariant={FILTER_VARIANT.list}
        title="Academic Degree:"
        options={SPECIALITY_DEGREE}
        fieldName="specialtyDegreeName"
      />

      <FilterItems
        filterVariant={FILTER_VARIANT.radio}
        title="Service type:"
        options={SERVICE_TYPE}
        fieldName="serviceTypeName"
      />
    </div>
  );
}

export default Filter;
