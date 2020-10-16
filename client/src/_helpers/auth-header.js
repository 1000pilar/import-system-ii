export function authHeader(){
    let user = JSON.stringify(localStorage.getItem('user'))

    if (user && user.token) {
        return { 'Authorizations': 'Bearer '+ user.token};
    } else {
        return {}
    }
}