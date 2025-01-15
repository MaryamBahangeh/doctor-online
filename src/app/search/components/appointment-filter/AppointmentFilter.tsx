"use client";

import React, { useContext, useState } from "react";
import styles from "./AppointmentFilter.module.css";
import SelectComponent from "@/components/select/SelectComponent";
import { APPOINTMENT_TIMES } from "@/options/appointment-time-options";
import { SelectOptionType } from "@/types/select-option-type";
import { FiltersContext } from "@/app/search/providers/FiltersProvider";
import { FiltersType } from "@/types/filters-type";

function AppointmentFilter() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const filter = (value: string, filterType: keyof FiltersType) => {
    dispatchFilters({
      type: "filtered",
      key: filterType,
      value: value,
    });
  };
  const selectedOption = () => {
    if (filters["firstAvailableAppointmentLabel"]) {
      return APPOINTMENT_TIMES.find(
        (option) => option.label === filters["firstAvailableAppointmentLabel"],
      );
    }
    return APPOINTMENT_TIMES[0];
  };

  const changeHandler = (option: SelectOptionType) => {
    if (option === APPOINTMENT_TIMES[0]) {
      dispatchFilters({
        type: "deletedFilter",
        key: "firstAvailableAppointmentLabel",
      });
      return;
    }
    filter(option.label, "firstAvailableAppointmentLabel");
  };

  return (
    <div className={styles["appointment-filter"]}>
      <SelectComponent
        floating
        title="First available appointment"
        options={APPOINTMENT_TIMES}
        selectedOption={selectedOption()}
        onSelectedOptionChange={changeHandler}
      />
    </div>
  );
}

export default AppointmentFilter;
