import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../styles/Contact.module.scss";

export default function Contact() {
  const [startDate, setStartDate] = useState(new Date());


  return (
    <div>
      <form className={styles.form}>
        <div className={styles.form__title}>
          <h1>Contact</h1>
        </div>
        <div className={styles.form__input}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <label htmlFor="name">Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
