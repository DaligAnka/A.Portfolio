import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/Logo-A.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faLink, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faSquareGithub, faTelegram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';



const Sidebar = () => {

    const [ShowNav, setShowNav] = useState(false);


return(
<div className='nav-bar'>
<Link className='logo' to='/'
onClick={() => setShowNav(false)}>

    <img src={LogoS} alt='logo' />
    <img className='sub-logo' src={LogoSubtitle} alt='Agassiz' />
</Link>

<nav className={ShowNav ? 'mobile-show' : ''}>

    <NavLink exact="true" activeclassname="active" to="/"
     onClick={() => setShowNav(false)}>

<FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
    </NavLink>

    <NavLink exact="true" activeclassname="active" className="about-link" to="/about"
    onClick={() => setShowNav(false)}>

<FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
    </NavLink>

    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact"
    onClick={() => setShowNav(false)}>
<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
    </NavLink>

    <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />


{/* 
        <a target='_blank' rel='noreferrer' href='https://github.com/DaligAnka'  onClick={() => setShowNav(false)}> 
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' className='anchor-tag' />
        </a>
    
        <a target='_blank' rel='noreferrer' href='https://linktr.ee/daliganka'onClick={() => setShowNav(false)}> 
            <FontAwesomeIcon icon={faLink} color='#4d4d4e' className='anchor-tag' />
        </a>
    
        <a target='_blank' rel='noreferrer' href='https://t.me/DaligAnka' onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faTelegram} color='#4d4d4e' className='anchor-tag' />
        </a>  */}


</nav>
<ul>
    <li>
        <a target='_blank' rel='noreferrer' href='https://github.com/DaligAnka' >
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' className='anchor-tag' />
        </a>
    </li>
    <li>
        <a target='_blank' rel='noreferrer' href='https://linktr.ee/daliganka'>
            <FontAwesomeIcon icon={faLink} color='#4d4d4e' className='anchor-tag' />
        </a>
    </li>
    <li>
        <a target='_blank' rel='noreferrer' href='https://t.me/DaligAnka'>
            <FontAwesomeIcon icon={faTelegram} color='#4d4d4e' className='anchor-tag' />
        </a>
    </li>
</ul>

<FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />

</div>

    )
}

export default Sidebar;