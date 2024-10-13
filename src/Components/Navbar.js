import './Navbar.css';

const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="nav-left">
				<img />
				<h1>Pharmacist</h1></div>
			<div className="nav-right">
				<div className="links">
				<a href="/">Home</a>
				<a href="/cart">Cart</a>
			</div>
				<input type="text" placeholder="Search.." />
				<button>Search</button>
				<button>Sign out</button></div>

		</nav>
	);
}
export default Navbar;