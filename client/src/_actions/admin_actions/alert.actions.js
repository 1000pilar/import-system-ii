import { alertConstans } from '../../_constants'

export const alertActions = {
    success,
    error,
    clear
}


function success(message){
    return { type: alertConstans.SUCCESS, message}
}

function error(message){
    return { type: alertConstans.ERROR, message}
}

function clear(){
    return { type: alertConstans.CLEAR}
}