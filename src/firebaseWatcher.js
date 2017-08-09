const db = firebase.database()
import {getAllLists, loadList} from './actions'
const listsRef = db.ref('lists')

export function setupFirebaseListeners(dispatch) {
    listsRef.on('value', snap => {
        const lists = []
        snap.forEach(child => {
            lists.push({
                name: child.val().name,
                key: child.key
            })
        })
        dispatch(getAllLists(lists))
    })
}