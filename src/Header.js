import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>
            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className='searchIcon'/>
            </div>

            <div className='header_nav'>
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header_option'>
                    <span className='l1o1'>Hello {user? user.email : 'Guest'}</span>
                    <span className='l1o2'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                <div className='header_option'>
                    <span className='l1o1'>Returns</span>
                    <span className='l1o2'>Orders</span>
                </div>
                <div className='header_option'>
                    <span className='l1o1'>Your</span>
                    <span className='l1o2'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon className=''/>
                        <span className=' l1o2 basketcount'>{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Header