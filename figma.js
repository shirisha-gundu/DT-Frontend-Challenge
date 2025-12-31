// JSON Data with valid icon image URLs
const data = [
  {
    id: 1,
    title: "AI Dashboard",
    description: "Monitor intelligent systems in real-time.",
    image: "https://www.frontiersin.org/files/Articles/922718/fpubh-10-922718-HTML-r1/image_m/fpubh-10-922718-g001.jpg"
  },
  {
    id: 2,
    title: "Analytics Tool",
    description: "Visualize deep insights from data.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMk0StmLZ-fHAsP84Jy-4MCnOEBZM13NxjA&s"
  },
  {
    id: 3,
    title: "Automation Suite",
    description: "Streamline workflows efficiently.",
    image: "https://gdcitsolutions.com/wp-content/uploads/Steamlined-Workflows.jpg"
  }
];

// Select container
const container = document.getElementById("cardContainer");

// Render cards
function renderCards(items) {
  container.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="card-icon" />
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <button onclick="handleClick(${item.id})">View More</button>
    `;

    container.appendChild(card);
  });
}

// Button click handler
function handleClick(id) {
  const selectedItem = data.find(item => item.id === id);
  alert(`You clicked on ${selectedItem.title}`);
}

// Initial render
renderCards(data);
