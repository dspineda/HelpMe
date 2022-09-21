/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/ProfileProfessional.module.scss";
import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

export default function ProfileProfessional() {
  const [profile, setProfile] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(`/api/maintance/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setProfile(data);
    };
    getProfile();
  }, [id]);

  const handleContact = (id) => {
    console.log("🚀 ~ file: [id].jsx ~ line 29 ~ handleContact ~ id", id)
    router.push(`/contact/${id}`);
  };

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.section1}>
          <div className={styles.section1__container}>
            <div className={styles.section1__yellow}></div>
            <div className={styles.section1__photo}>
              <img
                src={profile[0]?.image}
                alt="Profile Photo"
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.section2__name}>
            <h1>
              {profile[0]?.firstName} {profile[0]?.lastName}
            </h1>
          </div>
          <div className={styles.section2__description}>
            <p>{profile[0]?.description}</p>
            <p>
              <strong>email:</strong> {profile[0]?.email}
            </p>
            <p>
              <strong>phone:</strong> {profile[0]?.phone}
            </p>
            <p>
              <strong>city: </strong> {profile[0]?.city}
            </p>
            <p>
              <strong>address: </strong> {profile[0]?.address}
            </p>
            <p>
              <strong>certificates:</strong>
            </p>
            <p>
              <strong>score:</strong>
            </p>
            <p>
              <strong>comments:</strong>
            </p>
          </div>
          <div className={styles.section2__button}>
            <button onClick={()=>handleContact(profile[0].id)}>Contact</button>
          </div>
        </section>
      </div>
      <Navbar />
    </div>
  );
}
