import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Box from "@mui/material/Box";
//import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Layout = (props: any) => {
    
    return(
        <Fragment>
            <MainNavigation />
            <Box       sx={{
        width: '90%',
        maxWidth:'70rem',
        margin:'3rem'
      }}>{props.children}</Box>
            {/* <main className={classes[classMain]}>{props.children}</main> */}
        </Fragment>
    )
};

export default Layout;