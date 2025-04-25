import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/zeska-logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <nav className={styles.nav}>
          <Image src={logo} alt="ZESKA" />
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Кейсы
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                ХАРД&СОФТ скиллы
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                ОПЫТ
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                КОнтакты
              </a>
            </li>
          </ul>
          <a className={styles.btn} href="#">
            Связаться со мной
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
