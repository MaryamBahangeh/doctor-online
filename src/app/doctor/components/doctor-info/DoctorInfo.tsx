import React from "react";
import Card from "@/components/card/Card";
import Image from "next/image";
import StarBold from "@/icons/StarBold";
import { DoctorModel } from "@/models/doctor";

import styles from "./DoctorInfo.module.css";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

type Props = {
  doctor: DoctorModel;
};

function DoctorInfo({ doctor }: Props) {
  return (
    <Card className={styles["doctor-info"]}>
      <div className={styles["primary-info"]}>
        <Image
          src={doctor.image}
          className={styles.image}
          alt="doctor image"
          width={90}
          height={90}
        />

        <div className={styles.info}>
          <div className={styles.name}>{doctor.name}</div>
          <div className={styles.speciality}>{doctor.specialityName}</div>
        </div>

        <div className={styles.info}>
          <div className={styles.speciality}>{doctor.specialtyDegreeName}</div>
          <div className={styles.address}>
            <MingcuteLocationLine />
            {doctor.address}
          </div>
        </div>
      </div>
      <div>{doctor.description}</div>
      <div className={styles.rate}>
        <StarBold color={"gold"} /> {doctor.rate}
        <span> {" (" + doctor.totalVotes + " reviews)"}</span>
      </div>
    </Card>
  );
}

export default DoctorInfo;
