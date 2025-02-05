"use client";

import React, { useContext } from "react";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import Card from "@/components/card/Card";
import SolarTrashBinMinimalisticLinear from "@/icons/SolarTrashBinMinimalisticLinear";
import Button, { Variant } from "@/components/Button/Button";
import { FiltersType } from "@/types/filters-type";
import { APPOINTMENT_TIMES } from "@/options/appointment-time-options";

import styles from "./SelectedFilters.module.css";

function SelectedFilters() {
  const { dispatchFilters, filters } = useContext(FiltersContext);

  const filterKeys = Object.keys(filters) as (keyof FiltersType)[];

  return (
    <Card>
      <div className={styles["selected-filters"]}>
        <div className={styles.header}>
          <div>Filters:</div>
          {filterKeys.length > 0 && (
            <Button
              variant={Variant.TEXT}
              onClick={() => dispatchFilters({ type: "removed_all" })}
            >
              Delete All
            </Button>
          )}
        </div>

        <div className={styles["filters"]}>
          {filterKeys.map((key) => (
            <div className={styles.filter} key={key}>
              {key === "appointment"
                ? APPOINTMENT_TIMES.find((x) => x.value === filters[key])?.label
                : filters[key]}
              <Button
                variant={Variant.TEXT}
                onClick={() => dispatchFilters({ type: "removed_filter", key })}
              >
                <SolarTrashBinMinimalisticLinear />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default SelectedFilters;
