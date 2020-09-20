export type User = {
    password: string,
    userName: string,
    links: link[]
}

export type link = {
    type: string,
    ref: string,
}