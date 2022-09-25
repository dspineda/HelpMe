import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/CalificationService.module.scss";

export default function CalificationService() {
  const [calification, setCalification] = useState(0);
  const [comment, setComment] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const updateNotification = async (id, calification, comment) => {
    const response = await fetch(`/api/notifications/califications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        calification,
        comment,
      }),
    });
    const data = await response.json();
    return data;
  };


  const handleCalification = (e) => {
    setCalification(e.target.value);
    
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNotification(id, calification, comment);
    console.log(calification, comment);
  };

  return (
    <div className={styles.container}>
      <h1>Califica el servicio</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.calification}>
          <input
            type="radio"
            name="calification"
            value="1"
            onChange={handleCalification}
          />
          <input
            type="radio"
            name="calification"
            value="2"
            onChange={handleCalification}
          />
          <input
            type="radio"
            name="calification"
            value="3"
            onChange={handleCalification}
          />

          <input
            type="radio"
            name="calification"
            value="4"
            onChange={handleCalification}
          />

          <input
            type="radio"
            name="calification"
            value="5"
            onChange={handleCalification}
          />
        </div>
        <div className={styles.comment}>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            onChange={handleComment}
          ></textarea>
        </div>

        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
}
