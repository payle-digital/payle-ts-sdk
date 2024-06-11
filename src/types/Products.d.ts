declare module 'payle' {
    export namespace Payle {
        interface DeletedProduct {
            id: string;
            object: 'product';
            deleted: true;
        }
        
        interface Product {
            id: string;
            object: 'product';
            active: boolean;
            created: Date;
            description: string | null;
            images: Array<string>;
            livemode: boolean;
            name: string;
            updated: Date;
        }
    }
}