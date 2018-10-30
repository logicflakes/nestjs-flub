"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const error_handler_1 = require("./error-handler");
let FlubErrorHandler = class FlubErrorHandler {
    constructor(options = { theme: 'dark', quote: false }) {
        this.options = options;
    }
    catch(exception, host) {
        new error_handler_1.ErrorHandler(exception, this.options).toHTML().then((data) => {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            response.status(500).send(data);
        }).catch((e) => {
            console.log(e);
        });
    }
};
FlubErrorHandler = __decorate([
    common_1.Catch(Error),
    __metadata("design:paramtypes", [Object])
], FlubErrorHandler);
exports.FlubErrorHandler = FlubErrorHandler;
//# sourceMappingURL=flub-error-handler.js.map