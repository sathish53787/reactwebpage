import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
 Box,
  ThemeProvider
} from "@material-ui/core";
import {
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail                                   
} from "@material-ui/icons";
import images from "../images3.jpg";

//CSS STYLES    
const useStyles = makeStyles(theme     {
    menuSliderContainer: {
        width:250,
        background:"#335D9C",
        height:"30rem"
    },
    images:{
        dispaly:"black",
        margin:"0.5rem auto"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }
});

const Navbar = () => {
    const classes = useStyles()
    return (
       <>
       <Box className={classes.menuSliderContainer} component="div">
           <Avatar className={classes.images} src={images} alt="Russel Crowe"/>
       </Box>
       <Box component="nav">
           <AppBar position="static" style={{ background: "#222"}}>
               <Toolbar>
                  <IconButton>
                     <ArrowBack style={{color: "tomato"}}/>
                  </IconButton>
                  <Typography variant="5" style={{color:"tan"}}>Portfolio</Typography>
               </Toolbar>
           </AppBar>
       </Box>
       </>
    );
};          

export default Navbar;

