/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import { useEffect, useState } from "react";

function NavbarProfessional() {
  const [profile, setProfile] = useState([]);
  const BASE_URL = process.env.BASE_URL;
  const router = useRouter();
  const {id} = router.query

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
       getProfile();
      }else{
        router.push('/login/professional')
      }
    }
  }, [id, router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <>
      {id ? (
        <header>
          <div className={styles.container}>
            <button onClick={() => router.push(`/login/professional/${profile[0].id}`)}>SETTINGS </button>
            <button onClick={handleLogout}>
              SIGN OUT
            </button>
            <div className={styles.logo}>
              <img
                src={profile[0]?.photo}
                alt="user image"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </div>
            <div>
              <h5>{profile[0]?.firstName} {profile[0]?.lastName}</h5>
            </div>
          </div>
        </header>
      ) : (
        <header>
          <div className={styles.container}>
            <button onClick={() => router.push("/")}>HOME </button>
            <button onClick={() => router.push("/login/client")}>LOG IN</button>
          </div>
        </header>
      )}
    </>
  );
}

export default NavbarProfessional;
