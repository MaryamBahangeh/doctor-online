import GlobalSearchBox from "@/components/global-search-box/GlobalSearchBox";
import DoctorOnlineLogo from "@/logo/DoctorOnline.logo";

import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <h1>
        <DoctorOnlineLogo></DoctorOnlineLogo>
        Doctor Online
      </h1>

      <GlobalSearchBox></GlobalSearchBox>

      <div className={styles.history}>
        <div>Recent search</div>
        <ul>
          <li>Psychologist</li>
          <li>Pediatrician</li>
        </ul>
      </div>
    </div>
  );
}
