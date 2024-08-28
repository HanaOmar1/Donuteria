
document.querySelector('nav ul li button:first-child').addEventListener('click', addDonut);
function addDonut() {
    const name = prompt("Enter the name of the donut:");
    const price = parseFloat(prompt("Enter the price of the donut:"));
    
    if (name && price) {
      const donutHTML = `
        <div class="donut">
          <img src="img/${name}.png" alt="${name} Donut" class="donut-image">
          <h2>${name} Donut</h2>
          <p>Price: ${price}$</p>
        </div>
      `;
      const donutsContainer = document.querySelector('.donuts');
      donutsContainer.innerHTML += donutHTML;
    } else {
      alert("Please enter both a name and a price for the donut.");
    }
}
document.getElementById('remove-product-btn').addEventListener('click', removeDonut); 
 function removeDonut() {
    const name = prompt("Enter the name of the donut to remove:");
    if (name) {
      const donutsContainer = document.querySelector('.donuts');
      const donutElement = donutsContainer.querySelector(`[alt="${name} Donut"]`).parentNode;
      if (donutElement) {
        donutElement.remove();
        alert(`Donut "${name}" has been removed.`);
      } else {
        alert(`Donut "${name}" not found.`);
      }
    } else {
      alert("Please enter the name of the donut to remove.");
    }
  }
  let users = getArrayFromStorage();

function showAllUsers() {
    const usersContainer = document.getElementById("usersContainer");
    usersContainer.innerHTML = ""; // Clear previous users
    
    // Loop through the array of user objects
    users.forEach(user => {
      const userProfileHTML = `
        <div class="user-profile">
          <p><strong>Username:</strong> ${user.username}</p>
          <!-- Add more profile information here -->
        </div>
      `;
      usersContainer.innerHTML += userProfileHTML;
    });
    
    document.getElementById("usersModal").style.display = "block";
}

document.getElementById("showAllUsersBtn").addEventListener("click", showAllUsers);

function closeModal1() {
    document.getElementById("usersModal").style.display = "none";
}

function getArrayFromStorage() {
    const storedArray = localStorage.getItem('users');
    return storedArray ? JSON.parse(storedArray) : [];
}
