export interface User { 
    id: string;
    name: string;
    wallets: Wallet[];
    __typename: string;
}

export interface Wallet {
    amount: number;
    currency: string;
    id: string;
    __typename: string;
}

export interface CurrentUser{
    name: string;
    amount: string | null;
}