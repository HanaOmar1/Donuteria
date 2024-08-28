function getArrayFromStorage() {
    const storedArray = localStorage.getItem('users');
     return storedArray ? JSON.parse(storedArray) : [];
 }
function displayArray() {
    const array = getArrayFromStorage();
    array.forEach(item => {
        console.log(item.username);
    });
}
// Function to save the array to localStorage

document.getElementById("loginForm").addEventListener("submit", function(event) {
   let u= getArrayFromStorage();
    event.preventDefault();

    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    const user = u.find(user => user.username === enteredUsername && user.password === enteredPassword);
    if(user)
    {
        if(user.username==="admin"&& user.password==="admin1")
        {
            document.getElementById("loginMessage").textContent = "Login successful!";
            document.getElementById("loginMessage").style.color = "#e11c47";
            window.location.href = "Admin.html";
        }
        else{
            document.getElementById("loginMessage").textContent = "Login successful!";
            document.getElementById("loginMessage").style.color = "#e11c47";
            window.location.href = "Home.html";
        }
    }
    else {
        document.getElementById("loginMessage").textContent = "Invalid username or password. Please try again.";
        document.getElementById("loginMessage").style.color = "#e11c47";
        document.getElementById("password").value = "";
    }
    
});

document.getElementById("register").addEventListener("click", function(event){
    console.log("hello");

    window.location.href = "Register.html";
});
