/*************************
 * CONFIG – EDIT HERE
 *************************/
const ARREST_RECORDS = [
  {
    id: "CASE-2026-001",
    name: "John D.",
    file_name: "john_d_case_001",
    arrest_date: "2026-01-10",
    charges: [
      "Burglary",
      "Trespassing"
    ],
    status: "Released",
    warrant: "Served",
    mugshot: "https://example.com/mugshots/john_d.jpg",
    notes: "Released on bond"
  },

  {
    id: "CASE-2026-002",
    name: "Alex R.",
    file_name: "alex_r_case_002",
    arrest_date: "2026-01-18",
    charges: [
      "Theft Under $5,000"
    ],
    status: "Released",
    warrant: "None",
    mugshot: "https://example.com/mugshots/alex_r.jpg",
    notes: "Charges pending review"
  }
];
/*************************
 * END CONFIG
 *************************/


/* RENDER LOGIC */
const container = document.getElementById("records");

ARREST_RECORDS.forEach(p => {
  const div = document.createElement("div");
  div.className = "record";

  div.innerHTML = `
    <img src="${p.mugshot}" alt="Mugshot">
    <h3>${p.name}</h3>
    <p><strong>File:</strong> ${p.file_name}</p>
    <p><strong>Case ID:</strong> ${p.id}</p>
    <p><strong>Arrest Date:</strong> ${p.arrest_date}</p>
    <p><strong>Status:</strong> ${p.status}</p>
    <p><strong>Warrant:</strong> ${p.warrant}</p>
    <p><strong>Charges:</strong> ${p.charges.join(", ")}</p>
    <p class="notes">${p.notes}</p>
  `;

  container.appendChild(div);
});
