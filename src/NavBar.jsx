import { useEffect, useState } from 'react';
// import NavButton from './NavButton.jsx';
// import NavAnchor from './NavAnchor.jsx';
import GetIcon from '@components/GetIcon.jsx';

export default function NavBar(){
    const isMobile = window.innerWidth <= 767;
    const [showMenu, setShowMenu] = useState(false);

    function handleToggleMenu() {
        setShowMenu(!showMenu);
        return;
    }

    function handleBlogRedirect(){
        window.location.replace("https://yurith-rubio.github.io/yurith-says/");
    }

    useEffect(() => {
    }, [showMenu]);

    if (isMobile) {
        return  <>
            <div id='MobileNavBar'>
                <div id='Hamburger' className={ showMenu ? 'show' : 'close'}>
                    <a href='#Services' onClick={handleToggleMenu} className={showMenu ? "nav-bar-button" : "hidden nav-bar-button"} children='Services'></a>
                    <a href="#Projects" onClick={handleToggleMenu} className={showMenu ? "nav-bar-button" : "hidden nav-bar-button"} children='Projects'></a>
                    <a href="#About" onClick={handleToggleMenu} className={showMenu ? "nav-bar-button" : "hidden nav-bar-button"} children='About'></a>
                    <a href='#Contact' onClick={handleToggleMenu} className={showMenu ? "nav-bar-button" : "hidden nav-bar-button"} children='Contact'></a>
                    <button className='btn-hamburguer' onClick={handleToggleMenu}>
                        <GetIcon icon='hamburguer' className='medium-icon color-blue' />
                    </button>
                </div>
            </div>        
        </>
    } else {
        return (
            <div id='NavBar'>
                <div className="padding-sides">
                    <img src="/yurith-light-logo.svg" width="100" />
                </div>
                <div className='nav-bar-content padding-sides'>
                    <a href='#Services' children='Services' onClick={handleToggleMenu} className="nav-bar-button"></a>
                    <a href='#Projects' children='Projects' onClick={handleToggleMenu} className="nav-bar-button"></a>
                    {/* <NavButton link='/blog' children='Blog' onClick={handleBlogRedirect} /> */}
                    <a href="#About" children='About' onClick={handleToggleMenu} className="nav-bar-button"></a>
                    {/* <NavButton link='/about' children='About' /> */}
                    <a href='#Contact' children='Contact' onClick={handleToggleMenu} className="nav-bar-button"></a>
                </div>
            </div>
            )
    }
}