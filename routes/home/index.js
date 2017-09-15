import { h } from 'preact';
import style from './style';

import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

export default () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<Button ripple>Material Button</Button>
	</div>
);