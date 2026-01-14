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
exports.SpiritualPlace = exports.PlaceType = void 0;
const typeorm_1 = require("typeorm");
const destination_entity_1 = require("./destination.entity");
var PlaceType;
(function (PlaceType) {
    PlaceType["TEMPLE"] = "temple";
    PlaceType["MONASTERY"] = "monastery";
    PlaceType["GURUDWARA"] = "gurudwara";
    PlaceType["MOSQUE"] = "mosque";
    PlaceType["CHURCH"] = "church";
    PlaceType["HISTORICAL_SITE"] = "historical_site";
    PlaceType["OTHER"] = "other";
})(PlaceType || (exports.PlaceType = PlaceType = {}));
let SpiritualPlace = class SpiritualPlace {
    id;
    name;
    type;
    description;
    images;
    destination;
    destination_id;
};
exports.SpiritualPlace = SpiritualPlace;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SpiritualPlace.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpiritualPlace.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: PlaceType,
        default: PlaceType.TEMPLE,
    }),
    __metadata("design:type", String)
], SpiritualPlace.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], SpiritualPlace.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], SpiritualPlace.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => destination_entity_1.Destination, (destination) => destination.places),
    (0, typeorm_1.JoinColumn)({ name: 'destination_id' }),
    __metadata("design:type", destination_entity_1.Destination)
], SpiritualPlace.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SpiritualPlace.prototype, "destination_id", void 0);
exports.SpiritualPlace = SpiritualPlace = __decorate([
    (0, typeorm_1.Entity)('spiritual_places')
], SpiritualPlace);
//# sourceMappingURL=spiritual-place.entity.js.map