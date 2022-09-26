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
    Swal.fire({
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
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
              <label htmlFor="calification">Not satisfied</label>
            </div>
            <div>
              <input
                type="radio"
                name="calification"
                value="2"
                onChange={handleCalification}
              />
              <label htmlFor="calification">Not very satisfied</label>
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
              <label htmlFor="calification">Very satisfied</label>
            </div>
            <div>
              <input
                type="radio"
                name="calification"
                value="5"
                onChange={handleCalification}
              />
              <label htmlFor="calification">Completely satisfied</label>
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
          Submit
        </button>
      </form>
    </div>
  );
}
