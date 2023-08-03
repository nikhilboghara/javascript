//

console.log("=== BOM ...");

const height = window.innerHeight;

console.log(height);

// window.alert("Hello from alert");

// localStorage ...
window.localStorage.setItem("isDarkMode", false);
window.localStorage.setItem("isAdmin", false);

const admin = window.localStorage.getItem("isAdmin");

console.log(admin);

window.localStorage.removeItem("isAdmin");
