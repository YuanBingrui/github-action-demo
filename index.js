"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action = /** @class */ (function () {
    function Action() {
        this.actions = [];
    }
    Action.prototype.run = function () {
        this.actions.forEach(function (action) {
            console.log('action:', action);
        });
        return this;
    };
    return Action;
}());
exports.default = Action;
