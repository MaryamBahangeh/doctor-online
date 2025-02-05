import React from "react";
import { DoctorModel } from "@/models/doctor";
import Card from "@/components/card/Card";
import styles from "./Activities.module.css";

type Props = {
  doctor: DoctorModel;
};

function Activities({ doctor }: Props) {
  return (
    <Card className={styles.activities} title="Activities">
      <div className={styles.info}>
        <span>530</span> Active Consultation
      </div>
      <div className={styles.info}>
        For more than <span>2 years and 3 months </span>, Doctor Online has had
        the honor of hosting {doctor.name} dedicated page.
      </div>
    </Card>
  );
}

export default Activities;
