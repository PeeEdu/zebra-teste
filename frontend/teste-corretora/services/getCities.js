export default function getCities() {
const url = 'http://localhost:8080/';
return fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  })
  .catch(error => {
    console.error('Failed to fetch data');
    
    throw error;
  });
}