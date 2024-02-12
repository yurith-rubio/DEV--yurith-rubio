import {NavLink} from "react-router-dom";

export default function NavButton(props){
    const {children, onClick, link, href} = props;

    return <NavLink href="href" to={link} onClick={onClick} className={({isActive}) => isActive ? "nav-bar-button active" : "nav-bar-button"}>{children}</NavLink>
}