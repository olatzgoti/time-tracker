export interface Profile{

    id: string,
    username: string,
    picture?: string,

}
export interface Auth{

    id: string,

}

export interface Project{

    id: string,
    userId: string,
    name: string,
    description?: string,
    urgency?: string,

}

export interface TimeEntries{

    id: string,
    userId: string,
    projectId: string,
    dateStart: Date,
    dateFinish: Date,
    time: number,
    duration: number,
    notes: string,

}