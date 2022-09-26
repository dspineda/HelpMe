import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { message } = await updateNotification(id, calification, comment);
    if (message) {
      Swal.fire({
        title: "Calificación enviada",
        text: "Gracias por calificar el servicio",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.container__section2}>
        <div className={styles.container__section2__calification}>
          <div className={styles.calification}>
            <div>
              <input
                type="radio"
                name="calification"
                value="1"
                onChange={handleCalification}
              />
              <label htmlFor="calification">Nada satisfecho</label>
            </div>
            <div>
              <input
                type="radio"
                name="calification"
                value="2"
                onChange={handleCalification}
              />
              <label htmlFor="calification">Poco satisfecho</label>
            </div>
            <div>
              <input
                type="radio"
                name="calification"
                value="3"
                onChange={handleCalification}
              />
              <label htmlFor="calification">Neutral</label>
            </div>
            <div>
              <input
                type="radio"
                name="calification"
                value="4"
                onChange={handleCalification}
              />
              <label htmlFor="calification">Muy satisfecho</label>
            </div>
            <div>
              <input
                type="radio"
                name="calification"
                value="5"
                onChange={handleCalification}
              />
              <label htmlFor="calification">Totalmente satisfecho</label>
            </div>
          </div>
        </div>
        <div className={styles.container__section2__comment}>
          <div className={styles.comment}>
            <textarea
              name="comment"
              id="comment"
              cols="38"
              rows="10"
              onChange={handleComment}
            ></textarea>
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
}
