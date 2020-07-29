import React, {useState}  from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'
import {Grid, TextField, Button,Select,MenuItem,InputLabel,FormControl} from '@material-ui/core';
import {userService} from '../../../service/userService';

const useStyles = makeStyles(theme =>({
    margin: {
        margin: theme.spacing(2) ,
    },
    formControl: {
        margin: theme.spacing(1),
        width: 350,
      },
    paper: {
        padding: theme.spacing(1),
        
    }
    ,  selectEmpty: {
        marginTop: theme.spacing(2),
      },
    
}));
  function UserAddComponent (props) {

     const classes = useStyles();
    
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [email,setEmail] = useState('');
    const [role,setRole] = useState('');
    const [message,setMessage] = useState('');
    const [usernameHelper,setUsernameHelper] = useState('');

   const createUser = (e) => {
        e.preventDefault();
        let user = {username: username, 
            password: password, 
            firstName: firstName, 
            lastName: lastName, 
            email: email, 
            confirmPassword:confirmPassword,
            role:role
        };
        userService.register(user)
            .then(res => {
                setMessage('User added successfully.');
              //  this.props.history.push('/users');
            });
            console.log("USER",user);
    }
  const onChange = (event)=>{
   let valid;
 switch(event.target.id){
    case'username':
       setUsername(event.target.value)
       valid=/^(?! *$)[a-zA-Z.+ '-]+$/.test(event.target.value)
        if(!valid){
            setUsernameHelper("Entrer votre Username")
        }else{
            setUsernameHelper("")
        }
        break;
    case'firstName':
          setFirstName(event.target.value)
          break;
    case'lastName':
          setLastName(event.target.value)
         break;
    case'email':
         setEmail(event.target.value)
          break;
    case'password':
          setPassword(event.target.value)
           break;
    case'confirmPassword':
            setConfirmPassword(event.target.value)
            break;
    case'role':
            setRole(event.target.value)
            break; 
    default:
            break;
   }

  };
   const  onChangeUsername = (event) =>{
        setUsername(event.target.value);
        
    };
  const  onChangePassword = (event) =>{
      setPassword(event.target.value);
        
    };
  const onChangeFirstName = (event) =>{
        setFirstName(event.target.value);
        
    };
   const onChangeLastName = (event) =>{
        setLastName(event.target.value);
        
    };
    const onChangeEmail = (event) =>{
        setEmail(event.target.value);
        
    };
    const onChangeConfirmPassword = (event) =>{
        setConfirmPassword(event.target.value);
        
    };
    const onChangeRole = (event) =>{
       // e.target.value 
        setRole(event.target.value);
        
    };

    return(
       <Grid container justify="center" direction="column" alignItems="center" spacing={3}>
            <Grid item md={6} sm={12} xs={12}>
                   <Typography variant="h4" align ="center" >Ajout Utilisateur</Typography>
            </Grid>    
            <Grid item md={6} sm={12} xs={12}>
                
                <Grid container justify="center" spacing={3} alignItems="center">
                  
                   <Grid item md={6}  sm={12} xs={12}>
                    <TextField type="text" label="username" error={usernameHelper.length !== 0} helperText ={usernameHelper} variant="outlined" margin="normal" id="username" value={username}  onChange={onChange} fullWidth required />
                    </Grid> 
                    <Grid item md={6} sm={12} xs={12}>
                    <TextField label="First Name" variant="outlined" margin="normal" id="firstName"  value={firstName} onChange={onChange} fullWidth required/>
                    </Grid> 
                    <Grid item md={6} sm={12} xs={12}>
                    <TextField label="Last name" variant="outlined" margin="normal" id="lastName" value={lastName} onChange={onChange} fullWidth  required/>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                    <TextField type="email" label="E-mail" variant="outlined" margin="normal" id="email" value={email} onChange={onChange} fullWidth required/>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                    <TextField type="password" label="password" variant="outlined" margin="normal" id="password" value={password} onChange={onChange} fullWidth required/>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                    <TextField type="password" label="Confirm Password" variant="outlined" margin="normal" id="confirmPassword" value={confirmPassword} onChange={onChange} fullWidth required/>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                    <TextField className={classes.formControl}
                                label="Role"
                                select   
                                id="role"
                                value ={role}  
                                onChange={onChangeRole}
                                    >
                                            <MenuItem
                                                value={"Agent"}>Agent
                                            </MenuItem>
                                            <MenuItem
                                                value={"Admin"}>Admin
                                            </MenuItem>
                            
                        </TextField> 
                        </Grid>
                    <Grid item md={6} sm={12} xs={12} style={{marginTop:"3em"}}>
                      <Button disabled={
                          username.length === 0 ||password.length === 0 || firstName.length===0 || lastName.length===0||
                          email.length === 0 ||confirmPassword.length === 0 || role.length===0 || usernameHelper.length!==0 
                     } 
                     variant="contained"  fullWidth color="primary"  onClick={createUser}>Valider</Button>

                    </Grid>
                </Grid>
            
        </Grid> 
      </Grid>   
        );
    
}

export default UserAddComponent;
