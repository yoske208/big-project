import fs from "fs";
import bcrypt from "bcrypt";
import Terror from "../src/Models/TerorModel"; // Your User model

/**
 * Encrypts passwords for all users in the provided data array.
 * @param terrorData - Array of user objects containing plaintext passwords.
 * @returns A promise that resolves to the user data array with encrypted passwords.
 */
async function encryptPasswords(terrorData: any[]) {
  return Promise.all(
    terrorData.map(async (user) => {
      if (user.password) {
        // Hash the password using bcrypt
        user.password = await bcrypt.hash(user.password, 10);
      }
      return user;
    })
  );
}

/**
 * Loads initial user data into the database if no users exist.
 * Reads user data from a JSON file, encrypts passwords, and inserts data into the database.
 */
async function loadInitialData() {
  // Read user data from a JSON file
  const terrorData = JSON.parse(fs.readFileSync("./Data/globalterrorismdb_0718dist.json", "utf8"));

  // Check if the database is empty
  if ((await Terror.countDocuments()) === 0) {
    // Encrypt passwords before inserting into the database
    const encryptedUserData = await encryptPasswords(terrorData);
    await Terror.insertMany(encryptedUserData);
    console.log("Initial users have been added to the database.");
  } else {
    console.log("Users already exist in the database.");
  }
}

export default loadInitialData;
