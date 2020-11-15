import { createMuiTheme } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'
import red from '@material-ui/core/colors/red'
import purple from '@material-ui/core/colors/purple'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
            light: purple[100],
            dark: purple[900],
            contrastText: purple[50]
        },
        secondary: {
            main: red[500],
            light: red[100],
            dark: red[900],
            contrastText: red[50]
        },
        
        
    }
}) 
    

 
export default theme