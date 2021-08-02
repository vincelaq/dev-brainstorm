// DECLARE DOCUMENT VARIABLES
const profileButton = document.getElementById('profile-toggle');
const profileDiv = document.getElementById('profile-container');
const leftPaneButton = document.getElementById('hint');
const leftPaneTitle = document.getElementById('page-title');
const leftPaneDesc = document.getElementById('page-desc');

// TOGGLE FUNCTIONS
function toggleProfile() {
    if (profileDiv.style.display === "flex") {
      profileDiv.style.display = "none";
    } else {
      profileDiv.style.display = "flex";
    }
};
function toggleHint() {
  if (leftPaneTitle.style.display === "block" && leftPaneDesc.style.display === "block") {
    leftPaneTitle.style.display = "none";
    leftPaneDesc.style.display = "none";
    leftPaneButton.innerHTML = '[ + ]';
  } else {
    leftPaneTitle.style.display = "block";
    leftPaneDesc.style.display = "block";
    leftPaneButton.innerHTML = '[ - ]';
  }
}

// TOGGLE EVENT LISTENERS
profileButton.addEventListener("click", toggleProfile);
leftPaneButton.addEventListener("click", toggleHint);


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