import firebase from 'firebase';

import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDGctfjXbF7MLE5SrndkJzENzoeDWdZeuQ',
  authDomain: 'ah-frontend-dojo.firebaseapp.com',
  databaseURL: 'https://ah-frontend-dojo.firebaseio.com',
  projectId: 'ah-frontend-dojo',
  storageBucket: 'ah-frontend-dojo.appspot.com',
  messagingSenderId: '396083612843',
  appId: '1:396083612843:web:b140ca33e2038761',
};

firebase.initializeApp(config);

export default firebase;
