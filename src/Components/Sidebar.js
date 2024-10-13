import "./Sidebar.css";
const Sidebar = () => { 
	return (
		<div className="sidebar">
			<h2>MedShop</h2>
			<ul>
				<li>Home</li>
				<li>Inventory</li>
				<li>Sales</li>
				<li>New Orders</li>
				<li>Contact</li>
			</ul>
		</div>
	);
}
export default Sidebar;