
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];
/* Parte 1 */
/* Nella prima parte ho creato la funzione che, in base ai valori che le vengono dati, prende solo quei valori dall'array di oggetti e li aggiunge in un array vuoto e li stampa nella console*/

/* IMPORTANTE */

/* Per verificare il funzionamento della prima parte dell'esercizio bisogna mettere in un commento la seconda parte del codice */

function searchJob(title, location) {
  let titleVar = title.toLowerCase();
  let locationVar = location.toLowerCase();

  let counter = 0;
  let results = [];

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    let jobTitle = job.title.toLowerCase();
    let jobLocation = job.location.toLowerCase();

    if (jobTitle.includes(titleVar) && jobLocation.includes(locationVar)) {
      results.push(job);
      counter++;
    } else {
      console.log("Not Found");
    }
  }
  const resultObject = {
    result: results,
    count: counter,
  };
  console.log(resultObject);
  return resultObject;
}
const jobFunction = searchJob("dev", "us");

/* Parte 2 */
/* Nella seconda parte ho cercato di implementare la funzione, in modo che prenda i valori scritti dall'utente nell'input e li mostri all'utente stesso  */

function searchJob() {
  const jobInput = document.querySelector("#job-title");
  const locationInput = document.querySelector("#job-location");
  const searchBtn = document.querySelector("#btn");
  const containerDiv = document.querySelector(".container");
  const resultList = document.getElementById("result-list");

  let counter = 0;
  let results = [];

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    let jobTitle = job.title.toLowerCase();
    let jobLocation = job.location.toLowerCase();
    let currentJobInput = jobInput.value;
    let currentLocationInput = locationInput.value;

    if (
      jobTitle.includes(currentJobInput) ||
      jobLocation.includes(currentLocationInput)
    ) {
      let li = document.createElement("li");
      li.innerText = job.value;
      resultList.append(li);
    }
    console.log(resultList);
  }
}
