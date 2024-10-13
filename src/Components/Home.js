import Sidebar from './Sidebar';
import MedInv from "./MedInv"
import MedSale from './MedSale';
import NewOrders from './NewOrders';
import Navbar from './Navbar';
import './Home.css'
const Home = () => { 
	return (
		<div className="home">
			<Sidebar />
			<div className="home-container">
				<Navbar />
				<div className='container'>
				<h1>Welcome to MedShop</h1>
				<p>MedShop is a one-stop shop for all your medical supplies. We have a wide range of products to cater to all your needs. We offer the best quality products at the most affordable prices. Shop with us and experience the difference.</p>
				<MedInv />
				<MedSale />
				<NewOrders />
				</div>
				
				
			</div>
		</div>
	);
}
export default  Home;