import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
//import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import classes from './Layout.module.css';

const Layout = (props: any) => {
    
    let classMain = 'full-screen';

    return(
        <Fragment>
            <MainNavigation />
            <main className={classes[classMain]}>{props.children}</main>
        </Fragment>
    )
};

export default Layout;