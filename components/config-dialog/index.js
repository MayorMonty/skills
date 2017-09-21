import {h, Component} from 'preact';
import style from './style';
import Dialog from "preact-material-components/Dialog";
import Button from "preact-material-components/Button";
import List from "preact-material-components/List";
import Textfield from 'preact-material-components/Textfield';
import Formfield from 'preact-material-components/Formfield';
import Select from 'preact-material-components/Select';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import "preact-material-components/List/style.css";
import "preact-material-components/Button/style.css";
import "preact-material-components/Dialog/style.css";
import 'preact-material-components/Textfield/style.css';
import 'preact-material-components/Menu/style.css';
import 'preact-material-components/Select/style.css'
import 'preact-material-components/LayoutGrid/style.css';

import store from "../../store/main"



function putText(key) {
    return a => a.target.value.length?store.set(key, a.target.value):store.remove(key)
}
function putSelect(key, reference) {
    return a => a.selectedIndex?store.set(key, reference[a.selectedIndex]):store.remove(key)
}

export default () => {
    return (
        <Dialog ref={ref=>store.set("refs.config", ref)}>
            <Dialog.Header>Configure List</Dialog.Header>
            <Dialog.Body>
            <LayoutGrid>
            <h1>Team Information</h1>
            <LayoutGrid.Inner>
                    <LayoutGrid.Cell col="4">
                    <Formfield>
                        <Textfield label="City" value={store.get("filters.city")} onBlur={a=>putText("currentFilters.city")} onInput={putText("currentFilters.city")} helptext="The city of the team" />
                    </Formfield>
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell col="4">
                        <Formfield>
                            <Textfield label="Region/State" value={store.get("filters.region")} onBlur={a=>putText("currentFilters.region")} onInput={putText("currentFilters.region")} helptext="The region of the team" />
                        </Formfield>
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell col="4">
                        <Formfield>
                            <Textfield label="Country" value={store.get("filters.country")} onBlur={a=>putText("currentFilters.country")} onInput={putText("currentFilters.country")} helptext="The country of the team"/>
                        </Formfield>
                    </LayoutGrid.Cell>
            </LayoutGrid.Inner>
            <LayoutGrid.Inner>
                    <LayoutGrid.Cell col="4">
                    <Formfield>
                        <Textfield label="Team Number" value={store.get("filters.team")} onBlur={a=>putText("currentFilters.team")} onInput={putText("currentFilters.team")} helptext="The Team Number" />
                    </Formfield>
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell col="4">
                        <Formfield>
                            <div class={style.select}>
                                <Select id="configGrade" hintText="Grade" selectedIndex={0} onChange={
                                        putSelect("currentFilters.grade", [,"Middle School","High School", "College"])
                                    }>
                                    <Select.Item>Grade</Select.Item>
                                    <Select.Item>Middle School</Select.Item>
                                    <Select.Item>High School</Select.Item>
                                    <Select.Item>College</Select.Item>
                                </Select>
                            </div>
                        </Formfield>
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell col="4">
                        <Formfield>
                            <div class={style.select}>
                                <Select id="configProgram" selectedIndex={0} onChange={
                                        putSelect("currentFilters.program", [,"VRC","VEXU"])
                                    }>>
                                    <Select.Item>Program</Select.Item>
                                    <Select.Item>VRC</Select.Item>
                                    <Select.Item>VEXU</Select.Item>
                                </Select>
                            </div>
                        </Formfield>
                    </LayoutGrid.Cell>
            </LayoutGrid.Inner>
            </LayoutGrid>
            </Dialog.Body>
            <Dialog.Footer>
                <Dialog.FooterButton cancel={true} ripple>Cancel</Dialog.FooterButton>
                <Dialog.FooterButton accept={true} ripple primary raised onClick={
                    () => {
                        store.set("filters", store.get("currentFilters"))
                    }
                }>Apply</Dialog.FooterButton>
            </Dialog.Footer>
        </Dialog>);
}