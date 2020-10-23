import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBQUyuM5Xr-sipwIPuW9MBtZo233J6fd_M",
  authDomain: "netninja-marioplan-5183a.firebaseapp.com",
  databaseURL: "https://netninja-marioplan-5183a.firebaseio.com",
  projectId: "netninja-marioplan-5183a",
  storageBucket: "netninja-marioplan-5183a.appspot.com",
  messagingSenderId: "306429927742",
  appId: "1:306429927742:web:71357fbee0c2fd5212cc6f",
  measurementId: "G-5FFQVGFXWC"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 