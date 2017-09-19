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
        this.key.split(".").forEach((e, i, a) => the.emit(`update.${[...a.slice(0,i),e].join(".")}`));
        return a;
    }
    get(key) {
        return dlv(this.data, key);
    }
})