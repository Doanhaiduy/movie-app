import { NavLink } from 'react-router-dom';

function NavItem({ children, ...prop }) {
    return <NavLink {...prop}>{children}</NavLink>;
}

export default NavItem;
