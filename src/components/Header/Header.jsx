import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/zeska-logo.svg";
import { useState } from "react";

const Header = () => {
  const [menuBtn, setMenuBtn] = useState(false);

  const handleCLickMenu = () => {
    setMenuBtn((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <nav className={styles.nav}>
          <div className={styles.logoWrapper}>
            <Image src={logo} alt="ZESKA" />
          </div>
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
          <a className={`${styles.btn} contactMe`} href="#">
            Связаться со мной
          </a>
          <button
            className={`${styles.menuBtn} ${
              menuBtn ? styles.menuBtnActive : ""
            }`}
            onClick={handleCLickMenu}
          >
            <span></span>
          </button>
        </nav>
        <div
          className={`${styles.menuBody} ${
            menuBtn ? styles.menuBodyActive : ""
          }`}
        >
          <ul className={styles.list}>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="#"
                onClick={() => setMenuBtn(false)}
              >
                Кейсы
              </a>
            </li>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="#"
                onClick={() => setMenuBtn(false)}
              >
                ХАРД&СОФТ скиллы
              </a>
            </li>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="#"
                onClick={() => setMenuBtn(false)}
              >
                ОПЫТ
              </a>
            </li>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="#"
                onClick={() => setMenuBtn(false)}
              >
                КОнтакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
