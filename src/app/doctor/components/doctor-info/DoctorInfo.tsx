import React from "react";
import Card from "@/components/card/Card";
import Image from "next/image";
import StarBold from "@/icons/StarBold";
import { DoctorModel } from "@/models/doctor";

import styles from "./DoctorInfo.module.css";

type Props = {
  doctor: DoctorModel;
};

function DoctorInfo({ doctor }: Props) {
  return (
    <Card className={styles["doctor-info"]}>
      <div className={styles.main}>
        <Image
          src={doctor.image}
          className={styles.image}
          alt="doctor image"
          width={120}
          height={120}
        />

        <div className={styles.info}>
          <div className={styles.name}>{doctor.name}</div>
          <div className={styles.speciality}>
            {doctor.speciality.label} - {doctor.degree.label}
          </div>
        </div>

        <div className={styles.rate}>
          <StarBold /> {doctor.rate}
          <span> {" (" + doctor.totalVotes + " reviews)"}</span>
        </div>
      </div>

      <div className={styles.description}>{doctor.description}</div>
    </Card>
  );
}

export default DoctorInfo;
