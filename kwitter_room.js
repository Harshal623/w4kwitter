//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBvUBNrMWAUmRwkg7-GUFTRLMkujDAwwVg",
      authDomain: "kwitter-w1.firebaseapp.com",
      databaseURL: "https://kwitter-w1-default-rtdb.firebaseio.com",
      projectId: "kwitter-w1",
      storageBucket: "kwitter-w1.appspot.com",
      messagingSenderId: "932137413728",
      appId: "1:932137413728:web:fc05f32652cc065a02a705",
      measurementId: "G-3D7HEL04HK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user")
document.getElementById("username").innerHTML = "Welcome " + user_name + "!"

function addroom() {
      Room_name = document.getElementById("room_name").value
      localStorage.setItem("Room_name", Room_name)
      firebase.database().ref("/").child(Room_name).update({
            porpose: "adding room"
      });
      window.location = "kwitter_page.html"
}



function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room names-" + Room_names)
                  row = "<div id = '" + Room_names + "' class = 'room_name' onclick = 'redirect(this.id)'>" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row
                  //End code
            });
      });
}
getData();

function redirect(current_room) {
      console.log(current_room)
      localStorage.setItem("Room_name", current_room)
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user")
      localStorage.removeItem("Room_name")
      window.location = "index.html"
}