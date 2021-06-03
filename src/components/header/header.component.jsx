import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../icons/crown.svg'
import './header.styles.scss'

const Header = () => {
 return (<div className="header-wrapper">
     <div className="logo-wrapper">
         <Link to="/">
            <Logo />
         </Link>
     </div>
     <div className="nav-links-wrapper">
        <Link className="nav-link" to="/shopping">SHOP</Link>
        <Link className="nav-link">CONTACT</Link>
        <Link className="nav-link">SIGN IN</Link>
     </div>
 </div>)
}

export default Header;
