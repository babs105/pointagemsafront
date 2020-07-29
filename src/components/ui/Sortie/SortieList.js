import React,  {useState,useEffect}  from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {Paper, Grid} from '@material-ui/core'; 
import TableContainer from '@material-ui/core/TableContainer';  
import TablePagination from '@material-ui/core/TablePagination';  
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import {sortieService} from '../../../service/sortieService';
import Loader from '../../ui/Loader/Loader';

const useStyles = makeStyles(theme => ({
    margin: {
        margin:theme.spacing(8) ,
    },
    paper:{
        padding:theme.spacing(1),
    },
    container:{
        width:"70rem",
        [theme.breakpoints.down("md")]:{
            width:"40rem",
      }
    }
}));
  const SortieListComponent = ()=> {
  const classes =  useStyles();
  let i=0;

  const [sorties,setSorties] = useState([]);
  
  const [loader,setLoader] = useState(false)
  const [page, setPage] = useState(0);  
  const [rowsPerPage, setRowsPerPage] = useState(5);  

    useEffect(() =>{

        loadEntreeList();

    },[]);
  
const loadEntreeList = () => {
        setLoader(true)
        sortieService.getAllDepointage()
            .then((res) => {
                setSorties(res);
                setLoader(false)
            })
            };
const handleChangePage = (event, newPage) => {  
                setPage(newPage);  
              };  
              
const handleChangeRowsPerPage = event => {  
                setRowsPerPage(+event.target.value);  
                setPage(0);  
              };    

const deleteUser = (userId) =>{
        // ApiService.deleteUser(userId)
        //    .then(res => {
        //        this.setState({message : 'User deleted successfully.'});
        //        this.setState({users: this.state.users.filter(user => user.id !== userId)});
        //   })
    }

const editUser = (id) =>{
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

const addSortie = () =>{
        window.localStorage.removeItem("userId"); 
    }
return(
<div>
<Typography variant="h4"  align="center">Liste des Sorties</Typography>
<Grid container   justify="center" spacing={3}> 
<Grid item  md={10} sm={12} xs={12}>
<Button variant="contained" component={Link} to="/addsortie" color="primary" onClick={addSortie}>
        Ajouter Sortie
      </Button>
</Grid>
</Grid>
<Grid container  alignItems="center" justify="center" spacing={3}>

   <Grid item  md={10} sm={12} xs={9}>
      <Paper  style={{marginTop:'20px'}}>  
      <TableContainer>  
        <Table stickyHeader aria-label="sticky table">  
        <TableHead>  
        <TableRow>
        <TableCell align="center">N°: </TableCell>
        <TableCell align="center">AGENT</TableCell>
        <TableCell align="center">DATE HEURE DE SORTIE </TableCell>
           
    <TableCell align="center">ACTIONS </TableCell>
        </TableRow>
          </TableHead>  
          <TableBody>  
          {loader ?
       <Grid container alignItems="center" justify="center" >
               
    <Grid item >
      <Paper className={classes.paper } >
       <div className={classes.margin}>
       <Loader/>
      
       </div>
    </Paper>
    </Grid>
   </Grid>:(
      
            sorties.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {  
              return (  
                <TableRow key={row.id}>
                  <TableCell align="center">{i=i+1}</TableCell>
                  <TableCell align="center">{row.nomAgent}</TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {row.dateDepointage}
                </TableCell>
                <TableCell align="right" onClick={() =>{}}><CreateIcon /></TableCell>
                <TableCell align="right" onClick={() => {}}><DeleteIcon /></TableCell> 
            </TableRow>
                 
              );  
            })  
   )}
          </TableBody>  
        </Table>  
      </TableContainer>  
      <TablePagination  
        rowsPerPageOptions={[5, 10, 15]}  
        component="div"  
        count={sorties.length}  
        rowsPerPage={rowsPerPage}  
        page={page}  
        onChangePage={handleChangePage}  
        onChangeRowsPerPage={handleChangeRowsPerPage}  
      />  
    </Paper>
    </Grid>
    </Grid> 
 
</div>
        );
     }  
export default SortieListComponent;
