/*
  This file is intentionally small and readable.

  In a real project, this would eventually be split into:
  - api/
  - components/
  - state/
  - utils/

  For now, one file is better because it keeps the learning curve gentle.
*/

const moduleDefinitions = [
  {
    title: "NASA Astronomy Picture of the Day",
    source: "NASA",
    size: "wide",
    description:
      "A future hero module for one featured image, title, explanation, and media credits.",
    notes: [
      "Frontend would render image + metadata.",
      "Backend would call NASA APOD and reshape the response.",
      "Database could cache one daily record for faster loads."
    ]
  },
  {
    title: "ESA Mission Digest",
    source: "ESA",
    size: "medium",
    description:
      "A future panel for agency mission highlights, featured articles, or launch updates.",
    notes: [
      "Useful for showing multi-agency scope.",
      "Backend service could normalize ESA content into your house format.",
      "Database could store curated highlights you want to keep visible."
    ]
  },
  {
    title: "Mars Rover Gallery",
    source: "NASA",
    size: "medium",
    description:
      "A gallery slot for rover imagery, camera metadata, and mission day information.",
    notes: [
      "Good for practicing image grids.",
      "Can later grow into a detail modal or timeline viewer."
    ]
  },
  {
    title: "Near-Earth Object Monitor",
    source: "NASA",
    size: "wide",
    description:
      "A data-heavy module for date ranges, estimated diameters, and approach distances.",
    notes: [
      "This is a strong candidate for charts and tables.",
      "Helpful for learning how to render structured JSON cleanly."
    ]
  },
  {
    title: "Personal Portfolio Layer",
    source: "You",
    size: "full",
    description:
      "This is where your identity comes in: why you built this, what you learned, and what systems you designed.",
    notes: [
      "Add an about section, project goals, and technical decisions.",
      "This is what turns the site from demo to portfolio."
    ]
  }
];

const moduleGrid = document.querySelector("#module-grid");

renderModules(moduleDefinitions);

function renderModules(modules) {
  /*
    We build cards from data instead of hardcoding repeated HTML.
    That small habit becomes very valuable once real API data arrives.
  */
  moduleGrid.innerHTML = modules
    .map(
      (module) => `
        <article class="module-card" data-size="${module.size}">
          <div class="module-card-header">
            <div>
              <p class="section-label">Module</p>
              <h3>${module.title}</h3>
            </div>
            <span class="tag">${module.source}</span>
          </div>
          <p>${module.description}</p>
          <ul class="placeholder-list">
            ${module.notes.map((note) => `<li>${note}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

/*
  Example of how the frontend would eventually call your backend:

  async function loadApod() {
    const response = await fetch("http://localhost:3000/api/space/apod");
    const data = await response.json();
    console.log(data);
  }

  Notice the frontend talks to YOUR backend, not directly to NASA.
  That is the habit you want for a more professional full-stack structure.
*/
