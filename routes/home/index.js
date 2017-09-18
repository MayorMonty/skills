import { h, Component } from "preact";
import style from "./style";

import SkillsList from "../../components/skillsList";

import config from "../../store/config";

export default class Home extends Component {
	render() {
		console.log(config)
		return (
			<div class={style.home}>
				<SkillsList filters={filters} />
			</div>
		);
	}
}
