import { userConstants, userConstant } from '../_constants/user.constants'


export function users(state={}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST: 
            return {
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return {
                item: action.users
            };
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case userConstants.DELETE_REQUEST:
            return {
                ...state,
                items: state.item.map(user =>
                   user.id === action.id
                    ? { ...user, deleting: true}
                    : user  
                )
            };
        case userConstants.DELETE_SUCCESS:
            return {
                items: state.item.filter(user => user.id != action.id)
            }
        case userConstants.GETALL_FAILURE:
            return {
                ...state,
                items: state.item.map(user =>{
                    if(user.id === action.id){
                        const { deleting, ...userCopy} = user;
                        return { ...userCopy, deleteError: action.error}
                    }
                    return user;
                })
            };
        default:
            return state
    }
}