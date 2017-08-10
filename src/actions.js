import api from './api'

export function getAllLists(lists){
    return {
        type: 'GET_ALL_LISTS',
        lists
    }
}