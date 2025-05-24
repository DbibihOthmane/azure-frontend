import api from "@/config/api"
import { ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, CREATE_PROJECTS_REQUEST, CREATE_PROJECTS_SUCCESS, DELETE_PROJECTS_REQUEST, DELETE_PROJECTS_SUCCESS, FETCH_PROJECTS_BY_ID_REQUEST, FETCH_PROJECTS_BY_ID_SUCCESS, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, INVITE_TO_PROJECTS_REQUEST, INVITE_TO_PROJECTS_SUCCESS, SEARCH_PROJECTS_REQUEST, SEARCH_PROJECTS_SUCCESS } from "./ActionType"


export const fetchProjects = ({category, tag}) =>async (dispatch)=> {

    dispatch({type:FETCH_PROJECTS_REQUEST})

    try {

        const {data} = await api.get("/api/projects", {params:{category, tag}})
        console.log("all projects", data)
        dispatch({type:FETCH_PROJECTS_SUCCESS, projects:data})
    } catch(error) {
        console.log("error", error)
    }
}



export const searchProjects = (keyword) =>async (dispatch)=> {

    dispatch({type:SEARCH_PROJECTS_REQUEST})

    try {

        const {data} = await api.get("/api/projects/search?keyword="+keyword)
        console.log("Search projects", data)
        dispatch({type:SEARCH_PROJECTS_SUCCESS, projects:data})
    } catch(error) {
        console.log("error", error)
    }
}


export const createProject = (projectData) =>async (dispatch)=> {

    dispatch({type:CREATE_PROJECTS_REQUEST})

    try {

        const {data} = await api.post("/api/projects", projectData)
        console.log("create project", data)
        dispatch({type:CREATE_PROJECTS_SUCCESS, project:data})
    } catch(error) {
        console.log("error", error)
    }
}


export const fetchProjectById = (id) =>async (dispatch)=> {

    dispatch({type:FETCH_PROJECTS_BY_ID_REQUEST})

    try {

        const {data} = await api.get("/api/projects/"+id)
        console.log("project by id", data)
        dispatch({type:FETCH_PROJECTS_BY_ID_SUCCESS, project:data})
    } catch(error) {
        console.log("error", error)
    }
}


export const deleteProject = ({projectId}) =>async (dispatch)=> {

    dispatch({type:DELETE_PROJECTS_REQUEST})

    try {

        const {data} = await api.delete("/api/projects/"+projectId)
        console.log("delete project", data)
        dispatch({type:DELETE_PROJECTS_SUCCESS, projectId})
    } catch(error) {
        console.log("error", error)
    }
}

export const inviteToProject = ({email, projectId}) =>async (dispatch)=> {

    dispatch({type:INVITE_TO_PROJECTS_REQUEST})

    try {

        const {data} = await api.post("/api/projects/invite", {email, projectId})
        console.log("Invite to project", data)
        dispatch({type:INVITE_TO_PROJECTS_SUCCESS, payload: data})
    } catch(error) {
        console.log("error", error)
    }
}



export const acceptInvitation = ({token, navigate}) =>async (dispatch)=> {

    dispatch({type:ACCEPT_INVITATION_REQUEST})

    try {

        const {data} = await api.get("/api/projects/accept_invitation", {

            params:{
                token
            }
        })

        navigate("/project/"+data.projectId)
        console.log("Accept invitation to project", data)
        dispatch({type:ACCEPT_INVITATION_SUCCESS, payload: data})
    } catch(error) {
        console.log("error", error)
    }
}







