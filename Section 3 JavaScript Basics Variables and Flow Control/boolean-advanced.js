let isAccountLocked = true;
let userRole = "admin";

if (isAccountLocked) {
  console.log("is account locked");
} else if (userRole === "admin") {
  console.log("Welcome Admin");
} else {
  console.log("Welcome");
}
