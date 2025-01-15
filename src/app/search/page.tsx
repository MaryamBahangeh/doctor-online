import GlobalSearchBox from "@/components/global-search-box/GlobalSearchBox";
import Card from "@/components/card/Card";
import Doctors from "@/components/doctors/doctors";

import Filter from "@/app/search/components/Filter";
import FiltersProvider from "@/app/search/providers/FiltersProvider";
import DoctorsProvider from "@/app/search/providers/DoctorsProvider";

import styles from "./page.module.css";
import { ReactElement } from "react";
import { FiltersType } from "@/app/search/types/filters-type";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({
  searchParams,
}: Props): Promise<ReactElement> {
  const defaultFilters = generateDefaultFilters(await searchParams);
  console.log("defalu" + defaultFilters);
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

            <div className={styles.sort}>
              <Card />
            </div>

            <div className={styles.doctors}>{<Doctors />}</div>
          </div>
        </div>
      </DoctorsProvider>
    </FiltersProvider>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FiltersType {
  const { specialityName, serviceTypeName } = searchParams;

  return {
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
