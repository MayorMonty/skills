/**
 * Adapted from mdl-data-table (Copyright Google)
 */
import { h, Component } from 'preact';
import style from './style';

import Checkbox from 'preact-material-components/Checkbox';
import 'preact-material-components/Checkbox/style.css';


export default class DataTable extends Component {
	render({ headers, values }) {
		return (
			<table class={style["mdl-data-table"]}>
                <thead>
                    <tr>
                        { Object.values(headers).map( prop => 
                            <th class={style["mdl-data-table__cell--non-numeric"]}>{ prop }</th>
                        ) }
                    </tr>
                </thead>
                <tbody>
                    { values.map( run => 
                        <tr key={`${run.sku}-${run.team}-${run.type}`}>
                            { Object.keys(headers).map( prop => 
                                <td class={style["mdl-data-table__cell--non-numeric"]}>
                                    { [run, ...prop.split(".")].reduce((a,b) => a[b]) }
                                </td> ) 
                            }
                        </tr>
                    ) }
                </tbody>
                </table>
		);
	}
}

{/* <td class={style["mdl-data-table__cell--non-numeric"]}>
                                { [run, ...prop.split(".")].reduce((a,b) => a[b]) }
                            </td> */}