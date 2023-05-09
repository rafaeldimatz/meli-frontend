export default interface iDetail {
    item: Item;
}

export interface Item {
    id:            string;
    title:         string;
    price:         Price;
    thumbnail:     string;
    picture:       string;
    condition:     string;
    free_shipping: boolean;
    sold_quantity: number;
    description:   string;
    categories:    string[];
}

export interface Price {
    currency: string;
    amount:   string;
    decimals: string;
}