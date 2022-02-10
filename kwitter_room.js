
//ADD YOUR FIREBASE LINKS HERE

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
    //const analytics = getAnalytics(app);
    user_name = localStorage.getItem("user_name")
    document.getElementById("welcome").innerHTML = "Welcome "+user_name + "!"

    function addroom(){
      room_name = document.getElementById("room_name").value
      localStorage.setItem("room_name", room_name)
      firebase.database().ref("/").child(room_name).update({
        purpose : "Adding room"
      })
      window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id='"+ Room_names + "'onclick = 'redirecttoroompage(this.id)'>#"+ Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
    
getData();

function redirecttoroompage(name){
localStorage.setItem("room_name", name)
window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name")
  window.location = "index.html";
}
