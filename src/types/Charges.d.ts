declare module 'payle' {
    export namespace Payle {
        interface Charge {
            id: string;
            object: 'charge';
            amount: number;
        }
    }
}