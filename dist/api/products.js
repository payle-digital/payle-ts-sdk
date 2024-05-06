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
exports.del = exports.update = exports.retrieve = exports.list = exports.create = void 0;
const axios_1 = __importDefault(require("axios"));
const baseURL = 'https://api.payle.digital';
function create(params, apiKey) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(`${baseURL}/products`, params, {
                headers: { 'Authorization': `Bearer ${apiKey}` }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    });
}
exports.create = create;
function list(params, apiKey) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${baseURL}/products?${params}`, {
                headers: { 'Authorization': `Bearer ${apiKey}` }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error listing products:', error);
            throw error;
        }
    });
}
exports.list = list;
function retrieve(id, params, apiKey) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${baseURL}/products/${id}?${params}`, {
                headers: { 'Authorization': `Bearer ${apiKey}` }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error retrieving product:', error);
            throw error;
        }
    });
}
exports.retrieve = retrieve;
function update(id, params, apiKey) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.patch(`${baseURL}/products/${id}`, params, {
                headers: { 'Authorization': `Bearer ${apiKey}` }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }
    });
}
exports.update = update;
function del(id, params, apiKey) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.delete(`${baseURL}/products/${id}?${params}`, {
                headers: { 'Authorization': `Bearer ${apiKey}` }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    });
}
exports.del = del;
