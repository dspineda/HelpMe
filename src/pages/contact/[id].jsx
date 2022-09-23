import DatePicker from "react-datepicker";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../styles/Contact.module.scss";

export default function Contact() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [form, setForm] = useState({});
  const [formToSend, setFormToSend] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const allData = {
      ...form,
      date: date.toDateString(),
      time: date.toTimeString(),
    };
    setFormToSend(allData);
  }, [date, time, form]);

  const newNotification = async () => {
    const notification = await fetch(`/api/notifications/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formToSend),
    });
    const response = await notification.json();
    console.log(
      "🚀 ~ file: [id].jsx ~ line 31 ~ newNotification ~ response",
      response
    );
    router.push("/");

  };

  const handleSend = (e) => {
    e.preventDefault();
    newNotification();
  };

  const handleChange = (e) => {
    setDate(date);
    setTime(date);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDate = (date) => {
    setDate(date);
    setTime(date);
  };


  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSend}>
        <div className={styles.form__title}>
          <h1>Contact</h1>
        </div>
        <div className={styles.form__input}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="500"
              rows="20"
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              onChange={handleChange}
            />
          </div>
          <label htmlFor="name">Visit Date</label>
          <DatePicker
            selected={date}
            onChange={handleDate}
            showTimeSelect
            dateFormat="Pp"
          />
          <div className={styles.form__button}>
            <button type="submit" >Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
