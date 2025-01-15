"use client";

import React, { useContext } from "react";
import { FiltersContext } from "@/app/search/providers/FiltersProvider";
import Card from "@/components/card/Card";
import styles from "./SelectedFilters.module.css";
import { FiltersType } from "@/types/filters-type";
import SolarTrashBinMinimalistic2Bold from "@/icons/SolarTrashBinMinimalistic2Bold";

function SelectedFilters() {
  const { dispatchFilters, filters } = useContext(FiltersContext);

  const deleteAllClickHandler = () => {
    dispatchFilters({ type: "deletedAllFilters" });
  };

  const deleteClickHandler = (key: keyof FiltersType) => {
    dispatchFilters({ type: "deletedFilter", key });
  };

  const keyValues: (keyof FiltersType)[] = Object.keys(
    filters,
  ) as (keyof FiltersType)[];

  return (
    <Card>
      <div className={styles["selected-filters"]}>
        <div className={styles.title}>
          <div>Filters:</div>
          {keyValues.length > 0 && (
            <button
              className={styles["delete-all"]}
              onClick={deleteAllClickHandler}
            >
              Delete
            </button>
          )}
        </div>
        <div className={styles["filters"]}>
          {keyValues.map((key) => (
            <div className={styles.filter} key={key}>
              {filters[key]}
              <button onClick={() => deleteClickHandler(key)}>
                <SolarTrashBinMinimalistic2Bold />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default SelectedFilters;
