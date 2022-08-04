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
    room_name=localStorage.getItem("room_name")
    user_name=localStorage.getItem("user_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code
console.log(firebase_message_id)
console.log(message_data)
user_name= message_data["user_name"]
user_name_tag= "<h4 >" + user_name + "<img class='user_tick' src='tick.png'> </h4>"

message= message_data["message"]
message_show= " <h4 class='message_show' > " + message + "</h4>"

like= message_data["like"]
like_button="<button class='btn btn-danger' id=" + firebase_message_id + " value= " 
+like +" onclick='updateLike(this.id)' > "
console.log(like_button)
span_with_tag= "<span class='glyphicon glyphicon-thumbs-up' > like : " +like +"</span> </button> <hr>"


row= user_name_tag + message_show + like_button + span_with_tag

document.getElementById("output").innerHTML +=row

//End code
      } });  }); }
getData();


function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            message:msg,
            user_name: user_name,
            like:0
      })
      document.getElementById("msg").value=""
}



function updateLike(message_id){
    
      likes= document.getElementById(message_id).value
      update_likes= Number(likes) +  1
console.log(update_likes)
firebase.database().ref(room_name).child(message_id).update({
      like: update_likes
})
}
function logout(){
      window.location="kwitter_room.html"
}