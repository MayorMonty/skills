import { h, Component } from 'preact';
import style from './style';

import getSkills from "../../lib/getSkills";

import DataTable from '../data-table';

import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

export default class SkillsList extends Component {

    state = {
        loaded: false,
        filters: {
            country: "United States"
        }
    }

    componentDidMount() {
        getSkills(this.state.filters)
            .then(list => this.setState({
                list,
                loaded: true
            }))
    }

	render({}, { loaded, list }) {
        console.log(list);
		if(loaded) {
            return <div class={style.table}>
                <List>
                    { list.map( run => 
                        <List.Item>
                            <b>{ run.score }</b> by <a href={`https://vexdb.io/teams/view/${run.team.number}`}>{ run.team.team_name } ({ run.team.number })</a> at <a href={`https://www.robotevents.com/robot-competitions/vex-robotics-competition/${run.sku}.html`}> { run.event.name }</a>
                        </List.Item>
                    ) }
                </List>
            </div>
        } else {
            return <p>Loading....</p>;
        }
	}
}
