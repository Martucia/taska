import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { IProject, IProjectCreate, IProjectUpdate } from '../types/project';
import { AppDispatch } from '../store/store';
import { projectsSlice } from '../store/reducers/projectsSlice';
import { getConfig } from '../utils/functions';
import { commonSlice } from '../store/reducers/commonSlice';

export const getAllProjects = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(projectsSlice.actions.projectFetching());

        const response = await axios.get<IProject[]>(`${BASE_URL}/projects`, getConfig());

        // const projects = response.data.map<IProject>(pr => ({
        //     ...pr,
        //     downloadedTasks: 'none'
        // }))

        dispatch(projectsSlice.actions.setProjects(response.data));
    } catch (e: any) {
        dispatch(projectsSlice.actions.projectFetchingError(e.response.data.message || e.message));
    }
}

export const createProject = (data: IProjectCreate) => async (dispatch: AppDispatch) => {
    try {
        if (!data.name || data.name.length === 0) {
            dispatch(projectsSlice.actions.projectFetchingError('Enter the name of the project'));
            return false;
        }

        dispatch(projectsSlice.actions.projectFetching());

        const response = await axios.post<IProject>(`${BASE_URL}/projects`, data, getConfig());

        dispatch(projectsSlice.actions.addProject(response.data));
        dispatch(commonSlice.actions.toggleParam({
            param: "projectCreateOpen",
            value: false
        }))

        return response.data.id;
    } catch (e: any) {
        dispatch(projectsSlice.actions.projectFetchingError(e.response.data.message || e.message));

        return false;
    }
}

export const getProject = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(projectsSlice.actions.projectFetching());

        const response = await axios.get<IProject>(`${BASE_URL}/projects/${id}`, getConfig());

        dispatch(projectsSlice.actions.setProject(response.data));
    } catch (e: any) {
        console.log(e)
        dispatch(projectsSlice.actions.projectFetchingError(e.response.data.message || e.message));
    }
}

export const updateProject = (project: IProjectUpdate) => async (dispatch: AppDispatch) => {
    try {
        dispatch(projectsSlice.actions.projectFetching());

        const response = await axios.patch<IProject>(`${BASE_URL}/projects/${project.id}`, project, getConfig());

        dispatch(projectsSlice.actions.updateProject(response.data));
    } catch (e: any) {
        console.log(e)
        dispatch(projectsSlice.actions.projectFetchingError(e.response.data.message || e.message));
    }
}

export const deleteProject = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(projectsSlice.actions.projectFetching());

        const response = await axios.delete<IProject>(`${BASE_URL}/projects/${id}`, getConfig());

        console.log(response.data)

        dispatch(projectsSlice.actions.removeProject(id));
    } catch (e: any) {
        console.log(e)
        dispatch(projectsSlice.actions.projectFetchingError(e.response.data.message || e.message));
    }
}

export const inviteParticipants = (id: number, participants: { email: string }[]) => async (dispatch: AppDispatch) => {
    try {
        dispatch(projectsSlice.actions.projectFetching());

        const response = await axios.patch<IProject>(`${BASE_URL}/projects/invite/${id}`, participants, getConfig());

        console.log(participants)
        console.log(response.data)

        // dispatch(projectsSlice.actions.updateProject(response.data));
    } catch (e: any) {
        console.log(e)
        dispatch(projectsSlice.actions.projectFetchingError(e.response.data.message || e.message));
    }
}