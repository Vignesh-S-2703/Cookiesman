import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.avif'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useState } from 'react';
import { Menu, X } from "lucide-react";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const cart = useSelector((state) => state.cart || []); // Ensure cart is an array
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Desserts', path: '/Desserts' },
        { name: 'Gifting', path: '/Gift' },
        { name: 'Chocolate', path: '/Chocolate' },
        { name: 'Buy Cookies', path: '/Buy' },
        { name: 'New Launches', path: '/New' }
    ];

    const filteredNavItems = navItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div>
        <div className='Nav1'>
            <div className="md:hidden g">
                <p variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={34} /> : <Menu size={34} />}
                </p>
            </div>
            <div className='logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <input type="search" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
            <div className='cart'>
                <Link className='aa' to ='/login'><VscAccount /><span>Account</span></Link>
                <Link className='aa' to ='/cart'><MdOutlineShoppingBag /><span>Cart ({cartCount})</span></Link>
            </div>
        </div>
    
        {isOpen && (
        <header>
            <nav>
                {filteredNavItems.map(item => (
                    <li key={item.name}><Link to={item.path}>{item.name}</Link></li>
                ))}
            </nav>
        </header>
        )}
    </div>
  )
}

export default Navbar