import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

import styles from "./GlobalSearchBox.module.css";

function GlobalSearchBox() {
  return (
    <div className={styles["search-box"]}>
      <div className={styles["input-container"]}>
        <MingcuteSearchLine className={styles.prefix}></MingcuteSearchLine>
        <input placeholder="Doctorname, Speciality, Desease name,...." />
      </div>

      <div className={styles.divider}></div>

      <button>
        <MingcuteLocationLine></MingcuteLocationLine>
        All Countries
      </button>
    </div>
  );
}

export default GlobalSearchBox;
