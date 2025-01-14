import React from "react";
import Image from "next/image";
import Card from "@/components/card/Card";
import StarBold from "@/icons/StarBold";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import { DoctorModel } from "@/models/doctor";

import styles from "./DoctorCard.module.css";

type Props = {
  doctor: DoctorModel;
};

function DoctorCard({ doctor }: Props) {
  return (
    <Card>
      <div className={styles["doctor-card"]}>
        <div className={styles["container"]}>
          <div className={styles["image-container"]}>
            <Image
              className={styles.image}
              src={doctor.image}
              alt="doctor image"
              width={70}
              height={70}
            ></Image>
          </div>

          <div className={styles["doctor-info"]}>
            <div className={styles.name}>{doctor.name}</div>
            <div className={styles.description}>{doctor.specialityName}</div>
            <div className={styles.rate}>
              <StarBold color={"gold"} /> <span> {doctor.rate}</span>
              {" (" + doctor.totalVotes + " comments)"}
            </div>
          </div>
        </div>

        <div className={styles["other-info"]}>
          <div>{doctor.description}</div>
          <div className={styles.address}>
            <MingcuteLocationLine />
            {doctor.address}
          </div>

          <div>
            Service type :{" "}
            <span className={styles.data}>{doctor.serviceTypeName}</span>
          </div>

          <div>
            First available appointment :
            <span className={styles.data}>
              {doctor.firstAvailableAppointment}
            </span>
          </div>

          <div className={styles.book}>
            <button>Book an appointment</button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default DoctorCard;
