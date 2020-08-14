import React, {useState,useEffect}  from 'react';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from '@material-ui/core/styles'
import {Grid, TextField, Button,MenuItem,Paper} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import {sortieService} from '../../../service/sortieService';
import {agentService} from '../../../service/agentService';


const useStyles = makeStyles(theme =>({
    textField:{
        width:"20rem",
        [theme.breakpoints.down("sm")]:{
            width:"10rem",
          }
    },
    sendButton:{
        width:"20rem",
        [theme.breakpoints.down("sm")]:{
            width:"10rem",
          }
      },
    paper:{
        margin: theme.spacing(2) ,
        padding:theme.spacing(6)
      }
}));
  function SortieAddComponent (props) {

     const classes = useStyles();
    
    
    const [nomAgent,setNomAgent] = useState('');
    const [dateDepointage,setDateDepointage] = useState('');
    const [nomAgentHelper,setNomAgentHelper] = useState('');
    const [open,setOpen] = useState(false);
    const [agents,setAgents] = useState([]);
    const [message,setMessage] = useState('');
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({open:false,message :"",backgroundColor:""});



    useEffect(() =>{

        getAgents()
  
    },[]);
    const getAgents = () => {
      agentService.getAllAgent()
          .then(res => {
              setAgents(res);
          })  
       
          
  }

   const createSortie = (e) => {
        e.preventDefault();
        let depointage = {nomAgent: nomAgent, 
            dateDepointage: dateDepointage,
            idUser:window.localStorage.getItem("idUser")
        };
        sortieService.createSortie(depointage)
            .then(res => {
               console.log("RES",res);
                if(res.message){
                setMessage('Depointage reussi.');
                setDateDepointage('');
                setNomAgent('');
                setOpen(true);
                setAlert({open:true,message:"Pointage Sortie reussi !",backgroundColor:"#4BB543"})
                }else {
                  setAlert({open:true,message:"Pointage Sortie Echoué! Ressayez encore !",backgroundColor:"#FF3232"})
                  }
            }).catch(()=>{
              setLoading(false);
              setDateDepointage('');
              setNomAgent('');
              setAlert({open:true,message:"Pointage Sortie Echoué! Ressayez encore !",backgroundColor:"#FF3232"});

            });
        
           // console.log("depointage",depointage);
      
    }
  const onChange =(event)=>{
   let valid;
   switch(event.target.id){
    case'nomAgent':
    //    setNomAgent(event.target.value)
    //    valid=/^(?! *$)[a-zA-Z.+ '-]+$/.test(event.target.value)
    //     if(!valid){
    //         setNomAgentHelper("Entrer le Nom de AGENT")
    //     }else{
    //         setNomAgentHelper("")
    //     }
    //     break;
    case'dateDepointage':
        setDateDepointage(event.target.value)
        break;    
    default:
        break;
   }

  };
  const onChangeNomAgent = (event) =>{
    // e.target.value 
     setNomAgent(event.target.value);
     
 };

  // const handleClose = () => {
  //   setOpen(false);
  // }
  const buttonContents = (
    <React.Fragment>
      Valider
    </React.Fragment>
  );
    return(
        <Grid container justify="center" spacing={4} alignItems="center">
          <Grid item md={6} sm={12} xs={12}>
           <Paper className={classes.paper }>
            
                   <Typography variant="h4" align ="center" style={{marginBottom:"3rem"}} >Pointage Sortie</Typography>
            
                
                <Grid container direction="column" justify="center"  spacing={5} alignItems="center">
                  
                   <Grid item md={12}  sm={12} xs={12}>
                    {/* <TextField  className={classes.textField} type="text" label="Nom Agent" error={nomAgentHelper.length !== 0} helperText ={nomAgentHelper} variant="outlined" margin="normal" id="nomAgent" value={nomAgent}  onChange={onChange} fullWidth required /> */}
                    <TextField className={classes.textField}
                                label="Nom Agent"
                                select   
                                name='agent'
                                id='agent'  
                                value={nomAgent} 
                                onChange={onChangeNomAgent}
                                    >
                                    {agents.map((dt, i) =>  (
                                    <MenuItem
                                        value={dt.nomAgent}
                                        key={i} name={dt.nomAgent}>{dt.nomAgent}
                                    </MenuItem>     
                                ))
                            }
                            
                        </TextField> 
                    </Grid> 
                   <Grid item md={12} sm={12} xs={12}>
                    <TextField
                                id="dateDepointage"
                                variant="outlined"
                                label="Date heure de Sortie"
                                name="dateDeointage"
                                type="datetime-local"
                                className={classes.textField}
                                value={dateDepointage}
                                onChange={onChange}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />


                    </Grid> 
                    <Grid item md={12} sm={12} xs={12}>
                      <Button disabled={
                          nomAgent.length === 0 ||dateDepointage.length === 0 ||
                          nomAgentHelper.length!==0 
                       } 
                     variant="contained" className={classes.sendButton} fullWidth color="primary"  onClick={createSortie}>
                         {loading ? <CircularProgress style={{color:"white"}} size={30}/> : buttonContents}
                       </Button>
            </Grid>
                  
               </Grid>
        

              {/* <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"INFORMATION"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                {message}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                   FERMER
                </Button>
        </DialogActions>
      </Dialog> */}
       <Snackbar 
              open={alert.open}
              message={alert.message} 
              ContentProps={{style:{backgroundColor:alert.backgroundColor}}}
              anchorOrigin={{vertical:"bottom",horizontal:"center"}}
              onClose={()=>setAlert({...alert,open:false})}
              autoHideDuration={4000}/>
            </Paper>
          </Grid>
      </Grid>   
        );
}
export default SortieAddComponent;
