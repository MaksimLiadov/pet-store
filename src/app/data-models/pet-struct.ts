export interface IPet {
    id: number,
    category: {
        id: number,
        name: string
    },
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

export enum StatusEnum {
    Available = "available",
    Pending = "pending",
    Sold = "sold"
}