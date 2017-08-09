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

//gets the name, key, and items of a list ref
function getListData(listKey) {
    return lists.child(listKey)
    .once('value')
    .then(snap => {
        let items
        if(snap.val().items){
            items = Object.values(snap.val().items)
        } else {
            items = []
        }
        const name = snap.val().name
        return {
            name,
            items,
            key: snap.key
        }
    })
}

function addItem(listKey,todo){
    const itemRef = db.ref(`/lists/${listKey}/items`).push()
    itemRef.set({
        todo
    })
}

function updateList(listKey, listData){
    const list = lists.child(listKey)
    list.update({
        name: listData.name
    })
}

//this is dirty af
function deleteItem(listKey, itemKey){
    const itemRef = lists.child(listkey).child(itemKey)
    itemRef.remove()
}

//this is also dirty af
function updateItem(listKey, itemKey, todo){
    const itemRef = lists.child(listkey).child(itemKey)
    itemRef.update({
        todo
    })
}

export default {
    createList,deleteList,getListData,addItem,updateList,deleteItem,updateItem
}