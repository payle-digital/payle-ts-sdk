"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const CustomersAPI = __importStar(require("./api/customers"));
const PaymentsAPI = __importStar(require("./api/payments"));
const ProductsAPI = __importStar(require("./api/products"));
class Payle {
    constructor(apiKey, options) {
        this.customers = {
            create: CustomersAPI.create,
            retrieve: CustomersAPI.retrieve,
            update: CustomersAPI.update,
            delete: CustomersAPI.del,
            list: CustomersAPI.list
        };
        this.payments = {
            create: PaymentsAPI.create,
            list: PaymentsAPI.list,
            retrieve: PaymentsAPI.retrieve
        };
        this.paymentLinks = {};
        this.products = {
            create: ProductsAPI.create,
            list: ProductsAPI.list,
            retrieve: ProductsAPI.retrieve,
            update: ProductsAPI.update,
            delete: ProductsAPI.del
        };
        this.apiKey = apiKey;
        this.baseURL = (options === null || options === void 0 ? void 0 : options.baseURL) || 'https://api.payle.digital';
        axios_1.default.defaults.headers.common['api-key'] = this.apiKey;
        axios_1.default.defaults.baseURL = this.baseURL;
    }
}
exports.default = Payle;
