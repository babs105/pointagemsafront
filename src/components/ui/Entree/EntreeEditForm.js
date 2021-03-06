import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, MenuItem } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "20rem",
    [theme.breakpoints.down("sm")]: {
      width: "15rem",
    },
  },
  // sendButton: {
  //   width: "20rem",
  //   [theme.breakpoints.down("sm")]: {
  //     width: "15rem",
  //   },
  // },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(6),
  },
}));
function EntreeEditComponent(props) {
  const classes = useStyles();

  const buttonContents = <React.Fragment>Valider</React.Fragment>;
  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <TextField
            className={classes.textField}
            variant="outlined"
            label="Nom Agent"
            select
            name="agent"
            id="agent"
            value={props.nomAgent}
            onChange={props.onChangeNomAgent}
          >
            {props.agents.map((dt, i) => (
              <MenuItem value={dt.nomAgent} key={i} name={dt.nomAgent}>
                {dt.nomAgent}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item style={{ marginTop: 50 }}>
          <TextField
            id="datePointage"
            variant="outlined"
            label="Date heure d'Entree"
            name="dateDepointage"
            error={props.datePointageHelper.length !== 0}
            helperText={props.datePointageHelper}
            type="datetime"
            options={{
              //format:"yyyy-MM-ddTHH:mm"
              format: "dd/MM/yyyy hh:mm:ss",
            }}
            className={classes.textField}
            value={props.datePointage}
            onChange={props.onChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        style={{ marginTop: "3em", marginBottom: "3em" }}
      >
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => props.setDialogOpenEdit(false)}
          >
            Annuler
          </Button>
        </Grid>
        <Grid item>
          <Button
            disabled={
              props.nomAgent.length === 0 ||
              props.datePointage.length === 0 ||
              props.datePointageHelper.length !== 0
            }
            variant="contained"
            className={classes.sendButton}
            fullWidth
            color="primary"
            onClick={props.updateEntree}
          >
            {props.loading ? (
              <CircularProgress style={{ color: "white" }} size={30} />
            ) : (
              buttonContents
            )}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default EntreeEditComponent;
