document.addEventListener("DOMContentLoaded", () => {
  fetch('./data.json')
    .then(response => {
      if (!response.ok) throw new Error("File not found or CORS issue");
      return response.json();
    })
    .then(data => {
      const tableBody = document.querySelector('#blogTable tbody');
      data.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${entry.name}</td>
          <td><a href="${entry.url}" target="_blank">${entry.url}</a></td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error loading JSON:', error));
});
