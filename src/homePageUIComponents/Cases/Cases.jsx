import Image from "next/image";
import styles from "./Cases.module.scss";

import eCardsLogo from "@/public/cases/eCard-logo.png";

const Cases = () => {
  return (
    <div className={styles.cases}>
      <div className={`${styles.casesContainer} container`}>
        <h2 className={`${styles.casesTitle} def-title`}>
          <span className={`${styles.casesUpTitle} upTitle`}>
            немного Портфолио
          </span>
          Кейсы, которые мне <span>нравятся</span>
        </h2>

        {/* block eCards */}
        <div className={styles.cards}>
          <ul className={styles.cardsList}>
            <li className={styles.cardsItem}></li>
            <li className={styles.cardsItem}></li>
            <li className={styles.cardsItem}></li>
            <li className={styles.cardsItem}></li>
            <li className={styles.cardsItem}></li>
          </ul>
          <div className={styles.cardsContent}>
            <div className={styles.cardsHeader}>
              <div className={styles.cardsLogoWrapper}>
                <Image src={eCardsLogo} alt="eCard" />
              </div>
              <h4 className={`${styles.cardsTitle} ${styles.casesTitle}`}>
                Финансовый сервис, созданный для арбитража трафика
              </h4>
              <div className={`${styles.hashtag} hashtag`}>#ФИНТЕХ</div>
            </div>
            <h5 className={`${styles.cardsSubtitle} ${styles.casesSubtitle}`}>
              Что я делала: Ребрендинг, Создание дизайн-системы, Улучшение UX,
              Разработка сайта, Дизайн постов и видео для соц сетей
            </h5>
            <div className={`${styles.cardsTextWrapper} ${styles.textWrapper}`}>
              <p className={`${styles.cardsText} ${styles.text}`}>
                Первоначальная задача была Редизайн UI платформы, но в
                последствии мои идеи по улучшению пользовательского пути
                привлекли на платформу более 5000 пользователей. Было
                разработано 2 доступа: пользовательский и саппорсткий на 300+
                cтраниц.
              </p>
              <p className={`${styles.cardsText} ${styles.text}`}>
                Я проработала над этим проектом почти 3 года и создала гибкую
                дизайн-систему, которая будет дальше использоваться для
                улучшения интерфейса без привлечения дополнительного дизайнера и
                сопутствующих расходов.
              </p>
            </div>
            <a
              className={styles.websiteLink}
              href="https://ecards.cab/en"
              target="_blank"
            >
              Перейти на сайт
            </a>
          </div>
        </div>
        {/* block Salary */}
        <div className={styles.salary}></div>
        {/* block Quantum */}
        <div className={styles.quantum}></div>
      </div>
    </div>
  );
};

export default Cases;
