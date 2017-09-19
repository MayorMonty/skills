import { dlv } from "../lib/util";
import { EventEmitter } from "events";

export default new (class Store extends EventEmitter {
    data = {
        filters: {},
        refs: {}
    }

    constructor() { super() }

    set(key, value) {
        var a = dlv(this.data, key, value);
        this.emit("update", { key, value });
        key.split(".").forEach((e, i, arr) => this.emit(`update.${[...arr.slice(0,i),e].join(".")}`));
        return a;
    }
    get(key) {
        return dlv(this.data, key);
    }
})