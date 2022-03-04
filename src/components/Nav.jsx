import { useState } from 'react';
import { createPortal } from 'react-dom';
import { List } from 'react-bootstrap-icons';
import SideBar from './SideBar';
import { Link} from 'react-router-dom';
import bluePrint from '../bluePrints/navPrint'

const Overlay = ({ openSidebarHandler }) => {
	return <div className="overlay" onClick={openSidebarHandler}></div>;
};

function Navbar() {
	const [openSidebar, setOpenSidebar] = useState(false);

	const openSidebarHandler = () => {
		setOpenSidebar(!openSidebar);
		document.getElementById('root').style.filter = 'blur(3px)';
	};

	return (
		<nav className={"flex gap-3 items-center justify-between  px-4 relative xsm:gap-5 md:flex-row md:px-16 "+bluePrint.theme}>
			<List
				className="w-8 cursor-pointer text-7xl"
				onClick={openSidebarHandler}
			></List>

			<Link to="/" className='text-4xl'>
		{bluePrint.brandName}
			</Link>


			{createPortal(
				<SideBar
					openSidebar={openSidebar}
					setOpenSidebar={setOpenSidebar}
				/>,
				document.getElementById('sidebar'),
			)}
			{openSidebar &&
				createPortal(
					<Overlay closeSidebarHandler={openSidebarHandler} />,
					document.getElementById('overlay'),
				)}
		</nav>
	);
}

export default Navbar;
