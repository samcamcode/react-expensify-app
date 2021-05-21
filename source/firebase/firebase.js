import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmW5F6pokCowQYL0OFevefAC5FbnA4TWE",
    authDomain: "expensify-72cdf.firebaseapp.com",
    databaseURL: "https://expensify-72cdf-default-rtdb.firebaseio.com",
    projectId: "expensify-72cdf",
    storageBucket: "expensify-72cdf.appspot.com",
    messagingSenderId: "282626912114",
    appId: "1:282626912114:web:0dbea7a704abdcc57a77eb",
    measurementId: "G-KXEQ26SK5K"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};





// child_removed
// database.ref('Expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// child_changed
// database.ref('Expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// child_added
// database.ref('Expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// challenge
// database.ref('Expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// })

// database.ref('Expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// });


// how to upload array structured data to firebase //////////////////////////////////
// database.ref('notes').push({
//     title: 'learn',
//     body: 'html, css, js, react'
// });

// challenge
// database.ref('Expenses').push({
//     amount: 20.00,
//     createdAt: 10,
//     description: 'only fans',
//     note: ''
// });


// how array data is saved in firebase /////////////////////////////////////////////////////
// const firebaseNotes = {
//     notes: {
//         someKeyOrId: {
//             title: 'first note',
//             body: 'this is a note'
//         },
//         anotherKeyOrId: {
//             title: 'second note',
//             body: 'this is a note'
//         }
//     }
// }


// challenge
// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// })

// fetching data constantly automatically/////////////////////////////////////////////////////
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => { 
//     console.log('error fetching data', e)
// })

///// fetching data once//////////////////////////////////////////////////////////////////////
// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error: ', e);
// })


// database.ref().set({
//     name: 'Samuel Camacho',
//     age: 36,
//     stressLevel: 6,
//     job: {
//         title: 'SWE',
//         company: 'google'
//     },
//     location: {
//         city: 'Moreno Valley',
//         country: 'US'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('failed', error)
// });

// database.ref().set('this is my data string');

// database.ref('age').set(37);
// database.ref('location/city').set('Riverside');

// database.ref('attributes').set({
//     height: '5ft 7inches',
//     weight: '170lbs'
// }).then(() => {
//     console.log('sync success');
// }).catch((e) => {
//     console.log('Sync failed', e)
// });

// how to delete in firebase //////////////////////////////////////////////////////////////////////
// database.ref('isSingle').remove();
// database.ref('isSingle').set(null);

// how to update in firebase with nested objects/////////////////////////////////////////////////////
// database.ref().update({
//     job: 'SWE',
//     'location/city': 'Los Angeles'
// });

/////challenge
// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'Seattle',
//     'job/company': 'Amazon'
// })