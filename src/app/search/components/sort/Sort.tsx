"use client";

import React, { useContext } from "react";

import { DoctorsContext } from "@/app/search/providers/DoctorsProvider";

import SelectComponent from "@/components/select/SelectComponent";

import { SORT_OPTIONS } from "@/options/sort-options";

function Sort() {
  const { sortBy, setSortBy } = useContext(DoctorsContext);

  return (
    <SelectComponent
      floating
      title="Sort by"
      options={SORT_OPTIONS}
      selectedOption={sortBy}
      onSelectedOptionChange={(option) => setSortBy(option)}
    />
  );
}

export default Sort;
