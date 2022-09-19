import Image from "next/image";
const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__social'>
				<h3 className='foooter__social__followme'>SIGUENOS</h3>
				<a href='https://www.facebook.com/'>
					<Image src='/img/facebook.png' width={25} height={25} alt='facebook' />
				</a>
				<a href='https://www.instagram.com/'>
					<Image src='/img/instagram.png' width={25} height={25} alt='instagram' />
				</a>
				<a href='https://www.twitter.com/'>
					<Image src='/img/twitter.png' width={25} height={25} alt='twitter' />
				</a>
				<a href='https://www.whatsapp.com/'>
					<Image src='/img/whatsapp.png'width={25} height={25} alt='linkedin' />
				</a>
			</div>

			<div className='footer__copyright'>
				<p>&copy; Copyright 2022</p>
			</div>
		</footer>
	);
};

export default Footer;
