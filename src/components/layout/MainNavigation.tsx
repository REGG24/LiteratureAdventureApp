import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Literature Adventure</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/employees' activeClassName={classes.active}>
                            Employees
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/clients' activeClassName={classes.active}>
                            Clients
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/etc' activeClassName={classes.active}>
                            Etc
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/home' activeClassName={classes.active}>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default MainNavigation;