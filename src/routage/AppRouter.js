import React, {Component} from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { getCookie } from '../utils/Cookie';
// import ExtBrowserRouter from './ExtBrowserRouter'; 
const authentication = () =>
	getCookie('APPPTNMSA_COOKIE') 
	? (
		// <Redirect to="/app" />
		<PrivateRoutes/>
	) : (
		<PublicRoutes />
	);

const AppRouter= () => {
		return (
						<BrowserRouter>	
							<Switch>	
								<Route path="/" component={authentication} />
								<Route  render={authentication} />
							</Switch>
						</BrowserRouter>		  
			
		);
	
}

export default AppRouter;
