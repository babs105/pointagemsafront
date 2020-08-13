import React , {useState,useEffect}  from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';  
import { Grid, Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AbsenceList from './AbsenceList';
import TimePresencelist from './TimePresenceList';
import {timePresenceService} from '../../../service/timePresenceService';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  }
}));

export default function Rapport () {
  const classes = useStyles();

//   const [entreesToday,setEntreesToday] = useState([]);
//   const [sortiesToday,setSortiesToday] = useState([]);
//   const [agentPresentToday,setAgentPresentToday] = useState([]);
//   const [agentNotPointerToday,setAgentNotPointerToday] = useState([]);
const [rapport,setRapport] = useState(false);
const [open,setOpen] = useState(false);
const [message,setMessage] = useState("");
  


//   useEffect(() => {    
    
//     intervalID = setInterval(
//       () => { 
        
//         loadEntreeTodayList();
//         loadSortieTodayList();
//         loadAgentsPresent();
//         loadAgentNotPointer();
//         console.log("reload");
//         },1000
//       );
//       loadEntreeTodayList();
//       loadSortieTodayList();
//       loadAgentsPresent();
//       loadAgentNotPointer();
// },[]); 


// const loadEntreeTodayList = () => {
//   entreeService.getAllPointageToday()
//   .then((res) => {
//       setEntreesToday(res);
//   });           

// };
// const loadSortieTodayList = () => {
//  sortieService.getAllDepointageToday()
//  .then((res) => {
//     setSortiesToday(res);
//  });
// }     

// const loadAgentsPresent = () => {
//   entreeService.getAgentsPresents()
//   .then((res) => {
//     setAgentPresentToday(res);
     
//   }); 
// }
const geneRapport = () => {
  timePresenceService.genereAllTimePresence()
  .then((res) => {
    if(res.generate){
      setRapport(true);
      setMessage(res.message)
      setOpen(true);
    }else{
      setRapport(true);
      setMessage("ERROR GENERATION RAPPORT")
      setOpen(true);
    }
  
     
  }); 
}
// const loadAgentNotPointer = () => {

//   entreeService.getAllAgentNotPointToday()
//   .then((res) => {
//     setAgentNotPointerToday(res);
//   });   
// }

// useEffect(() => {
//   return () => {
//     clearInterval(intervalID);
//   }
// }, []);


  return (
    <div>
        <br/>
        <Grid container justify="center" style={{marginBottom:"4rem"}}>
            {/* <Grid item md={12} sm={12} xs={12} >
                <Paper> 
                    <Typography  variant="h6" align="center" color="primary"> Rapports</Typography>
                </Paper>
            </Grid> */}
            <Grid item >
<Button variant="contained"  color="primary" onClick={geneRapport}>
        Générer rapport
      </Button>
      </Grid>
        </Grid>
      <Grid container spacing={5}>
        <Grid item lg={12} md={12} sm={12} xl={12} xs={12}>
          <Typography variant="h6" align="center" style={{color:'red'}}>
             Absences
          </Typography>
         <AbsenceList/>
        </Grid>
        <Grid item  lg={12} md={12} sm={12} xl={12} xs={12}>
           <Typography variant="h6" align="center" style={{ color:'green'}}>
            Temps de Présence
           </Typography>
           <TimePresencelist/>
        </Grid>
        
        
        <Grid item lg={3} md={3} sm={6} xl={3} xs={12}>
          {/* <TotalVehiculeReportLastMonth/> */}
        </Grid>
        <Grid item lg={3} md={3} sm={6} xl={3} xs={12}>
          {/* <TotalQteFuelReportLastMonth/> */}    
        </Grid>
        <Grid item lg={3} md={3} sm={6} xl={3} xs={12}>
          {/* <TotalVehiculeReportCurrentMonth/> */}
        </Grid>
        <Grid item lg={3} md={3} sm={6} xl={3} xs={12}
        >
          {/* <TotalQteFuelReportCurrentMonth/> */}
        </Grid>
       
        <Grid item lg={12} md={12} sm={12} xl={12} xs={12}
        >
            {/* <ListRavitaillement/>  */}
        </Grid>
        <Grid item
          lg={12}
          md={12}
          sm={12}
          xl={3}
          xs={12}
        >
           {/* <ListRavitaillementCurrentMonth/>  */}
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xl={3}
          xs={12}
        >
           {/* <ListRavitaillementPreviousMonth/>  */}
        </Grid>
         <Grid item
          lg={6}
          md={6}
          sm={6}
          xl={12}
          xs={12}>
             
            <Grid item
                lg={6}
                md={3}
                sm={6}
                xs={12}
               >
               {/* <Typography variant="h6"style={{ color:'orange'}}>
                Mois Précédent
                </Typography> */}
               {/* <TotalRajoutPreviousMonth/> */}
           </Grid>
           <Grid item
            lg={6}
            md={3}
            sm={6}
            xs={12}
            >
            {/* <TotalQteRajoutPreviousMonth/> */}
           </Grid>
      </Grid>

        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xl={12}
          xs={12}> 
             
                <Grid item
                lg={6}
                md={3}
                sm={6}
                xs={12}
              >
               {/* <Typography variant="h6"style={{ color:'green'}}>
                   Mois en Cours
                </Typography>      */}
              {/* <TotalRajoutCurrentMonth/> */}
              </Grid>
              <Grid item
                lg={6}
                md={3}
                sm={6}
                xs={12}
              >
            {/* <TotalQteRajoutCurrentMonth/> */}
            </Grid>
        </Grid>
        {/* <Grid
          item
          lg={3}
          md={6}
          xl={3}
          xs={12}
        >
            
        </Grid> */}
        <Dialog
                    open={open}
                    onClose={()=>setOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"INFORMATION"}</DialogTitle>
                <DialogContent>
                 <DialogContentText color="secondary" id="alert-dialog-description">
                   Rapport Générer avec Succes
                 </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>setOpen(false)} component={Link} to="/rapport" color="primary" autoFocus>
                   FERMER
                </Button>
        </DialogActions>
      </Dialog>
      </Grid>
    </div>
  );
}
