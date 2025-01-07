"use client";

import React, { useContext } from "react";
import Card from "@/components/card/Card";
import styles from "./SelectedFilters.module.css";
import { FiltersContext } from "@/app/search/providers/FiltersProvider";
import { SPECIALITY_OPTIONS } from "@/options/speciality-options";

function SelectedFilters() {
  const { filters } = useContext(FiltersContext);
  return (
    <Card>
      <div className={styles["selected-filters"]}>
        <div>Filters: </div>
        {filters.serviceType +
          ", " +
          SPECIALITY_OPTIONS.find(
            (option) => option.value === filters.specialityId,
          )}
        <div></div>
      </div>
    </Card>
  );
}

export default SelectedFilters;
