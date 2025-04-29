import Image from "next/image";
import styles from "./Skills.module.scss";

import figma from "@/public/figma.svg";
import ps from "@/public/ps.svg";
import ae from "@/public/ae.svg";
import yellow from "@/public/yellow.svg";
import pr from "@/public/pr.svg";
import some from "@/public/some.svg";
import tLogo from "@/public/t-logo.svg";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={`${styles.skillsContainer} container`}>
        <div className={styles.skillsTop}>
          <h2 className={`${styles.casesTitle} def-title`}>
            <span className={`${styles.casesUpTitle} upTitle`}>
              ХАРД & СОФТ
            </span>
            Ключевые навыки
          </h2>
          <div className={styles.skillsProgramsWrapper}>
            <ul className={styles.skillsPrograms}>
              <li className={`${styles.skillsProgramsImg} ${styles.figma}`}>
                <Image src={figma} alt="" />
              </li>
              <li className={`${styles.skillsProgramsImg} ${styles.ps}`}>
                <Image src={ps} alt="" />
              </li>
              <li className={`${styles.skillsProgramsImg} ${styles.ae}`}>
                <Image src={ae} alt="" />
              </li>
              <li className={`${styles.skillsProgramsImg} ${styles.yellow}`}>
                <Image src={yellow} alt="" />
              </li>
              <li className={`${styles.skillsProgramsImg} ${styles.pr}`}>
                <Image src={pr} alt="" />
              </li>
              <li className={`${styles.skillsProgramsImg} ${styles.some}`}>
                <Image src={some} alt="" />
              </li>
              <li className={`${styles.skillsProgramsImg} ${styles.tLogo}`}>
                <Image src={tLogo} alt="" />
              </li>
            </ul>
            <p className={styles.skillsProgramsSubtitle}>
              *в каких программах работаю
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftHashtagWrapper}>
              <span
                className={`${styles.leftHashtag} hashtag ${styles.leftHashtagGradient}`}
              >
                #Продуктовый дизайн
              </span>
              <span className={`${styles.leftHashtag} hashtag`}>
                #Дизайн-система
              </span>
              <span className={`${styles.leftHashtag} hashtag`}>
                #UI кит, MUI, гайдлайны ios
              </span>
            </div>
            <div className={styles.leftBottom}>
              <div className={styles.leftInner}>
                <h5 className={styles.leftTitle}>
                  Могу делать как чистый и аккуратный «корпоративный» дизайн
                  сервиса, так и экспериментировать, следуя последним трендам
                </h5>
                <p className={styles.leftText}>
                  Адаптирование текста из тз в понятный пользователю (типа тут
                  кнопка должна вести сюда, придумай название)
                </p>
              </div>
              <ul className={styles.leftList}>
                <li className={styles.leftItem}>
                  <p className={styles.leftItemText}>
                    Доработка, развитие и создание юзер флоу
                  </p>
                </li>
                <li className={styles.leftItem}>
                  <p className={styles.leftItemText}>
                    Дизайн-система (доработка, развитие и создание с нуля)
                  </p>
                </li>
                <li className={styles.leftItem}>
                  <p className={styles.leftItemText}>Прототипирование</p>
                </li>
                <li className={styles.leftItem}>
                  <p className={styles.leftItemText}>Составление CJM</p>
                </li>
                <li className={styles.leftItem}>
                  <p className={styles.leftItemText}>
                    Адаптирование дизайна под устройства
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <ul className={styles.rightList}>
            <li className={styles.rightItem}>
              <p className={styles.rightItemText}>
                Быстрая адаптация в команде (работала в командах с разной
                структурой)
              </p>
            </li>
            <li className={styles.rightItem}>
              <p className={styles.rightItemText}>
                Селф-менеджмент (соблюдаю организованность и структуру в тасках
                и фигме)
              </p>
            </li>
            <li className={styles.rightItem}>
              <p className={styles.rightItemText}>
                Готовность к переработкам особенно на первых порах
              </p>
            </li>
            <li className={styles.rightItem}>
              <p className={styles.rightItemText}>
                Готовность помочь и объяснить без пассивной агрессии
              </p>
            </li>
            <li className={styles.rightItem}>
              <p className={styles.rightItemText}>
                Коммуникабельность и Стрессоустройчивость
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
