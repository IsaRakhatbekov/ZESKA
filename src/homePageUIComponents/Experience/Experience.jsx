import styles from "./Experience.module.scss";

const Experience = () => {
  return (
    <div className={styles.experience} id="experience">
      <div className={`${styles.experienceContainer} container`}>
        <h2 className={`${styles.experienceTitle} def-title`}>
          <span className={`${styles.experienceUpTitle} upTitle`}>
            Около 5 л6т я в дизайне
          </span>
          Опыт
        </h2>

        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.date}>Ноябрь 2022 - Апрель 2025</p>
            <div className={styles.content}>
              <h4 className={styles.title}>Head of Design </h4>
              <p className={styles.subtitle}>
                <span>eCards, Salary</span> (Финансовые сервисы, продукт)
              </p>
              <p className={styles.text}>
                Удаленная фулл-тайм занятость в командах разработки и маркетинга
              </p>
              <ul className={styles.innerList}>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Дизайн двух платформ для пользователей и админов, с
                    отчетностью и высоконагруженными таблицами;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Создание и поддержание дизайн-системы;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Плавный переход со старой платформы на новую;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>Полный ребрендинг;</p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Cоздание лендингов, которые вели на платформы;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Посты, видео и анимации для соц сетей: инстаграм, линкедин,
                    телеграм.
                  </p>
                </li>
              </ul>
              <div className={styles.linksWrapper}>
                <a
                  className={`${styles.link} contactMe`}
                  href="https://ecards.cab/en"
                  target="_blank"
                >
                  Cсылка на сайт eCards
                </a>
                <a
                  className={`${styles.link} contactMe`}
                  href="https://salary.cab/"
                  target="_blank"
                >
                  Cсылка на сайт Salary
                </a>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <p className={styles.date}>Ноябрь 2022 - Январь 2023</p>
            <div className={styles.content}>
              <h4 className={styles.title}>Миддл UX/UI дизайнер</h4>
              <p className={styles.subtitle}>
                <span>Quantun Colosseum</span> (Сервис для обучения, продукт)
              </p>
              <p className={styles.text}>
                Удаленная фулл-тайм занятость в команде разработки{" "}
              </p>
              <ul className={styles.innerList}>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Разработка CRM системы, доработка всех флоу, создание флоу
                    для оплаты с созданием внутреннего кошелька;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Студенческий, Преподавательский и Админ доступы;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Доработка существующей дизайн-системы и UI кита;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>MUI, IOS гайдлайны;</p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Дизайн баннеров и рассылок.
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.item}>
            <p className={styles.date}>Май 2022 - Октябрь 2022</p>
            <div className={styles.content}>
              <h4 className={styles.title}>Миддл UX/UI дизайнер</h4>
              <p className={styles.subtitle}>
                <span>bitNorm</span> (крипта, продукт)
              </p>
              <p className={styles.text}>
                Удаленная фулл-тайм занятость в команде с дизайнерами
              </p>
              <ul className={styles.innerList}>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Разработка вайрфреймовна на основе тз, юзер флоу и сайт мэп;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Редизайн предыдущего интерфейса, брендинг, дизайн-система.
                  </p>
                </li>
              </ul>
              <a
                className={`${styles.link} contactMe`}
                href="https://bitnorm.com/"
                target="_blank"
              >
                Cсылка на сайт bitNorm
              </a>
            </div>
          </li>
          <li className={styles.item}>
            <p className={styles.date}>Январь 2022 - Июнь 2022</p>
            <div className={styles.content}>
              <h4 className={styles.title}>UX/UI дизайнер</h4>
              <p className={styles.subtitle}>
                <span>ITON</span> (Дизайн студия)
              </p>
              <p className={styles.text}>
                Удаленная проектная занятость в команде с проджект-менеджером и
                с клиентом
              </p>
              <ul className={styles.innerList}>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Создание/редизайн лендингов и многостраничных сайтов с UI
                    китом;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Создание постов для социальных сетей;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>Дизайн Email-рассылок.</p>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.item}>
            <p className={styles.date}>Сентябрь 2021 - Март 2022</p>
            <div className={styles.content}>
              <h4 className={styles.title}>UX/UI дизайнер на стажировке</h4>
              <p className={styles.subtitle}>
                <span>Demaloo</span> (Сервис для бронирования туров по
                Кыргызстану, стартап)
              </p>
              <p className={styles.text}>
                Оффлайн фулл-тайм занятость в командах разработки и дизайна
              </p>
              <ul className={styles.innerList}>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Разработка многостраничного сайта и адаптация под мобильные
                    устройства;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Разработка вайрфреймовна на основе тз, юзер флоу и сайт мэп;
                  </p>
                </li>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Cоздание UI кита и компонент-сетов.
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.item}>
            <p className={styles.date}>Май 2021 - Февраль 2023</p>
            <div className={styles.content}>
              <h4 className={styles.title}>
                Младший UX/UI дизайнер - помощник ментора
              </h4>
              <p className={styles.subtitle}>
                <span>IT Академия</span> (школа дизайна и программирования)
              </p>
              <p className={styles.text}>
                Оффлайн парт-тайм занятость с ментором
              </p>
              <ul className={styles.innerList}>
                <li className={styles.innerItem}>
                  <p className={styles.innerText}>
                    Помощь учителю на занятиях, проверка домашней работы
                    учеников, пояснение тем уроков, создание презентаций
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
