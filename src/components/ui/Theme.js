import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue="#0B72B9";
const arcGreen="#4CAF50";
export default createMuiTheme({
   palette:{
        common:{
            blue:`${arcBlue}`,
            orange:`${arcGreen}`,
        },
        primary:{
            main:`${arcBlue}`
        },
        secondary:{
            main:`${arcGreen}`
        },
   },
   typography:{
    tab:{
        fontFamily:"Raleway",
        textTransform:"none",
        fontWeight:700,
        fontSize:"1.25rem",
       },
        logout:{
        fontFamily:"Pacifico",
        fontSize: "1rem",
        color:"white",
        textTransform:"none"
       }
   }
});