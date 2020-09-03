import React, { Fragment } from 'react';
import {  Route, Switch,Redirect } from 'react-router-dom';
// import Register from '../components/ui/Register/Register' ;
import Login from '../components/ui/Login/LoginForm' ;
import Container from '@material-ui/core/Container';

const PublicRoutes = () => (
	<Fragment>
		<Container>
		<Switch>
			{/* <Route path="/forgot-password" component={ForgotPassword} /> */}
			{/* <Route path="/register" component={Register} /> */}
			<Route exact path="/" component={Login} />
			<Redirect to="/" />
		</Switch>
		</Container>
	</Fragment>
);

export default PublicRoutes;