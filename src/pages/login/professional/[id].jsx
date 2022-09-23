/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/ProfessionalId.module.scss";

export default function ProfessionalId() {
  const [profile, setProfile] = useState([]);
  const [services, setServices] = useState([]);
  const [render, setRender] = useState(false);
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
    const getNotification = async () => {
      const response = await fetch(`/api/notifications/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setServices(data);
    };
    getProfile();
    getNotification();
  }, [id, render]);

  const handleAccept = async (id, email) => {
    setRender(true);
    const response = await fetch(`/api/notifications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "accepted",
        email: email,
      }),
    });
    console.log(
      "🚀 ~ file: [id].jsx ~ line 47 ~ handleAccept ~ response",
      response
    );
    setRender(false);
  };

  const handleReject = async (id, email) => {
    setRender(true);
    const response = await fetch(`/api/notifications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "reject",
        email: email,
      }),
    });
    console.log(
      "🚀 ~ file: [id].jsx ~ line 47 ~ handleAccept ~ response",
      response
    );
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
    console.log(
      "🚀 ~ file: [id].jsx ~ line 47 ~ handleAccept ~ response",
      response
    );
    setRender(false);
  };

  return (
    <div className={styles.container}>
      <h1>
        {profile[0]?.firstName} {profile[0]?.lastName}
      </h1>
      <img
        src={profile[0]?.image}
        alt="Profile Photo"
      ></img>
      <button>
        Change Photo
      </button>
      <div>
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
      <div>
        <h2>Services</h2>
        {services.length > 0 ? (
          <ul>
            {services.map((item) =>
              item.status === "pending" || item.status === "accepted" ? (
                <li
                  key={item._id}
                  className={
                    item?.status === "pending" ? styles.pending : styles.accept
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
                  <div>
                    {item.status === "pending" && item.status !== "reject" ? (
                      <div>
                        <button
                          onClick={() => handleAccept(item._id, item.email)}
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(item._id, item.email)}
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleCompleted(item._id, item.email)}
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
  );
}
