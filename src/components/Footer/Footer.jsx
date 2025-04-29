import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} footer`}>
      <div className={`${styles.footerContainer} container`}>
        <h2 className={styles.title}>КОНТАКТЫ</h2>
        <div className={styles.wrapper}>
          <nav className={styles.nav}>
            <div className={styles.navInner}>
              <a className={styles.link} href="#">
                Кейсы
              </a>
              <a className={styles.link} href="#">
                Опыт
              </a>
              <a className={styles.link} href="#">
                Хард&Cофт скиллы
              </a>
            </div>
            <div className={styles.contactsWrapper}>
              <a className={styles.secondLink} href="#">
                VIKA.SOKOLOVA728@GMAIL.COM
              </a>
              <a className={styles.secondLink} href="#">
                +996 220 68 25 17
              </a>
              <a className={styles.secondLink} href="#">
                @zeskaDesign
              </a>
            </div>
          </nav>
          <h2 className={styles.bitText}>VIKA.SOKOLOVA728@GMAIL.COM</h2>
          <div className={styles.bottom}>
            <div className={styles.socialWrapper}>
              <a className={styles.socialLink} href="#">
                BEHANCE
                <span>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_19758)">
                      <path
                        d="M17.25 0.763184L-0.75 18.7632M2.06818 0.763184H17.25V15.945"
                        stroke="#151515"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_19758">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.0131836)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
              <a className={styles.socialLink} href="#">
                TELEGRAM
                <span>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_19758)">
                      <path
                        d="M17.25 0.763184L-0.75 18.7632M2.06818 0.763184H17.25V15.945"
                        stroke="#151515"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_19758">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.0131836)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
              <a className={styles.socialLink} href="#">
                LINKEDIN
                <span>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_19758)">
                      <path
                        d="M17.25 0.763184L-0.75 18.7632M2.06818 0.763184H17.25V15.945"
                        stroke="#151515"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_19758">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.0131836)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>
            <div className={styles.middleBtnWrapper}>
              <button className={styles.cvBtn}>Скачать резюме .pdf</button>
              <button className={`${styles.btn} contactMe`}>
                Связаться со мной
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
