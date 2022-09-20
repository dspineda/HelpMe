import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "../../styles/Electrician.module.scss";

export default function ServiceElectrician() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllElectrician = async () => {
      const response = await fetch("/api/maintance/electrician", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(await response.json());
    };
    getAllElectrician();
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.header__img1}>
          <Image
            src="/img/home.png"
            width={100}
            height={100}
            alt="Imagen Home"
          ></Image>
        </div>
        <div className={styles.header__title}>
          <h1>HOME APPLIANCE REPAIR</h1>
        </div>
      </section>
      <section className={styles.info__services}>
        <div>
          <ul className={styles.info__list}>
            {data.map((data) =>
              data.isActivated === true ? (
                <li key={data.id} className={styles.info__services__users}>
                  <div className={styles.info__services__users__img}>
                    <Image
                      src={data.image}
                      width={277}
                      height={213}
                      alt="Service Paint"
                    ></Image>
                  </div>
                  <div className={styles.info__services__users__name}>
                    <h3>
                      {data.firstName} {data.lastName}
                    </h3>
                  </div>
                  <div className={styles.info__services__users__description}>
                    <p>{data.description}</p>
                  </div>
                  <p>{data.city}</p>
                  <button className={styles.info__services__users__button}>
                    Contact
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}
