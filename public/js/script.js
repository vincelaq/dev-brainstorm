// DECLARE DOCUMENT VARIABLES
const profileButton = document.getElementById('profile-toggle');
const profileDiv = document.getElementById('profile-container');

// TOGGLE FUNCTION
function toggleProfile() {
    if (profileDiv.style.display === "none") {
      profileDiv.style.display = "flex";
    } else {
      profileDiv.style.display = "none";
    }
};

// TOGGLE EVENT LISTENER
profileButton.addEventListener("click", toggleProfile);