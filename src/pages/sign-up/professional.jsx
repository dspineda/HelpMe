import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/Sign-up-professional.module.scss";

export default function SignUpProfessional() {
  const [image, setImage] = useState("")
  const [form, setForm] = useState({});
  const [service, setService] = useState({});
  const [formToSend, setFormToSend] = useState({});
  useEffect(() => {
    const newObje = Object.assign(form, {photo:image})
    setFormToSend({ name: service, professional: form });
  }, [service, form, image]);

  const newProfessional = async () => {
    const professional = await fetch("/api/auth/users/register-professional", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formToSend),
    });
    const data = await professional.json();
    console.log(
      "🚀 ~ file: professional.jsx ~ line 17 ~ newProfessional ~ data",
      data
    );
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    newProfessional();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
  };

  const handleService = (e) => {
    setService(e.target.value);
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "miscargas");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/davpin/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    console.log("🚀 ~ file: professional.jsx ~ line 60 ~ uploadImage ~ file.secure_url", file.secure_url)
  };
  



  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSignUp}>
        <div className={styles.container__title}>
          <h1>Register Form</h1>
        </div>
        <div className={styles.section}>
          <section className={styles.section1}>
            <div className={styles.form__input}>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="firstName"
                id="name"
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="email">Last name</label>
              <input
                type="text"
                name="lastName"
                id="last name"
                placeholder="Last name"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="photo">Photo </label>
              <input
                type="file"
                name="file"
                onChange={uploadImage}
              />
            </div>
          </section>
          <section className={styles.section2}>
            <div className={styles.form__input}>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="address">Services</label>
              <select
                id="cars"
                name="services"
                form="carform"
                onChange={handleService}
              >
                <option value="DEFAULT" disabled>
                  Select your service
                </option>
                <option value="Home appliances expert">
                  Home appliances expert
                </option>
                <option value="Home automation expert">
                  Home automation expert
                </option>
                <option value="Builder, plumber, painter">
                  Builder, plumber, painter
                </option>
                <option value="Electrician">Electrician</option>
              </select>
            </div>
            <div className={styles.form__input}>
              <label htmlFor="address">Describe your service</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="certificates">Certificates</label>
              <input
                type="file"
                id="myFiles"
                name="certificates"
                multiple
                accept="image/*"
              />
            </div>
          </section>
        </div>
        <div className={styles.form__input}>
          <button type="submit">Submit</button>
        </div>
        <div className={styles.form__input}>
          <p>
            Already have an account?{" "}
            <Link href="/login/professional">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
