//

console.log("== switch case");

const role = "user"; // fixed amount of any possible value
// admin, user, faculty, student, executive, peon, other(default)

switch (role) {
  case "admin":
    adminLevelAccess();
    break;

  case "user":
    userLevelAccess();
    break;

  case "faculty":
    console.log("The faculty logs in ");
    break;

  // ...

  default:
    console.log("Unknown user");
    break;
}

function adminLevelAccess() {
  //
  //

  console.log("=== Admin level granted");
}

function userLevelAccess() {
  //
  //
  console.log("== user level access granted");
}

// &&, ||, !
