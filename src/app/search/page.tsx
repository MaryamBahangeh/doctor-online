import { ReactElement } from "react";

import FiltersProvider from "@/app/search/providers/FiltersProvider";
import DoctorsProvider from "@/app/search/providers/DoctorsProvider";

import GlobalSearchBox from "@/components/global-search-box/GlobalSearchBox";
import Doctors from "@/components/doctors/doctors";

import Filter from "@/app/search/components/Filter";
import AppointmentFilter from "@/app/search/components/appointment-filter/AppointmentFilter";
import Sort from "@/app/search/components/sort/Sort";
import Stats from "@/app/search/components/stats/Stats";

import { FiltersType } from "@/types/filters-type";

import styles from "./page.module.css";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({
  searchParams,
}: Props): Promise<ReactElement> {
  const defaultFilters = generateDefaultFilters(await searchParams);

  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <DoctorsProvider>
        <div className={styles.page}>
          <div className={styles.search}>
            <GlobalSearchBox />
          </div>

          <div className={styles.container}>
            <div className={styles.filters}>
              <Filter />
            </div>

            <div className={styles.toolbar}>
              <Sort />
              <AppointmentFilter />
              <Stats />
            </div>

            <div className={styles.doctors}>{<Doctors />}</div>
          </div>
        </div>
      </DoctorsProvider>
    </FiltersProvider>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FiltersType {
  const { specialityName, serviceTypeName, name } = searchParams;

  return {
    name: normalizeFilter(name),
    specialityName: normalizeFilter(specialityName),
    serviceTypeName: normalizeFilter(serviceTypeName),
  };
}

function normalizeFilter(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}
