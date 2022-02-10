//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDDBn6b-gkpIzOcXGL_S35t5SijpiA8iVI",
      authDomain: "kwitter-2c7e9.firebaseapp.com",
      databaseURL: "https://kwitter-2c7e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c7e9",
      storageBucket: "kwitter-2c7e9.appspot.com",
      messagingSenderId: "262172180721",
      appId: "1:262172180721:web:44c22e5a266e9774b6a950",
      measurementId: "G-E2CNGV1WHX"
    };
    
    // Initialize Firebase
      
      firebase.initializeApp(firebaseConfig);

      room_name = localStorage.getItem("room_name")
      user_name = localStorage.getItem("user_name")
      function send(){
            msg = document.getElementById("msg").value   
            firebase.database().ref(room_name).push({
                  message : msg,
                  name : user_name,
                  like : 0
            });
            document.getElementById("msg").value = "";
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data["name"]
message = message_data["message"]
like = message_data["like"]
name_with_tag = "<h4>"+ name+"<img class='user_tick' src='tick.png'></h4>"
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>"
like_with_tag = "<button id='"+ firebase_message_id + "'value='"+like+"' class='btn btn-warning'onclick='updatelike(this.id)'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>"
row = name_with_tag + message_with_tag + like_with_tag + span_with_tag;
document.getElementById("output").innerHTML += row
//End code
      } });  }); }
getData();

function updatelike(message_id){
button_id = message_id
likes = document.getElementById(button_id).value
updated_likes = Number(likes) + 1;
firebase.database().ref(room_name).child(button_id).update({
      like : updated_likes
})
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}
