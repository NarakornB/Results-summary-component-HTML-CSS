const colorSummary = ['hsl(0, 100%, 67%)','hsl(39, 100%, 56%)','hsl(166, 100%, 37%)','hsl(234, 85%, 45%)']
const backgroundcolorSummary = ['hsl(0, 100%, 67%,0.05)','hsl(39, 100%, 56%,0.05)','hsl(166, 100%, 37%,0.05)','hsl(234, 85%, 45%,0.05)']

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const cardsContainer = document.getElementById('cards-container');
    data.forEach((item ,index) => {
       
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundColor = backgroundcolorSummary[index];
        // card.style.backgroundColor = colorSummary[index];
        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.alt = item.category;
        const category = document.createElement('h2');
        category.textContent = item.category;
        category.style.color = colorSummary[index];

        const row = document.createElement('div'); // create a container element
        row.classList.add('row'); 

        const score = document.createElement('h2');
        score.textContent = `${item.score} /100`;
        row.appendChild(icon);
        row.appendChild(category);
        row.appendChild(score);
        card.appendChild(row);
        cardsContainer.appendChild(card);
    
    });
  });