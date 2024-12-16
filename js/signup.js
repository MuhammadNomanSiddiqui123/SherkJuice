document
  .getElementById("signupform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var Username = document.getElementById("Username");
    var Email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirm password").value;

    if (!Email.includes("@")) {
      alert("@ is missing");
      return;
    }
    if (password.length < 6) {
      alert("please put  strong password");
      return;
    }
    if (confirmpassword !== password) {
      alert("password does not match");
      return;
    }

    alert("signup sucessfull");
    document.getElementById("signupform").reset();
  });
