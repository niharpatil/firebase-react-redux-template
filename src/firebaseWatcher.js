const db = firebase.database()

import {getAllLists, loadList} from './actions'

const listsRef = db.ref('lists')

export function setupFirebaseListeners(dispatch) {
    const dispatchGetAllLists = snap => {
        const lists = []
        snap.forEach(child => {
            lists.push({
                name: child.val().name,
                key: child.key
            })
        })
        dispatch(getAllLists(lists))
    }
    listsRef.on('value', dispatchGetAllLists)
    listsRef.on('child_changed', snap => {
        const ref = snap.ref
        ref.once('value', snap => {
            if(snap.val().items){
                dispatch(loadList(snap.key))
            }
        })
    })
}
