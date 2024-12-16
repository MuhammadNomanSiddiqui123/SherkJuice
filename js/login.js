document
  .getElementById("login form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var Email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;

    if (!Email.includes("@")) {
      alert("@ is missing");
      return;
    }
    if (password.length < 6) {
      alert("password should be atlest 6 latters");
      return;
    }

    alert("login sucessfull");
    document.getElementById("login form").reset();
  });
