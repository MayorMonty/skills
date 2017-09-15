import './style';

import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';
import Home from './routes/home';
import Profile from './routes/profile';

if(typeof window !== "undefined" && window.serviceWorker && process.env.NODE_ENV === "production") {
	// @HACK: Preact-CLI forces you to use /sw.js, reregister the service worker
	navigator.serviceWorker.getRegistrations().then(a => a.map( sw => sw.unregister() ));
	console.log(`${__webpack_public_path__}sw.js`);
	navigator.serviceWorker.register(`${__webpack_public_path__}sw.js`);
}

export default () => (
	<div id="app">
		<Header />
		<Router>
			<Home path={__webpack_public_path__ + "/"} />
			<Profile path={__webpack_public_path__ + "/profile/"} user="me" />
			<Profile path={__webpack_public_path__ + "/profile/:user"} />
		</Router>
	</div>
);
