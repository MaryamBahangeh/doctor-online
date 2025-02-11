import React from "react";
import styles from "./MoreInfo.module.css";
import Card from "@/components/card/Card";
import { DoctorModel } from "@/models/doctor";
import Button, { Color, Variant } from "@/components/Button/Button";

type Props = {
  doctor: DoctorModel;
};

function MoreInfo({ doctor }: Props) {
  return (
    <Card className={styles["more-info"]}>
      <header>
        <div className={styles.indicator}></div>
        <div className={styles.title}>Book an appointment now!</div>
        <div className={styles.price}>${doctor.price}</div>
      </header>

      <main>
        <ul className={styles.perks}>
          <li className={styles.perk}>
            An online meeting for <span>30 minutes</span> video call
          </li>
          <li className={styles.perk}>
            You can ask the doctor any questions you have for up to
            <span> 3 days</span>
          </li>
        </ul>
      </main>

      <footer>
        <Button
          className={styles.appointment}
          variant={Variant.SOLID}
          color={Color.PRIMARY}
        >
          Book an appointment now
        </Button>
      </footer>
    </Card>
  );
}

export default MoreInfo;
