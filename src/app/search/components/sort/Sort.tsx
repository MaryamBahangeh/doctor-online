"use client";

import React, { useContext } from "react";

import { DoctorsContext } from "@/app/search/providers/DoctorsProvider";

import SelectComponent from "@/components/select/SelectComponent";
import { SelectOptionType } from "@/types/select-option-type";
import { SORT_OPTIONS } from "@/options/sort-options";

function Sort() {
  const { sortBy, setSortBy } = useContext(DoctorsContext);

  const selectedOption = (): SelectOptionType => {
    if (sortBy) {
      return SORT_OPTIONS.find((option) => option.value === sortBy)!;
    }
    return SORT_OPTIONS[0];
  };

  return (
    <SelectComponent
      floating
      title="Sort by"
      options={SORT_OPTIONS}
      selectedOption={selectedOption()}
      onSelectedOptionChange={(option) => setSortBy(option.value)}
    />
  );
}

export default Sort;
