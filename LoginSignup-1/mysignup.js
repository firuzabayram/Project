let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".all-control");

let allUsersData =
  JSON.parse(localStorage.getItem("usersData")) == null
    ? []
    : JSON.parse(localStorage.getItem("usersData"));

form.addEventListener("submit", function (event) {
  event.preventDefault();

  allInputs.forEach((q) => {
    q.value === "" && alert("sehvlik var zehmet olmasa, bir daha yoxlayin!");
  });

  let userObj = {
    email: "",
    password: "",
    username: "",
    number: "",
  };

  userObj.email = allInputs[0].value;
  userObj.password = allInputs[1].value;
  userObj.username = allInputs[2].value;
  userObj.number = allInputs[3].value;

  console.log(allInputs[0].value);
  console.log(allInputs[2].value);

  allUsersData.some((q) => q.email === allInputs[0].value) ||
  allUsersData.some((q) => q.username === allInputs[2])
    ? null
    : allUsersData.push(userObj);

  localStorage.setItem("usersData", JSON.stringify(allUsersData));

  allInputs.forEach((input) => (input.value = ""));
});
