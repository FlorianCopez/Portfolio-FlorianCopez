export type Skill = {
    id: number,
    name: string,
    learn: boolean
}

export type Project = {
    id: number,
    title: string,
    synopsis: string,
    subtitle: string,
    description: string,
    image: string,
    urlRepo: string | null,
    url: string | null,
    slug: string,
    tools: Tool[],
}

export type Tool = {
    id: number,
    name: string
}