import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Toolbar/style.css';

import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';


export default class Header extends Component {
	render() {
		return (
			<div>
				<Toolbar className="toolbar" style={style.toolbar}>
					<Toolbar.Row>
					<Toolbar.Section align-start={true}>
						<Toolbar.Icon menu={true}>menu</Toolbar.Icon>
						<Toolbar.Title>
						VEX Skills Helper
						</Toolbar.Title>
					</Toolbar.Section>
					<Toolbar.Section align-end={true}>
						<Button icon ripple compact>
							<Toolbar.Icon>filter_list</Toolbar.Icon>
						</Button>
					</Toolbar.Section>
					</Toolbar.Row>
				</Toolbar>
			</div>
		);
	}
}
