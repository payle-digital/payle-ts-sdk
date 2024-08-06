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
exports.retrieve = exports.list = exports.create = void 0;
const axios_1 = __importDefault(require("axios"));
const baseURL = 'http://localhost:3001';
function create(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.post(`${baseURL}/v1/payments`, params);
        return response.data;
    });
}
exports.create = create;
function list(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${baseURL}/v1/payments?${params}`);
            return response.data;
        }
        catch (error) {
            console.error('Error listing payments:', error);
            throw error;
        }
    });
}
exports.list = list;
function retrieve(id, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${baseURL}/v1/payments/${id}?${params}`);
            return response.data;
        }
        catch (error) {
            console.error('Error retrieving payment:', error);
            throw error;
        }
    });
}
exports.retrieve = retrieve;
