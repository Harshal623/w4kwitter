function adduser(){
    username = document.getElementById("UserName").value
    localStorage.setItem("user", username)
    window.location = "kwitter_room.html"
}
