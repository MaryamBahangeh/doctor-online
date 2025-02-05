import React from "react";
import styles from "./MoreInfo.module.css";
import Card from "@/components/card/Card";
import { DoctorModel } from "@/models/doctor";

type Props = {
  doctor: DoctorModel;
};

function MoreInfo({ doctor }: Props) {
  return (
    <Card className={styles["more-info"]}>
      <div className={styles.amount}>${doctor.amount}</div>
      <div>
        An online meeting for <span>30 minutes</span> video call
      </div>
      <div>
        You can ask the doctor any questions you have for up to
        <span> 3 days</span>
      </div>
      <button>Book an appointment now</button>
    </Card>
  );
}

export default MoreInfo;
