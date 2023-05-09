export default interface iproduct {
    author:     Author;
    categories: string[];
    items:      Item[];
}

export interface Author {
    name:     string;
    lastname: string;
}

export interface Item {
    id:            string;
    title:         string;
    price:         Price;
    thumbnail:     string;
    picture:       string;
    condition:     string;
    free_shipping: boolean;
    address:       Address;
}

export interface Address {
    state_id:   string;
    state_name: string;
    city_id:    null | string;
    city_name:  string;
}

export interface Price {
    currency: string;
    amount:   string;
    decimals: string;
}