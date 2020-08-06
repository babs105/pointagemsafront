import React, { Fragment,useState } from 'react';
import Header from '../components/ui/Header'
import {Route, Switch } from 'react-router-dom';
import UserAdd from '../components/ui/User/UserAddComponent';
import Users  from '../components/ui/User/UserListComponent';
import EntreAdd from '../components/ui/Entree/Entree';
import EntreList from '../components/ui/Entree/EntreeList';
import SortieAdd from '../components/ui/Sortie/Sortie';
import SortieList from '../components/ui/Sortie/SortieList';
import Dashboard from '../components/ui/Dashbord/Dashboard';
import PersonnelList from '../components/ui/Personnel/PersonnelList';
import PersonnelAdd from '../components/ui/Personnel/Personnel';
import Rapport from '../components/ui/Rapport/Rapport';

const PrivateRoutes = () => {
	

	return(
	<Fragment>
	 <Header />  
		<Switch>
			<Route path="/"  exact component={Dashboard} />
			<Route path="/adduser" exact component={UserAdd} />
			<Route path="/users" exact component={Users} />
			<Route path="/addentree" exact component={EntreAdd}/>
			<Route path="/entrees" exact component={EntreList}/>
			<Route path="/addsortie" exact component={SortieAdd} />
			<Route path="/sorties" exact component={SortieList} />
			<Route path="/personnel" exact component={PersonnelList} />
			<Route path="/rapport" exact component={Rapport} />
			<Route path="/addagent" exact component={PersonnelAdd} />
			
		</Switch>
	
	</Fragment>
	)
};
export default PrivateRoutes;