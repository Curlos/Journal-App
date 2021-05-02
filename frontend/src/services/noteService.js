import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/notes';

const getAllNotes = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
}

const createNote = async (newObject) => {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
}

const editNote = async (id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject);
    return response.data;
}

const deleteNote = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
}

export default { getAllNotes, createNote, editNote, deleteNote }