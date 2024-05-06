declare module 'payle' {
    export namespace Payle {
        interface Product {
            id: string;
            object: 'product';
            active: boolean;
            created_at: Date;
            description: string | null;
            images: Array<string>;
            name: string;
            updated_at: Date;
        }
    }
}