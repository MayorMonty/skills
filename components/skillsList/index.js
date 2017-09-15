import { h, Component } from 'preact';
import style from './style';

import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

export default class SkillsList extends Component {

    state = {
        loaded: false
    }

    makeAPICall({ type, program, season }) {
        return fetch(`https://api.vexdb.io/v1/get_skills?type=${type}&season=${season}`)
            .then(a=>a.json())
    }

    componentDidMount() {
        let { type = 2, program = "VRC", season = "In The Zone" } = this.props;
        this.makeAPICall({ type, program, season })
            .then(res => {
                console.log(res);
                this.setState({ list: res.result, loaded: true });
            });
    }

	render({}, { loaded, list }) {
		if(loaded) {
            return <div>
                <List>
                    { list.map( item => 
                        <List.Item ripple>
                            { item.score }
                        </List.Item>
                    ) }
                </List>
            </div>
        } else {
            return <p>Loading....</p>;
        }
	}
}
