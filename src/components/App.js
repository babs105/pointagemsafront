import React from 'react';
import theme from './ui/Theme';
import {ThemeProvider}  from '@material-ui/core/styles';
import AppRouter from '../routage/AppRouter';



const App = () => {
		return (
		    <ThemeProvider theme={theme}>
              <AppRouter/>
			</ThemeProvider>
		);
};
export default App;
