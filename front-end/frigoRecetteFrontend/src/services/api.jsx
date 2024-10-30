// src/services/api.js
import React from "react";
import axios from 'axios';

const API_URL = 'https://api.exemple.com';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la requête :", error);
    throw error;
  }
};
