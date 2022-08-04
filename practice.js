
var firebaseConfig = {
    apiKey: "AIzaSyCP1olVvUD02jmLUIazdqB_9AhhjjBWEVg",
    authDomain: "kwitter-825a9.firebaseapp.com",
    databaseURL: "https://kwitter-825a9-default-rtdb.firebaseio.com",
    projectId: "kwitter-825a9",
    storageBucket: "kwitter-825a9.appspot.com",
    messagingSenderId: "1074125993643",
    appId: "1:1074125993643:web:1a16c27845f24c1ec1e9ee"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addUser(){
    user_name= document.getElementById("name").value 

    firebase.database().ref("/").child(user_name).update
    ({

     purpose:"Adding user",
     status:"New user"


    });
    
  }