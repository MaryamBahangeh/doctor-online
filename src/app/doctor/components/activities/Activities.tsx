import React from "react";
import { DoctorModel } from "@/models/doctor";
import Card from "@/components/card/Card";
import styles from "./Activities.module.css";
import MingcuteMessage4Line from "@/icons/MingcuteMessage4Line";
import MingcuteCalendarMonthLine from "@/icons/MingcuteCalendarMonthLine";

type Props = {
  doctor: DoctorModel;
};

function Activities({ doctor }: Props) {
  return (
    <Card className={styles.activities} title="Activities">
      <div className={styles.info}>
        <MingcuteMessage4Line />
        <strong>{doctor.consultations}</strong> Active Consultation
      </div>
      <div className={styles.info}>
        <MingcuteCalendarMonthLine />
        For more than <strong>{doctor.membershipDuration}</strong>, Doctor
        Online has had the honor of hosting {doctor.name} dedicated page.
      </div>
    </Card>
  );
}

export default Activities;
