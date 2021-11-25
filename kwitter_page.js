
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAYRKDQ46WFPkwEWDi1GLRY5M3zKnmJ3YQ",
      authDomain: "kwitter-bb42b.firebaseapp.com",
      databaseURL: "https://kwitter-bb42b-default-rtdb.firebaseio.com",
      projectId: "kwitter-bb42b",
      storageBucket: "kwitter-bb42b.appspot.com",
      messagingSenderId: "46921927983",
      appId: "1:46921927983:web:9be7dac82685a54c87a5da"
    };
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() 
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});

document.getElementById("msg").value = "";
}
