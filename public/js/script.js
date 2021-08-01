// DECLARE DOCUMENT VARIABLES
const profileButton = document.getElementById('profile-toggle');
const profileDiv = document.getElementById('profile-container');

// TOGGLE FUNCTION
function toggleProfile() {
    if (profileDiv.style.display === "flex") {
      profileDiv.style.display = "none";
    } else {
      profileDiv.style.display = "flex";
    }
};

// TOGGLE EVENT LISTENER
profileButton.addEventListener("click", toggleProfile);

// AUTO RESIZE TEXTAREA
$('textarea').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

// SORTING DROP DOWN MENU
function goToNewPage() {
  let url = document.getElementById('list').value;
  if(url != 'none') {
    window.location = url;
  }
};