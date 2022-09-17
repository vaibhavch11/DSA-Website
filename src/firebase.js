const firebaseConfig = {
    apiKey: "AIzaSyA0ocGQQ5PIhR3-1SKj211am8DmD64BZaM",
    authDomain: "dsa-website-f6cdb.firebaseapp.com",
    projectId: "dsa-website-f6cdb",
    storageBucket: "dsa-website-f6cdb.appspot.com",
    messagingSenderId: "476057524746",
    appId: "1:476057524746:web:6c930797c63af818705df3",
    measurementId: "G-FC9D4DLM5B"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = app.firestore();
  const analytics = getAnalytics(app);
  const storage = firebase.storage();

  export {storage};
  export default db;