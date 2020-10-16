import config from 'config';
import { authHeader } from '../_helpers';


export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
}


function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    }

    return axios('api user login', requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {

    localStorage.removeItem('user');
}


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    return axios('api get', requestOptions).then(handleResponse)
}

function getById(id){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return axios('get by id api', requestOptions).then(handleResponse)
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body:JSON.stringify(user)
    }

    return axios('api register', requestOptions).then(handleResponse);
}

function update(user){
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-type': 'application/json'},
        body: JSON.stringify(user)
    }

    return axios('api update', requestOptions).then(handleResponse)
}

function _delete(id){
    const requestOptions =  {
        method: 'DELETE',
        headers: authHeader()
    }

    return axios('api delete', requestOptions).then(handleResponse())
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(test);
        if (!response.ok) {
            if (response.status === 401) {
                logout()
                location.reload(true)
            }

            const error =  (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}



