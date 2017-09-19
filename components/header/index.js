import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Toolbar/style.css';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

import store from "../../store/main"

export default class Header extends Component {
	render() {
		return (
			<div class={style.toolbar}>
				<Toolbar className="toolbar">
					<Toolbar.Row>
					<Toolbar.Section align-start={true}>
						<div class={[style.icon, style.menu].join(" ")}>
							<Button icon ripple compact>
								<Toolbar.Icon menu>menu</Toolbar.Icon>
							</Button>
						</div>
						<Toolbar.Title>VEX Skills Helper</Toolbar.Title>
					</Toolbar.Section>
					<Toolbar.Section align-end={true}>
						<div class={style.icon}>
							<Button icon ripple compact onclick={ () => store.get("refs.config").MDComponent.show() }>
								<Toolbar.Icon>filter_list</Toolbar.Icon>
							</Button>
						</div>
					</Toolbar.Section>
					</Toolbar.Row>
				</Toolbar>
			</div>
		);
	}
}
