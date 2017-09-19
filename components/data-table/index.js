/**
 * Adapted from mdl-data-table (Copyright Google)
 */
import { h } from 'preact';
import style from './style';

import { dlv } from "../../lib/util";

import Checkbox from 'preact-material-components/Checkbox';
import 'preact-material-components/Checkbox/style.css';


export default ({ headers, values }) =>
    <table class={style["mdl-data-table"]}>
        <thead>
            <tr>
                <th class={style["mdl-data-table--checkbox"]}>
                    <Checkbox></Checkbox>
                </th>
                { Object.values(headers).map( prop => 
                    <th class={style["mdl-data-table__cell--non-numeric"]}>{ prop }</th>
                ) }
            </tr>
        </thead>
        <tbody>
            { values.map( run => 
                <tr key={`${run.sku}-${run.team}-${run.type}`}>
                    <td>
                        <Checkbox></Checkbox>
                    </td>
                    { Object.keys(headers).map( prop => 
                        <td class={style["mdl-data-table__cell--non-numeric"]}>
                            { dlv(run, prop) }
                        </td> ) 
                    }
                </tr>
            ) }
        </tbody>
        </table>