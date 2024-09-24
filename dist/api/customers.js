"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.del = exports.update = exports.retrieve = exports.create = void 0;
const axios_1 = __importDefault(require("axios"));
function create(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.post(`/v1/customers`, params);
        return response.data;
    });
}
exports.create = create;
function retrieve(id, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = new URLSearchParams();
            if (params.relations && params.relations.length > 0) {
                query.append('relations', params.relations.join(','));
            }
            const response = yield axios_1.default.get(`/v1/customers/${id}?${query}`);
            return response.data;
        }
        catch (error) {
            console.error('Error retrieving customer:', error);
            throw error;
        }
    });
}
exports.retrieve = retrieve;
function update(id, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.patch(`/v1/customers/${id}`, params);
            return response.data;
        }
        catch (error) {
            console.error('Error updating customer:', error);
            throw error;
        }
    });
}
exports.update = update;
function del(id, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.delete(`/v1/customers/${id}?${params}`);
            return response.data;
        }
        catch (error) {
            console.error('Error deleting customer:', error);
            throw error;
        }
    });
}
exports.del = del;
function list(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = new URLSearchParams();
        if (params.limit)
            query.append('limit', params.limit.toString());
        if (params.ending_before)
            query.append('ending_before', params.ending_before);
        if (params.starting_after)
            query.append('starting_after', params.starting_after);
        if (params.relations && params.relations.length > 0) {
            query.append('relations', params.relations.join(','));
        }
        const response = yield axios_1.default.get(`/v1/customers?${query}`);
        return response.data;
    });
}
exports.list = list;
