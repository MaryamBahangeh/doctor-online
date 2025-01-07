import styles from "./page.module.css";
import Filter from "@/app/search/components/Filter";
import FiltersProvider from "@/app/search/providers/FiltersProvider";
import GlobalSearchBox from "@/components/global-search-box/GlobalSearchBox";
import Card from "@/components/card/Card";
import DoctorsProvider from "@/app/search/providers/DoctorsProvider";
import Doctors from "@/components/doctors/doctors";
import SelectedFilters from "@/app/search/components/SelectedFilters/SelectedFilters";

function Page() {
  return (
    <FiltersProvider>
      <DoctorsProvider>
        <div className={styles.page}>
          <GlobalSearchBox />
          <SelectedFilters />
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

export default Page;
