import { h, Component } from 'preact';
import style from './style';

import getSkills from "../../lib/getSkills";

import DataTable from '../data-table';

import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

export default class SkillsList extends Component {

    state = {
        loaded: false,
    }

    componentDidMount() {
        getSkills(this.props.filters)
            .then(list => this.setState({
                list,
                loaded: true
            }))
    }

	render({}, { loaded, list }) {
		if(loaded) {
            return <div class={style.table}>
                <DataTable headers={{
                    filterRank: "Rank",
                    score: "Score",
                    "team.team_name": "Team",
                    "team.number": "Team Number",
                    "event.name": "Event"
                    
                }} values={list}></DataTable>
            </div>
        } else {
            return <p>Loading....</p>;
        }
	}
}
