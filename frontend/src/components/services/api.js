const BASE_URL = 'https://example.com/api'; // Replace with your actual API endpoint

export async function fetchBlogs() {
  try {
    const response = await fetch(`${BASE_URL}/blogs`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}

export async function fetchBlogById(id) {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    throw error;
  }
}
