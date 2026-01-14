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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hotel_entity_1 = require("./entities/hotel.entity");
let HotelsService = class HotelsService {
    hotelsRepository;
    constructor(hotelsRepository) {
        this.hotelsRepository = hotelsRepository;
    }
    async findAll(destinationId) {
        if (destinationId) {
            return this.hotelsRepository.find({ where: { destination_id: destinationId } });
        }
        return this.hotelsRepository.find();
    }
    async findFeatured() {
        return this.hotelsRepository.find({ where: { is_featured: true }, take: 6 });
    }
    async create(hotelData) {
        const hotel = this.hotelsRepository.create(hotelData);
        return this.hotelsRepository.save(hotel);
    }
    async update(id, hotelData) {
        await this.hotelsRepository.update(id, hotelData);
        return this.hotelsRepository.findOneBy({ id });
    }
    async remove(id) {
        return this.hotelsRepository.delete(id);
    }
};
exports.HotelsService = HotelsService;
exports.HotelsService = HotelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hotel_entity_1.Hotel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HotelsService);
//# sourceMappingURL=hotels.service.js.map