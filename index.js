import './style';

import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';
import Home from './routes/home';
import Profile from './routes/profile';

export default () => (
	navigator.serviceWorker.getRegistration("/skills/").then( r => r ? r.update() : null ),
	<div id="app">
		<Header />
		<Router>
			<Home path={__webpack_public_path__ + "/"} />
			<Profile path={__webpack_public_path__ + "/profile/"} user="me" />
			<Profile path={__webpack_public_path__ + "/profile/:user"} />
		</Router>
	</div>
);
