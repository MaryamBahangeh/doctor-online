import React from "react";
import Image from "next/image";
import Card from "@/components/card/Card";
import StarBold from "@/icons/StarBold";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import { DoctorModel } from "@/models/doctor";
import Button, { Color, Variant } from "@/components/Button/Button";

import styles from "./DoctorCard.module.css";

type Props = {
  doctor: DoctorModel;
};

function DoctorCard({ doctor }: Props) {
  return (
    <Card>
      <div className={styles["doctor-card"]}>
        <div className={styles["primary-info"]}>
          <Image
            className={styles.image}
            src={doctor.image}
            alt="Doctor image"
            width={70}
            height={70}
          />

          <div className={styles.name}>{doctor.name}</div>
          <div className={styles.speciality}>
            {doctor.speciality.label} - {doctor.degree.label}
          </div>
          <div className={styles.rate}>
            <StarBold className={styles.star} /> {doctor.rate}
            <span> {" (" + doctor.totalVotes + " comments)"}</span>
          </div>

          <div className={styles.description}>{doctor.description}</div>
        </div>

        <div className={styles.line}></div>

        <div className={styles["secondary-info"]}>
          <div>
            Service type:
            <span className={styles.data}>{doctor.serviceType.label}</span>
          </div>

          <div>
            First available appointment:
            <span className={styles.data}>{doctor.appointment.label}</span>
          </div>

          <div className={styles.address}>
            <MingcuteLocationLine />
            {doctor.address}
          </div>

          <div>
            <Button variant={Variant.SOLID} color={Color.PRIMARY}>
              Book An Appointment
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default DoctorCard;
