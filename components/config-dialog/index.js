import {h, Component} from 'preact';
import Dialog from "preact-material-components/Dialog";
import Button from "preact-material-components/Button";
import List from "preact-material-components/List";
import "preact-material-components/List/style.css";
import "preact-material-components/Button/style.css";
import "preact-material-components/Dialog/style.css";

import store from "../../store/main"

export default () => {
    return (
        <Dialog ref={ref=>store.set("refs.config", ref)}>
            <Dialog.Header>Configure List</Dialog.Header>
            <Dialog.Body>
                <List>
                    <List.Item>Item 1</List.Item>
                    <List.Item>Item 2</List.Item>
                    <List.Item>Item 3</List.Item>
                    <List.Item>Item 4</List.Item>
                    <List.Item>Item 5</List.Item>
                </List>
            </Dialog.Body>
            <Dialog.Footer>
                <Dialog.FooterButton cancel={true} ripple>Cancel</Dialog.FooterButton>
                <Dialog.FooterButton accept={true} ripple primary raised>Apply</Dialog.FooterButton>
            </Dialog.Footer>
        </Dialog>);
}