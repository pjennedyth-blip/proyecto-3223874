"#Optimiza funciones de conexi�n"

// services/api.js
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  console.error("API Error:", error.message);
}

export { fetchData };
