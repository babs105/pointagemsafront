import React,  {useState,useEffect}  from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {Paper,withStyles, Grid} from '@material-ui/core'; 
import TableContainer from '@material-ui/core/TableContainer';  
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import {userService} from '../../../service/userService';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(8) ,
    },
    paper: {
        padding: theme.spacing(1),
        
       
    },
    container:{
        width:"70rem",
        [theme.breakpoints.down("md")]:{
            width:"40rem",
        }
    }
}));

const UserListComponent = ()=> {

   const classes =  useStyles();



  const [users,setUsers] = useState([]);


    useEffect(() =>{
        reloadUserList();

    },[]);
  



const reloadUserList = () => {
        userService.getAllUsers()
            .then((res) => {
                setUsers(res);
            })
            };
    

const deleteUser = (userId) =>{
        // ApiService.deleteUser(userId)
        //    .then(res => {
        //        this.setState({message : 'User deleted successfully.'});
        //        this.setState({users: this.state.users.filter(user => user.id !== userId)});
        //    })
    }

const editUser = (id) =>{
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

const addUser = () =>{
        window.localStorage.removeItem("userId");
        
    }

return(

<Grid container direction="column" alignItems="center" justify="center" spacing={4}>
<Grid item  md={12} sm={12} xs={12}>
   <Button variant="contained" component={Link} to="/adduser" color="primary" onClick={addUser}>
        Ajouter Utilisateur
   </Button>
   </Grid>
    <Grid item  md={6} sm={12} xs={12}>
    <Grid container justify="flex-start">
        <Grid item  md={12} sm={12} xs={12}>
         <Typography variant="h4" >Liste Utilisateur</Typography>
       </Grid>
       </Grid>
   </Grid>
  
   <Grid item  md={12} sm={12} xs={12}>
  
      <Paper>  
      <TableContainer className={classes.container}>  
        <Table stickyHeader aria-label="sticky table">  
    <TableHead>
        <TableRow>
            {/* <TableCell>Id</TableCell> */}
            <TableCell align="center">PRENOM</TableCell>
            <TableCell align="center">NOM</TableCell>
            <TableCell align="center">USERNAME</TableCell>
            <TableCell align="center">EMAIL</TableCell>
            <TableCell align="center">ROLE</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {users.map(row => (
            <TableRow key={row.id}>
                {/* <TableCell component="th" scope="row">
                    {row.id}
                </TableCell> */}
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.role}</TableCell>
                <TableCell align="right" onClick={() => {}}><CreateIcon /></TableCell>
                <TableCell align="right" onClick={() => {}}><DeleteIcon /></TableCell> 

            </TableRow>
        ))}
    </TableBody>
  </Table>
  </TableContainer>
  </Paper>

</Grid>
</Grid>
        );
     }  
export default UserListComponent;
