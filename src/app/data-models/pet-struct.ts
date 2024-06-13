export interface IPet {
    id: number,
    category: IPetCategory,
    name: string,
    photoUrls: string[],
    tags: IPetTags[],
    status: StatusEnum
}

export interface IPetTags {
    id: number,
    name: string
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