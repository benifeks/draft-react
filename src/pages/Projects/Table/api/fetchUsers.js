// src/pages/Projects/Table/api/fetchUsers.js

export const fetchUsers = async (countUsers) => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${countUsers}&nat=us,gb,ca`
    );
    if (!response.ok) throw new Error("Failed to fetch users");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("fetchUsers error:", error);
    return [];
  }
};
