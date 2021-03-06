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
var core_1 = require("@angular/core");
var eosjs_service_1 = require("../eosjs.service");
var socketIo = require("socket.io-client");
var rxjs_1 = require("rxjs");
var RamService = /** @class */ (function () {
    function RamService(eos) {
        var _this = this;
        this.eos = eos;
        this.ramTicker = new rxjs_1.BehaviorSubject(0);
        this.ramPriceEOS = 0;
        this.total_ram_bytes_reserved = 0;
        this.total_ram_stake = 0;
        this.max_ram_size = 0;
        this.rm_base = 0;
        this.rm_quote = 0;
        this.rm_supply = 0;
        this.reloaderInterval = null;
        this.socket = socketIo('http://192.168.100.65:3000');
        console.log(this.socket);
        this.socket.on('ticker', function (data) {
            console.log(data);
            if (data.price) {
                _this.ramTicker.next(data.price);
            }
        });
    }
    RamService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [eosjs_service_1.EOSJSService])
    ], RamService);
    return RamService;
}());
exports.RamService = RamService;
//# sourceMappingURL=ram.service.js.map