import React, { Component } from 'react';
import Layout from './Containers/Layout/Layout';
import { Router, Redirect } from 'react-router-dom';
import Auth from './Auth';
import History from './history';

const auth = new Auth();

const callbackComponent = props => {
    if(props.location.hash.includes('access_token'))
    {   setTimeout(() =>auth.handleAuthentication());
        return <h4>loading...</h4>
    }
    else
    {
        return <Redirect to={{ pathname: '/'}}/>
    }

};

class App extends Component {
	render() {
		return (
    		<div>
				<Router history={History}>
					<Layout auth={auth} callback={callbackComponent}>
						
					</Layout>
				</Router>
    		</div>
    	);
  	}
}

export default App;
