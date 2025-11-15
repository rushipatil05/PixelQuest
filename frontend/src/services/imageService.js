export async function searchImages(query) {
  const response = await fetch(`https://pixelquest-e8ma.onrender.com/api/search?q=${encodeURIComponent(query)}`);

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  const data = await response.json();
  return data.hits || [];
}
