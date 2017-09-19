import { h, Component } from "preact";
import style from "./style";

import SkillsList from "../../components/skillsList";

import store from "../../store/main";

export default class Home extends Component {

	state = {
		filters: store.get("filters")
	}

	componentDidMount() {
		store.on("update", ({ key, value }) => this.setState({ filters: store.get("filters") }));
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