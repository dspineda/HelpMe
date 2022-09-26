/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavbarProfessional from "../../../components/NavbarProfessional";
import NotFound from "../../../components/NotFound";
import styles from "../../../styles/ProfessionalId.module.scss";

export default function ProfessionalId() {
  const [profile, setProfile] = useState([]);
  const [services, setServices] = useState([]);
  const [render, setRender] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if(id){
      const token = localStorage.getItem("token");
      if(token){
        const getProfile = async () => {
          const response = await fetch(`/api/maintance/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          setProfile(data);
        };
        const getNotification = async () => {
          const response = await fetch(`/api/notifications/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          setServices(data);
        };
        getProfile();
        getNotification();
      }else{
        router.push('/login/professional')
      }
    }
  }, [id, render, router]);


  const handleAccept = async (id, email, date, time, client,description) => {
    setRender(true);
    const response = await fetch(`/api/notifications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "accepted",
        email: email,
        date,
        time,
        client,
        description,
      }),
    });

    setRender(false);
  };

  const handleReject = async (id, email, date, time, client, description) => {
    setRender(true);
    const response = await fetch(`/api/notifications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "reject",
        email: email,
        date,
        time,
        client,
        description,
      }),
    });
    setRender(false);
  };

  const handleCompleted = async (id, email) => {
    setRender(true);
    const response = await fetch(`/api/notifications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        status: "completed",
      }),
    });
    setRender(false);
  };

  return (
    <>
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
            <div className={styles.container__title}>
              <h5>Profile</h5>
            </div>
            <div className={styles.section2__profile}>
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
            <div className={styles.section2__notifications}>
              <h5>Notifications</h5>
              <section className={styles.color__green}>
                <div className={styles.color__green__square}></div>
                <div>
                  <p>In progress</p>
                </div>
              </section>
              <section className={styles.color__yellow}>
                <div className={styles.color__yellow__square}></div>
                <div>
                  <p>New notification</p>
                </div>
              </section>
              <div className={styles.section2__list}>
                {services.length > 0 ? (
                  <ul>
                    {services.map((item) =>
                      item.status === "pending" ||
                      item.status === "accepted" ? (
                        <li
                          key={item._id}
                          className={
                            item?.status === "pending"
                              ? styles.pending
                              : styles.accept
                          }
                        >
                          <strong>Service:</strong> {item.description}
                          <br />
                          <strong>Client:</strong> {item.client}
                          <br />
                          <strong>Email:</strong> {item.email}
                          <br />
                          <strong>City:</strong> {item.city}
                          <br />
                          <strong>Address:</strong> {item.address}
                          <br />
                          <strong>Date:</strong> {item.date}
                          <br />
                          <strong>Hour:</strong> {item.time}
                          <br />
                          <div className={styles.section2__buttons}>
                            {item.status === "pending" &&
                            item.status !== "reject" ? (
                              <div>
                                <button
                                  onClick={() =>
                                    handleAccept(
                                      item._id,
                                      item.email,
                                      item.date,
                                      item.time,
                                      item.client,
                                      item.description
                                    )
                                  }
                                >
                                  Accept
                                </button>
                                <button
                                  className={styles.reject}
                                  onClick={() =>
                                    handleReject(
                                      item._id,
                                      item.email,
                                      item.date,
                                      item.time,
                                      item.client,
                                      item.description
                                    )
                                  }
                                >
                                  Reject
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() =>
                                  handleCompleted(item._id, item.email)
                                }
                              >
                                Completed
                              </button>
                            )}
                          </div>
                        </li>
                      ) : null
                    )}
                  </ul>
                ) : null}
              </div>
            </div>
          </section>
        </div>
        <NavbarProfessional />
    </>
  );
}
