
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

console.log("ROOM NAME : " + Room_names)

row= "<div class='room_row' id=" + Room_names +" onclick='redirectToRoomName(this.id) '> #" + Room_names + "</div> <hr> "

document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();


user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome : " + user_name + " !"


function addRoom(){
      room_name= document.getElementById("room_name").value 

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding new user"
      })

      localStorage.setItem("room_name",room_name)
}
function redirectToRoomName(name){
window.location= "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
