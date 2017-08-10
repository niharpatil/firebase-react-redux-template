const db = firebase.database()
const itemsListRef = db.ref('/items')

function register(email,password){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorMessage)
  });
}

function login(email,password){
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorMessage)
  });
}

function createItem(name) {
  const itemRef = itemsListRef.push()
  itemRef.set({
    name: name
  })
}

function deleteItem(itemKey){
  itemsListRef.child(itemKey).remove()
}

function updateItem(itemKey, name){
  // db.ref(`/items/${itemKey}`)
  itemsListRef.child(itemKey)
  .update({
    name: name
  })
}

export default {
    createItem,deleteItem,updateItem,register,login
}