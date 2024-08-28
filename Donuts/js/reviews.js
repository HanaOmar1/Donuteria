document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const reviewText = document.getElementById("reviewText").value;

    if (username && reviewText) {
        const reviewContainer = document.createElement("div");
        reviewContainer.classList.add("review-slide");

        const reviewContent = document.createElement("p");
        reviewContent.textContent = `"${reviewText}" - ${username}`;
        reviewContainer.appendChild(reviewContent);

        document.querySelector(".reviews").appendChild(reviewContainer);

        document.getElementById("username").value = "";
        document.getElementById("reviewText").value = "";
    }
});
