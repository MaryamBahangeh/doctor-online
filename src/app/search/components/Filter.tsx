"use client";
import styles from "./Filter.module.css";
import Card from "@/components/card/Card";
import { SPECIALITY_OPTIONS } from "@/options/speciality-options";
import { ServiceType } from "@/enums/service-type";
import { useContext } from "react";
import { FiltersContext } from "@/app/search/providers/FiltersProvider";

function Filter() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const serviceTypeChangeHandler = (serviceType: ServiceType) => {
    dispatchFilters({
      type: "setServiceType",
      serviceType: serviceType,
    });
  };

  const specialityClickHandler = (setSpecialityId: string) => {
    dispatchFilters({
      type: "setSpecialityId",
      specialityId: setSpecialityId,
    });
  };

  return (
    <div className={styles.filter}>
      <Card title={"Speciality:"}>
        <ul>
          {SPECIALITY_OPTIONS.map((option) => (
            <li
              key={option.value}
              value={option.value}
              className={
                filters.specialityId === option.value ? styles.selected : ""
              }
              onClick={() => {
                specialityClickHandler(option.value);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </Card>
      <Card title={"Service type:"}>
        <div className={styles["radio-list"]}>
          <input
            type="radio"
            id="online"
            name="service-type"
            value={ServiceType.ONLINE}
            checked={filters.serviceType === ServiceType.ONLINE}
            onChange={() => serviceTypeChangeHandler(ServiceType.ONLINE)}
          />
          <label htmlFor="online">Online</label>
        </div>

        <div className={styles["radio-list"]}>
          <input
            type="radio"
            id="in-person"
            name="service-type"
            value={ServiceType.IN_PERSON}
            checked={filters.serviceType === ServiceType.IN_PERSON}
            onChange={() => serviceTypeChangeHandler(ServiceType.IN_PERSON)}
          />
          <label htmlFor="in-person">In person</label>
        </div>
      </Card>
    </div>
  );
}

export default Filter;
