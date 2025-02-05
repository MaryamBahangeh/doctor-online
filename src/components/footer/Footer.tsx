import Link from "next/link";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";
import MingcuteWhatsappFill from "@/icons/MingcuteWhatsappFill";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <h3>Doctor Online</h3>
        <p>Best experiences of online consultations with doctors in Europe</p>
        <div className={styles.logo}></div>
      </div>

      <div className={styles.socials}>
        <ul>
          <li>
            <Link href="" target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <MingcuteYoutubeFill />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <MingcuteWhatsappFill />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <MingcuteLinkedinFill />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
