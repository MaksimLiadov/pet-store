export interface IPet {
    id: number,
    category: IPetCategory,
    name: string,
    photoUrls: [
        string
    ],
    tags: [
        {
            id: number,
            name: string
        }
    ],
    status: StatusEnum
}

export interface IPetCategory {
    id: number,
    name: string
}

export enum StatusEnum {
    Available = "available",
    Pending = "pending",
    Sold = "sold"
}