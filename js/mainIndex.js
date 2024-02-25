import {
  populateCars,
  populateUsers,
  populateBrands,
  populateTable,
} from "./poblarTablas.js";

// Call the populate functions when the page loads
window.onload = () => {
  populateCars();
  populateUsers();
  populateBrands();
  populateTable();
};
