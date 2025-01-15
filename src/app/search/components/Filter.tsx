"use client";

import { useContext } from "react";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import SelectedFilters from "@/app/search/components/selected-filters/SelectedFilters";
import Card from "@/components/card/Card";

import { SPECIALITY_OPTIONS } from "@/options/speciality-options";
import { SERVICE_TYPE } from "@/options/service-types-options";

import { FiltersType } from "@/types/filters-type";

import styles from "./Filter.module.css";

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
      <SelectedFilters />

      <Card title={"Speciality:"} className={styles.speciality}>
        <ul>
          {SPECIALITY_OPTIONS.map((option) => (
            <li
              key={option.key}
              value={option.key}
              className={
                filters["specialityName"] === option.key ? styles.selected : ""
              }
              onClick={() => {
                filter(option.key, "specialityName");
              }}
            >
              {option.key}
            </li>
          ))}
        </ul>
      </Card>

      <Card title={"Service type:"}>
        {SERVICE_TYPE.map((option) => (
          <div key={option.value} className={styles["radio-list"]}>
            <input
              type="radio"
              id={option.key}
              name={option.key}
              value={option.value}
              checked={filters["serviceTypeName"] === option.key}
              onChange={() => filter(option.key, "serviceTypeName")}
            />

            <label htmlFor={option.key}>{option.key}</label>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default Filter;
