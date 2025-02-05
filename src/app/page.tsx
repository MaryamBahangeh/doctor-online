import GlobalSearchBox from "@/components/global-search-box/GlobalSearchBox";
import DoctorOnlineLogo from "@/logo/DoctorOnline.logo";

import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <h1>
        <DoctorOnlineLogo />
        Doctor Online
      </h1>

      <GlobalSearchBox />

      <div className={styles.history}>
        <div>Your recent search:</div>
        <ul>
          <li>Gynecologist</li>
          <li>Dermatologist</li>
        </ul>
      </div>
    </div>
  );
}
