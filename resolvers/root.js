const firebase = require('../config/firebase')

const root = {
  getTeams: () => {
    const db = firebase.firestore()


    const data = db.collection('team').doc('FeQxWAL9etRJY4282Nhj')
    console.log(data)
    data.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!')
        } else {
          console.log('Document data:', doc.data())
        }
      })
      .catch(err => {
        console.log('Error getting document', err)
      })
  }
}

module.exports = root
