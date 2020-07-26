// Get an HTML element in JavaScript code
const signup = document.querySelector(".signup");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButton = document.querySelector(".close-modal");

// function which shows the modal by changing the style of signupModal to "block"
const showModal = () => {
  signupModal.style.display = "block";
};

// function which hides the modal by changing the style of signupModal to "none"
const closeModal = () => {
  signupModal.style.display = "none";
};

// Call the showModal function when signup button is clicked
signup.addEventListener("click", () => {
  showModal();
});

// Call the closeModal function when close button on the modal is clicked
closeButton.addEventListener("click", () => {
  closeModal();
});

// Call the closeModal function when anywhere outside of the modal is clicked
window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModal();
  }
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}