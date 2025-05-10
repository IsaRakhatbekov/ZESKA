import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/zeska-logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuBtn, setMenuBtn] = useState(false);

  const handleCLickMenu = () => {
    setMenuBtn((prev) => !prev);
  };
  useEffect(() => {
    if (menuBtn) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }

    return () => {
      document.body.classList.remove("lock");
    };
  }, [menuBtn]);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <nav className={styles.nav}>
          <a className={styles.logoWrapper} href="/">
            <Image src={logo} alt="ZESKA" loading="lazy" />
          </a>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="#cases">
                Кейсы
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#skills">
                ХАРД&СОФТ скиллы
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#experience">
                ОПЫТ
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#footer">
                КОнтакты
              </a>
            </li>
          </ul>
          <a
            className={`${styles.btn} contactMe`}
            href="https://t.me/zeskaDesign"
            target="_blank"
            rel="noopener noreferrer"
          >
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
                href="#cases"
                onClick={() => setMenuBtn(false)}
              >
                Кейсы
              </a>
            </li>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="#skills"
                onClick={() => setMenuBtn(false)}
              >
                ХАРД&СОФТ скиллы
              </a>
            </li>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="#experience"
                onClick={() => setMenuBtn(false)}
              >
                ОПЫТ
              </a>
            </li>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="#footer"
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
