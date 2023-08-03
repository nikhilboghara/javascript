//

console.log("=== APIs");

// GET ...
fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then(console.log);

// post api with simple js fetch

// Types of APIs ... (REST APIs ...)
// 1. GET => to get sdetails from back-end
// 2. POST => to create new records
// 3. PUT/PATCH => to update records
// 4. DELETE => to delete record

// CRUD operations: Create, Read, Update, Delete

// client => back-end
// request response cycle ...
