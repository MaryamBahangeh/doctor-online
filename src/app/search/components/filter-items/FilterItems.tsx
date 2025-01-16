import React, { useContext } from "react";
import styles from "./FilterItems.module.css";
import Card from "@/components/card/Card";
import { FiltersContext } from "@/app/search/providers/FiltersProvider";
import { FiltersType } from "@/types/filters-type";
import { SelectOptionType } from "@/types/select-option-type";

export enum FILTER_VARIANT {
  list = "list",
  radio = "radio",
}
type Props = {
  filterVariant: FILTER_VARIANT;
  title: string;
  options: SelectOptionType[];
  fieldName: keyof FiltersType;
};

function FilterItems({ filterVariant, title, options, fieldName }: Props) {
  const { filters, dispatchFilters } = useContext(FiltersContext);
  const filter = (value: string, filterType: keyof FiltersType): void => {
    dispatchFilters({
      type: "filtered",
      key: filterType,
      value: value,
    });
  };
  return (
    <div className={styles["filter-items"]}>
      <Card title={title} className={styles.items}>
        <ul>
          {options.map((option) => {
            return (
              (filterVariant === FILTER_VARIANT.list && (
                <li
                  key={option.label}
                  value={option.label}
                  className={
                    filters[fieldName] === option.label ? styles.selected : ""
                  }
                  onClick={() => {
                    filter(option.label, fieldName);
                  }}
                >
                  {option.label}
                </li>
              )) ||
              (filterVariant === FILTER_VARIANT.radio && (
                <div key={option.value} className={styles["radio-list"]}>
                  <input
                    type="radio"
                    id={option.label}
                    name={option.label}
                    value={option.value}
                    checked={filters[fieldName] === option.label}
                    onChange={() => filter(option.label, fieldName)}
                  />
                  <label htmlFor={option.label}>{option.label}</label>
                </div>
              ))
            );
          })}
        </ul>
      </Card>
    </div>
  );
}

export default FilterItems;
