import Image from "next/image";
import styles from "./Cases.module.scss";

import eCardsLogo from "@/public/cases/eCard-logo.png";
import salaryLogo from "@/public/cases/salary-logo.png";
import quantumLogo from "@/public/cases/quantum-logo.png";

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
          <div className={styles.cardsImagesWrapper}>
            <div className={styles.cardsTopImages}>
              <div className={styles.cardsTopImg}></div>
              <div className={styles.cardsTopImg}></div>
            </div>
            <div className={styles.cardsBottomImages}>
              <div className={styles.cardsBottomImg}></div>
              <div className={styles.cardsBottomImg}></div>
              <div className={styles.cardsBottomImg}></div>
            </div>
          </div>
          <div className={styles.cardsContent}>
            <div className={styles.casesHeader}>
              <div className={styles.casesLogoWrapper}>
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
        <div className={styles.salary}>
          <ul className={styles.salaryList}>
            <li
              className={`${styles.salaryItem} ${styles.salaryImgWrapper}`}
            ></li>
            <li
              className={`${styles.salaryItem} ${styles.salaryImgWrapper}`}
            ></li>
            <li
              className={`${styles.salaryItem} ${styles.salaryImgWrapper}`}
            ></li>
            <li
              className={`${styles.salaryItem} ${styles.salaryImgWrapper}`}
            ></li>
          </ul>
          <div className={styles.casesHeader}>
            <div className={styles.casesLogoWrapper}>
              <Image src={salaryLogo} alt="eCard" />
            </div>
            <h4 className={`${styles.salaryTitle} ${styles.casesTitle}`}>
              Платформа для отправления выплат в Россию из-за рубежа
            </h4>
            <div className={`${styles.hashtag} hashtag`}>#ФИНТЕХ</div>
          </div>
          <h5 className={`${styles.salarySubtitle} ${styles.casesSubtitle}`}>
            Что я делала: Полная упаковка: Cоздание лого, Адаптирование
            дизайн-системы, MVP, Разработка полного флоу с нуля, Дизайн сайта,
            презентаций и постов для соц сетей
          </h5>
          <div className={`${styles.cardsTextWrapper} ${styles.textWrapper}`}>
            <p className={`${styles.cardsText} ${styles.text}`}>
              Во время работы над платформой eCards, меня привлекли ко второму
              проекту этой компании. За два месяца мы с командой подняли MVP,
              через который можно было проводить легально оплату за труд
              российских фрилансеров из заграницы.
            </p>
            <p className={`${styles.salaryText} ${styles.text}`}>
              Без четкого технического задания я создала дизайн интерфейсов для
              3 доступов: Админ панель, Фрилансер и Наниматель. Проект был
              создан после 24 февраля 2022 года и работает до сих пор,
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
        {/* block Quantum */}
        <div className={styles.quantum}>
          <ul className={styles.quantumList}>
            <li className={`${styles.quantumItem} ${styles.quantumImg}`}></li>
            <li className={`${styles.quantumItem} ${styles.quantumImg}`}></li>
            <li className={`${styles.quantumItem} ${styles.quantumImg}`}></li>
            <li className={`${styles.quantumItem} ${styles.quantumImg}`}></li>
            <li className={`${styles.quantumItem} ${styles.quantumImg}`}></li>
          </ul>
          <div className={styles.casesHeader}>
            <div className={styles.casesLogoWrapper}>
              <Image src={quantumLogo} alt="eCard" />
            </div>
            <h4 className={`${styles.salaryTitle} ${styles.casesTitle}`}>
              Сервис для онлайн-обучения
            </h4>
            <div className={`${styles.hashtag} hashtag`}>
              #Образовательная платформа
            </div>
          </div>
          <h5 className={`${styles.quantumSubtitle} ${styles.casesSubtitle}`}>
            Что я делала: Дизайн платформы уже был на последних этапах, но
            предыдущий дизайнер ушел. Заказчик хотел доделать платформу, поэтому
            я улучшила флоу оплаты, личный кабинет пользователя, путь покупки
            курса
          </h5>
        </div>

        {/* block Шnterview */}
        <div className={styles.interview}>
          <h2 className={styles.interviewTitle}>
            Хотите позвать меня на <span>собес</span>?
          </h2>
          <p className={styles.interviewSubtitle}>
            Если я вас заинтересовала, вы можете связаться со мной через
            телеграм:) Буду рада нашему сотрудничеству!
          </p>
          <div className={styles.interviewBtnWrapper}>
            <button className={styles.cvBtn}>Скачать резюме .pdf</button>
            <button className={`${styles.btn} contactMe`}>
              Связаться со мной
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
