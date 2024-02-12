import { useState } from "react";

export default function NavAnchor(props) {
    const { children, onClick, href } = props;
    const [active, setActive] = useState(false);

    function handleOnClickAnchor() {
        if (active == false) {
            setActive(true);
        } else {
            setActive(false);
        }    
    }

    return <a href={href} onClick={handleOnClickAnchor} className="nav-bar-button">{children}</a>
}