interface Skill{
    name: string;
}

export interface Project {
    id: number,
    title : string,
    skills : Skill[],
    description: string,
    live: boolean,
    featured: boolean,
    image: string,
    live_url: string,
    github_url : string,
    small_project: boolean,
    data_analysis: boolean
}
