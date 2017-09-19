import {h, Component} from 'preact';
import Dialog from "preact-material-components/Dialog";
import Button from "preact-material-components/Button";
import List from "preact-material-components/List";
import Textfield from 'preact-material-components/Textfield';
import Formfield from 'preact-material-components/Formfield';
import Select from 'preact-material-components/Select';
import "preact-material-components/List/style.css";
import "preact-material-components/Button/style.css";
import "preact-material-components/Dialog/style.css";
import 'preact-material-components/Textfield/style.css';
import 'preact-material-components/Menu/style.css';
import 'preact-material-components/Select/style.css'

import store from "../../store/main"

export default () => {
    return (
        <Dialog ref={ref=>store.set("refs.config", ref)}>
            <Dialog.Header>Configure List</Dialog.Header>
            <Dialog.Body>
                <Textfield label="Country" value={store.get("filters.country")} onInput={a=>store.set("currentFilters.country", a.target.value)} />
            </Dialog.Body>
            <Dialog.Footer>
                <Dialog.FooterButton cancel={true} ripple>Cancel</Dialog.FooterButton>
                <Dialog.FooterButton accept={true} ripple primary raised onClick={
                    () => {
                        let filters = store.get("currentFilters");
                        for (var filter in filters) {
                            if (filters.hasOwnProperty(filter)) {
                                store.set(`filters.${filter}`, filters[filter]);
                                
                            }
                        }
                    }
                }>Apply</Dialog.FooterButton>
            </Dialog.Footer>
        </Dialog>);
}