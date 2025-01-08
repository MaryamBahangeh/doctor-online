"use client";

import React, { useContext } from "react";
import { FiltersContext } from "@/app/search/providers/FiltersProvider";
import Card from "@/components/card/Card";
import styles from "./SelectedFilters.module.css";

function SelectedFilters() {
  const { dispatchFilters, selectedFiltersText } = useContext(FiltersContext);

  const deleteClickHandler = () => {
    dispatchFilters({ type: "deleteAllFilters" });
  };

  return (
    <Card>
      <div className={styles["selected-filters"]}>
        <div className={styles.title}>
          <div>Filters:</div>
          <button onClick={deleteClickHandler}>Delete</button>
        </div>
      </div>
      <div>{selectedFiltersText}</div>
    </Card>
  );
}

export default SelectedFilters;
