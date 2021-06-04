const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  const cpassword = signupForm["signup-cpassword"].value;

  if (password != cpassword) {
    alert("Password did not matach");
  }
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      // close the signup modal & reset form
      window.location = "home.html";
      signupForm.reset();
    })
    .catch((err) => {
      alert(err);
    });
});

// login

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  // log the user in
  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      // close the signup modal & reset form
      window.location = "home.html";
      loginForm.reset();
    })
    .catch((err) => {
      alert(err);
    });
});
