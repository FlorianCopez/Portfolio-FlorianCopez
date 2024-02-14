/**
 * Represents a skill.
 * @typedef {Object} Skill
 * @property {number} id - The identifier of the skill.
 * @property {string} name - The name of the skill.
 * @property {boolean} learn - Indicates whether the skill is currently being learned.
 *                             `true` if in progress, `false` if acquired.
 */
export type Skill = {
    id: number,
    name: string,
    learn: boolean
}

/**
 * Represents a project.
 * @typedef {Object} Project
 * @property {number} id - The identifier of the project.
 * @property {string} title - The title of the project.
 * @property {string} synopsis - A brief summary or description of the project.
 * @property {string} subtitle - The subtitle or additional information about the project.
 * @property {string} description - The detailed description of the project.
 * @property {string} image - The URL or path to the image representing the project.
 * @property {string | null} urlRepo - The URL to the project's repository, if available.
 * @property {string | null} url - The URL to the project, if available.
 * @property {string} slug - The slug or unique identifier of the project.
 * @property {Tool[]} tools - An array of tools used in the project.
 */
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

/**
 * Represents a tool used in a project.
 * @typedef {Object} Tool
 * @property {number} id - The identifier of the tool.
 * @property {string} name - The name of the tool.
 */
export type Tool = {
    id: number,
    name: string
}