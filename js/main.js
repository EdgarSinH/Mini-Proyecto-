import {
  populateCars,
  populateUsers,
  populateBrands,
  populateTable,
} from "./poblarSelect.js";

// Call the populate functions when the page loads
window.onload = () => {
  populateCars();
  populateUsers();
  populateBrands();
  populateTable();
};
