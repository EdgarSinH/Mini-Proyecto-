import { db, doc, setDoc } from "/js/configuracionFirebase.js";
import { populateCars, populateUsers, populateBrands } from "./poblarSelect.js";

// Handle reservation form submission
try {
  document
    .getElementById("reservation-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const reservationCar = document.getElementById("reservation-car").value;
      const reservationUser = document.getElementById("reservation-user").value;
      const docRef = doc(
        db,
        "reservado",
        `${reservationUser}-${reservationCar}`
      );
      await setDoc(docRef, { car: reservationCar, user: reservationUser });
      document.getElementById("reservation-form").reset();
    });
} catch (e) {}

// Handle car form submission
try {
  document.getElementById("car-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const carName = document.getElementById("car-name").value;
    const carBrand = document.getElementById("car-brand").value;
    const docRef = doc(db, "pc", carName);
    await setDoc(docRef, { name: carName, brand: carBrand });
    document.getElementById("car-form").reset();
    populateCars(); // Repopulate cars after a new one is added
  });
} catch (error) {}

// Handle brand form submission
try {
  document
    .getElementById("brand-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const brandName = document.getElementById("brand-name").value;
      const docRef = doc(db, "brands", brandName);
      await setDoc(docRef, { name: brandName });
      document.getElementById("brand-form").reset();
      populateBrands(); // Repopulate brands after a new one is added
    });
} catch (error) {}

// Handle user form submission
try {
  
} catch (error) {}
