import React, { useContext } from "react";
import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import Card from "@/components/card/Card";
import { FiltersType } from "@/types/filters-type";
import { SelectOptionType } from "@/types/select-option-type";

import styles from "./ItemsFilter.module.css";
import Button, { Variant } from "@/components/Button/Button";

type Props = {
  title: string;
  options: SelectOptionType[];
  fieldName: keyof FiltersType;
};

function ItemsFilter({ title, options, fieldName }: Props) {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  return (
    <Card title={title} className={styles["items-filter"]}>
      <ul>
        {options.map((option) => (
          <Button
            variant={Variant.TEXT}
            key={option.label}
            value={option.value}
            className={
              filters[fieldName] === option.value ? styles.selected : ""
            }
            onClick={() =>
              dispatchFilters({
                type: "updated_filtered",
                key: fieldName,
                value: option.value,
              })
            }
          >
            {option.label}
          </Button>
        ))}
      </ul>
    </Card>
  );
}

export default ItemsFilter;
