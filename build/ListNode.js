"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(_data, next = null) {
        this._data = _data;
        this.next = next;
    }
    get data() {
        return this._data;
    }
    set data(payload) {
        this._data = payload;
    }
}
exports.default = ListNode;
//# sourceMappingURL=ListNode.js.map