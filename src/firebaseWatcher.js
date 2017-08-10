const db = firebase.database()

//setup listener for the items ref that 
//updates redux state of items

export default (dispatch) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      dispatch({
        type:'LOGIN'
      })
    }
  });

  const itemsListRef = db.ref('/items')
  itemsListRef.on('value', snap => {
    let items = []

    snap.forEach(childSnap => {
      const name = childSnap.val().name
      const key = childSnap.key
      items.push({
        name: name,
        key: key
      })
    })

    dispatch({
      type: 'GET_ALL_ITEMS',
      items: items
    })
  })
}