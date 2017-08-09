const db = firebase.database()
const lists = db.ref('lists')

function createList(name) {
    const newListRef = lists.push()
    newListRef.set({
        name
    })
}

function deleteList(listKey){
    lists.child(listKey).remove()
}

function updateList(listKey, listData){
    const list = lists.child(listKey)
    list.update({
        name: listData.name
    })
}

export default {
    createList,deleteList,updateList
}