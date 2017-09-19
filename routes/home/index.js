import { h, Component } from "preact";
import style from "./style";

import SkillsList from "../../components/skills-list";
import ConfigDialog from "../../component/config-dialog";

import store from "../../store/main";

export default class Home extends Component {

	state = {
		filters: store.get("filters")
	}

	componentDidMount() {
		store.on("update.filters", ({ key, value }) => this.setState({ filters: store.get("filters") }));
	}

	render() {
		return (
			<div class={style.home}>
				<SkillsList filters={this.state.filters} />
			</div>
		);
	}
}


if(typeof window !== "undefined") window.store = store;