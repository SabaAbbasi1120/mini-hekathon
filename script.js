import { database } from "./firebase.js";
import { ref, push, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Reference the "contactSubmissions" collection in the Realtime Database
  const submissionsRef = ref(database, "contactSubmissions");

  // Create a new entry
  const newSubmissionRef = push(submissionsRef);

  // Save data to the database
  set(newSubmissionRef, {
    email: email,
    message: message,
    timestamp: new Date().toISOString(),
  })
    .then(() => {
      console.log("Data successfully saved:", { email, message });
      alert("Thank you for your submission!");
      event.target.reset(); // Reset the form
    })
    .catch((error) => {
      console.error("Error saving to database:", error);
      alert("Failed to submit the form. Please try again.");
    });
});
