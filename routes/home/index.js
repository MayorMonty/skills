import { h, Component } from "preact";
import style from "./style";

import SkillsList from "../../components/skillsList";

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<SkillsList type={2} program={"VRC"} />
			</div>
		);
	}
}
