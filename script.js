let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('.navbar');



menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

document.querySelector('#loginbtn').onclick = () =>{
    document.querySelector('.login-form').classList.toggle('active');
  }
  document.querySelector('#closeloginform').onclick = () =>{
    document.querySelector('.login-form').classList.remove('active');
  }

  document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("loginBtn");
    const closeLoginFormBtn = document.getElementById("closeloginform");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Perform field validation
        if (usernameInput.value.trim() === "") {
            alert("Please enter your username.");
            return;
        }
        
        if (passwordInput.value.trim() === "") {
            alert("Please enter your password.");
            return;
        }

        // If fields are valid, you can proceed with login logic here
        // For example, you can send an AJAX request to authenticate the user
        // and handle the response accordingly
        // Replace the alert with your actual login logic

        alert("Login successful!");

        // Hide the login form after successful login
        loginForm.classList.remove("active");

        // Optionally, you can reset the form after successful login
        loginForm.reset();
    });

    // Add event listener to close login form button
    closeLoginFormBtn.addEventListener("click", function() {
        loginForm.classList.remove("active");
    });

    // Add event listener to login button
    loginBtn.addEventListener("click", function() {
        // Display the login form
        loginForm.classList.add("active");
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split("/").pop(); // Get the current page URL

  // Remove the active class from all navigation links
  document.querySelectorAll('.navbar a').forEach(link => {
      link.classList.remove('active');
  });

  // Apply the active class to the navigation link corresponding to the current page
  if (currentPage === "index.html") {
      document.getElementById("homeLink").classList.add('active');
  } else if (currentPage === "about.html") {
      document.getElementById("aboutLink").classList.add('active');
  } else if (currentPage === "health_plan.html") {
      document.getElementById("healthPlanLink").classList.add('active');
  } else if (currentPage === "contact_us.html") {
      document.getElementById("contactUsLink").classList.add('active');
  }
});
