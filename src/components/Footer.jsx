import styles from "../styles/Footer.module.scss";
import Image from "next/image";
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__social}>
				<h3 className={styles.foooter__social__followme}>SIGUENOS</h3>
				<a href='https://www.facebook.com/' className={styles.foooter__social__img}>
					<Image src='/img/facebook.png' width={25} height={25} alt='facebook' />
				</a>
				<a href='https://www.instagram.com/' className={styles.foooter__social__img}>
					<Image src='/img/instagram.png' width={25} height={25} alt='instagram' />
				</a>
				<a href='https://www.twitter.com/' className={styles.foooter__social__img}>
					<Image src='/img/twitter.png' width={25} height={25} alt='twitter' />
				</a>
				<a href='https://www.whatsapp.com/' className={styles.foooter__social__img__end}>
					<Image src='/img/whatsapp.png'width={25} height={25} alt='linkedin' />
				</a>
			</div>

			<div className={styles.footer__copyright}>
				<p>&copy; Copyright 2022</p>
			</div>
		</footer>
	);
};

export default Footer;
