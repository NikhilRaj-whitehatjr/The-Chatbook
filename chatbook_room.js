//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBSqhvMERz_4cTajOCkaa3kPpZ9VpmvzIM",
  authDomain: "the-chatbook.firebaseapp.com",
  databaseURL: "https://the-chatbook-default-rtdb.firebaseio.com",
  projectId: "the-chatbook",
  storageBucket: "the-chatbook.appspot.com",
  messagingSenderId: "465010768220",
  appId: "1:465010768220:web:5d30f2021d7d8044436999"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);

    window.location="index.html";

  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name -" + Room_names);
     row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
    });
});
}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="index.html";
}

function logout(){
    localStorage
}
