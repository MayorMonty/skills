import { h, Component } from 'preact';
import style from './style';

import getSkills from "../../lib/getSkills";

import DataTable from '../data-table';

import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

import store from "../../store/main";

export default class SkillsList extends Component {

    state = {
        loaded: false,
    }

    componentDidMount() {
        this.getList();
        store.on("update", () => {
            this.getList();
            this.setState({ loaded: false, list: [] });
        });
    }

    componentWillRecieveProps() {
        this.setState({ loaded: false });
    }

    getList() {
        getSkills(store.get("filters"))
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
