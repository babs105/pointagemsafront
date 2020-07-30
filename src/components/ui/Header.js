import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {userService} from '../../service/userService';


import logo from '../../static/images/logoMSA.png';
import {getCookie,setCookie,delCookies } from '../../utils/Cookie';

function ElevationScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  const useStyles = makeStyles(theme =>(
      {
        toolbarMargin:{ 
            ...theme.mixins.toolbar,
            marginBottom:"2em",
            [theme.breakpoints.down("md")]:{
                marginBottom:"2em",  
              },
              [theme.breakpoints.down("xs")]:{
                marginBottom:"1.5em", 
              },
        },
        appbar:{
            //  backgroundColor:"#03a9f4",
            zIndex:theme.zIndex.modal + 1
        },
        logo:{
            height:"6em",
            [theme.breakpoints.down("md")]:{
                height:"5em",  
              },
              [theme.breakpoints.down("xs")]:{
                height:"4em", 
              },
        },
        logoContainer:{
            padding:0,
            "&:hover":{
              backgroundColor:"transparent"
            }
        
      },
      tabContainer:{
        marginLeft :"auto"
      },  
      tab:{
        ...theme.typography.tab,
        minWidth:10,
        marginLeft:"25px"
      },
      drawerIconButton:{
        marginLeft:"auto",
        "&:hover":{
          backgroundColor:"transparent"
        }
      },
      drawerMenuIcon:{
        height:"50px",
        width :"50px",
    
      },
      drawer:{
       backgroundColor:theme.palette.common.blue
      },
      drawerItem:{
        ...theme.typography.tab,
        color:"white",
        opacity:0.7
      },
      drawerItemEstimate:{
        backgroundColor:theme.palette.common.orange
      },
      drawerItemSelected:{
        opacity :1
      },
      button:{
        ...theme.typography.logout,
        borderRadius: "50px",
        marginRight:"25px",
        marginLeft:"50px",
        height:"45px",
        
      }
    }

  ));

 const Header = (props) =>{
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


  const [value,setValue]= useState(0);
  const [openDrawer,setOpenDrawer]= useState(false);
  const [user,setUser] = useState({});


   const handleChangeTab = (e,newValue) =>{
    setValue(newValue);
  };

  useEffect(() =>{
   
    switch(window.location.pathname){
      case "/":
        if(value !== 0){
          setValue(0);
        }
        break;
      case "/users":
            if(value !== 1){
              setValue(1);
            }
            break;
      case "/entrees":
          if(value !== 2){
            setValue(2);
          }
          break;
      case "/sorties":
              if(value !== 3){
                setValue(3);
           }
         break;   
      case "/personnel":
          if(value !== 4){
            setValue(4);
        }
          break;  
      case "/logout":
            if(value !== 5){
              setValue(5);
         }
         break;  
                                      
      default:
        break;
    }
    getLoggedUser();

  },[value])

  const getLoggedUser = () =>{
    let cookie =  getCookie('APPPTNMSA_COOKIE');
    
     if(cookie) {
        userService.loginExistingUser(cookie)
            .then(data =>{
                setUser(data.user)       
        });
     }
  }
  const logout = () => {

    delCookies();
    setCookie('APPPTNMSA_COOKIE','');
    setUser(null);
    window.localStorage.removeItem('idUser');
    console.log('DECONNEXION');
   
 
 }
  
  const tabs =(
  <React.Fragment>
    {user.role ==="Admin" ?(
        
     <Tabs
    value={value}
    onChange={handleChangeTab}
    className={classes.tabContainer}
    indicatorColor="primary">
            <Tab className={classes.tab} label="Tableau de Bord" component={Link}  to="/"/>
            <Tab className={classes.tab} label="Utilisateurs"  component={Link}  to="/users"/>
            <Tab className={classes.tab} label="Les Entrées" component={Link}  to="/entrees"/>
            <Tab className={classes.tab} label="Les Sorties" component={Link}  to="/sorties"/>
            <Tab className={classes.tab} label="Le Personnel " component={Link}  to="/personnel"/>
        
       </Tabs>
       ):null
    }
      {user.role ==="Agent" ?(
        
        <Tabs
       value={value}
       onChange={handleChangeTab}
       className={classes.tabContainer}
       indicatorColor="primary">
            <Tab className={classes.tab} label="Tableau de Bord" component={Link}  to="/"/>
            <Tab className={classes.tab} label="Utilisateurs"  component={Link}  to="/users"/>
            <Tab className={classes.tab} label="Les Entrées" component={Link}  to="/entrees"/>
            <Tab className={classes.tab} label="Les Sorties" component={Link}  to="/sorties"/>S
           
          </Tabs>
          ):null
       }
   <Button variant="contained" color="secondary" component={Link} to="/logout" onClick={ ()=>{setValue(5);logout() }} className={classes.button}>
               Déconnexion
    </Button>
</React.Fragment>
  );
  const drawer = (
    <React.Fragment>
    {user.role ==="Admin" ?(
      <SwipeableDrawer
          disableBackdropTransition={!iOS} 
          disableDiscovery={iOS}
          open={openDrawer}
          onClose={()=>setOpenDrawer(false)}
          onOpen={()=>setOpenDrawer(true)}
          classes={{paper:classes.drawer}}
         >
          <div className={classes.toolbarMargin}/> 
         <List disablePadding>
           <ListItem
             onClick={()=> {setOpenDrawer(false);setValue(0)}}  
             divider button
             component={Link} 
             to="/"
             selected={value === 0}
             >
             <ListItemText 
                className={value === 0 ? [classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} 
                disableTypography
              >
                Tableau de Bord
              </ListItemText>
           </ListItem>
           <ListItem 
            onClick={()=> {setOpenDrawer(false);setValue(1)}} 
            divider button 
            component={Link}
             to="/users"
             selected={value === 1}>
           <ListItemText  className={value === 1 ? [classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Utilisateurs</ListItemText>
           </ListItem>
           <ListItem 
            onClick={()=> {setOpenDrawer(false);setValue(2)}} 
            divider button 
            component={Link}
             to="/entrees"
             selected={value === 2}>
           <ListItemText  className={value === 2 ? [classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Les Entrées</ListItemText>
           </ListItem>
           <ListItem 
            onClick={()=> {setOpenDrawer(false);setValue(3)}} 
            divider button 
            component={Link}
             to="/sorties"
             selected={value === 3}>
           <ListItemText  className={value === 3 ? [classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Les Sorties</ListItemText>
           </ListItem>
      
           <ListItem 
            onClick={()=> {setOpenDrawer(false);setValue(4)}} 
            divider button 
            component={Link}
             to="/personnel"
             selected={value ===4}>
           <ListItemText  className={value === 4 ? [classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Le personnel</ListItemText>
           </ListItem>
           <ListItem  className={value === 5 ? [classes.drawerItem,classes.drawerItemSelected]:classes.drawerItemEstimate} onClick={()=> {setOpenDrawer(false);setValue(5);logout()}} divider button component={Link} to="/logout" selected={value === 5}>
             <ListItemText className={classes.drawerItem} disableTypography>Deconnexion</ListItemText>
           </ListItem>
         </List>
      </SwipeableDrawer>
        ):null
    }
      <IconButton 
         onClick={() => setOpenDrawer(!openDrawer)} 
         className ={classes.drawerIconButton}
         disableRipple
         >
         <MenuIcon  className ={classes.drawerMenuIcon}/>
      </IconButton>
    </React.Fragment>

  )

    return (
    <React.Fragment>
        <ElevationScroll>
           <AppBar position ="fixed"  className={classes.appbar}>
              <Toolbar disableGutters>
                  <Button component={Link}
                   to="/"
                   onClick={()=>setValue(0)}
                   disableRipple
                   className={classes.logoContainer}>
                  <img alt="logo MSA"  className={classes.logo} src={logo}/>
                  </Button>
                {
                    matches? drawer : tabs
                }
                
              </Toolbar>
           </AppBar>
       </ElevationScroll>
       <div className={classes.toolbarMargin}/>
    </React.Fragment>
    )


};
export default Header;