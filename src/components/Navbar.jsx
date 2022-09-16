import styles from "../styles/Navbar.module.scss";

function Navbar() {
  return (
		<header>
		<button to='/'>
			<a href='#' className='logo'>
				<span>Help</span>Me
			</a>
		</button>
		<nav className='navbar'>
			<a href='#'>
				<button to='/'>Home</button>
			</a>
			<a href='#'>
				<button to='/about'>About</button>
			</a>
		</nav>
	</header>
  );
}

export default Navbar;