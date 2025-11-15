export async function searchImages(query) {
  const response = await fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(query)}`);

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  const data = await response.json();
  return data.hits || [];
}
