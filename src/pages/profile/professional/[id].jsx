/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/ProfileProfessional.module.scss";
import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import NotFound from "../../../components/NotFound";
import { useSession } from "next-auth/react";

export default function ProfileProfessional() {
  const [profile, setProfile] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [unanswered, setUnanswered] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [inProcess, setInProcess] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession();

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(`/api/maintance/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("🚀 ~ file: [id].jsx ~ line 26 ~ getProfile ~ data", data)

      setProfile(data);
    };
    const getStatistics = async () => {
      const response = await fetch(`/api/notifications/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.length > 0) {
        setCompleted(data.filter((item) => item.status === "completed"));
        setRejected(data.filter((item) => item.status === "reject"));
        setUnanswered(data.filter((item) => item.status === "pending"));
        setInProcess(data.filter((item) => item.status === "accepted"));
      }
    };
    getStatistics();
    getProfile();
  }, [id]);

  const handleContact = (id) => {
    console.log("🚀 ~ file: [id].jsx ~ line 29 ~ handleContact ~ id", id);
    router.push(`/contact/${id}`);
  };

  return (
    <>{session ?(
    <div>
      <div className={styles.container}>
        <section className={styles.section1}>
          <div className={styles.section1__container}>
            <div className={styles.section1__yellow}></div>
            <div className={styles.section1__photo}>
              <img
                src={profile[0]?.photo}
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
          <h5>Statistics</h5>
          <div className={styles.section2__statistics}>
            {completed && (
              <div>
                <strong>
                  <p>Completed</p>
                </strong>
                <p>{completed.length}</p>
              </div>
            )}
            {inProcess && (
              <div>
                <strong>
                  <p>Working</p>
                </strong>
                <p>{inProcess.length}</p>
              </div>
            )}
            {rejected && (
              <div>
                <strong>
                  <p>Rejected</p>
                </strong>
                <p>{rejected.length}</p>
              </div>
            )}
            {unanswered && (
              <div>
                <strong>
                  <p> Pending </p>
                </strong>
                <p>{unanswered.length}</p>
              </div>
            )}
          </div>

          <div className={styles.section2__description}>
            <p>{profile[0]?.description}</p>
            <p>
              <strong>Email:</strong> {profile[0]?.email}
            </p>
            <p>
              <strong>Phone:</strong> {profile[0]?.phone}
            </p>
            <p>
              <strong>City: </strong> {profile[0]?.city}
            </p>
            <p>
              <strong>Address: </strong> {profile[0]?.address}
            </p>
            <p>
              <strong>Certificates:</strong>
            </p>
            <p>
              <strong>Core:</strong>
            </p>
            <p>
              <strong>Comments:</strong>
            </p>
          </div>
          <div className={styles.section2__button}>
            <button onClick={() => handleContact(profile[0].id)}>
              Contact
            </button>
          </div>
        </section>
      </div>
      <Navbar />
    </div>
    ): <NotFound />} 
    </>
  );
}
