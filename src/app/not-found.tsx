import styles from "./not-found.module.css";
import GlobalSearchBox from "@/components/global-search-box/GlobalSearchBox";
import notfound from "@/assests/illustrations/notfound.svg";
import Image from "next/image";

function NotFound() {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writing}>
        <h1>404</h1>
        <h3>This page could not be found!</h3>
        <h5>
          Search your desired doctor or medical center using the search box.
        </h5>
      </div>
      <div className={styles.visuals}>
        <Image src={notfound} alt=""></Image>
      </div>
      <div className={styles.search}>
        <GlobalSearchBox />
      </div>
    </div>
  );
}

export default NotFound;
