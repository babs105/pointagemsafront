import React from 'react';
import { makeStyles } from '@material-ui/core/styles';  
import { Grid, Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import EntreeListToday from './components/EntreeListToday';
import SortieListToday from './components/SortieListToday';
import AgentNotPointer from './components/AgentNotPointer';
import AgentsPresent from './components/AgentsPresent';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  }
}));

export default function Dashboard () {
  const classes = useStyles();

  return (
    <div>
        <Grid container>
            <Grid item md={12} sm={12} xs={12} >
                <Paper> 
                    <Typography  variant="h6" align="center" color="primary"> Aujourd'hui</Typography>
                </Paper>
            </Grid>

        </Grid>
      <Grid container spacing={5}>
        <Grid item lg={6} md={6} sm={12} xl={6} xs={12}>
          <Typography variant="h6" align="center" style={{color:'green'}}>
             Pointage Entrée
          </Typography>
         <EntreeListToday/>
        </Grid>
        <Grid item  lg={6} md={6} sm={12} xl={6} xs={12}>
           <Typography variant="h6" align="center" style={{ color:'orange'}}>
             Pointage Sortie
           </Typography>
           <SortieListToday/>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xl={6} xs={12}>
          <Typography variant="h6" align="center" style={{color:'red'}}>
             Absents
          </Typography>
         <AgentNotPointer/>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xl={6} xs={12}>
          <Typography variant="h6" align="center" style={{color:'green'}}>
             Présents
          </Typography>
         <AgentsPresent/>
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
      </Grid>
    </div>
  );
}
