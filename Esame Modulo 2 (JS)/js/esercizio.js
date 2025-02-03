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

function searchJob(title, location) {
  let titleVar = title.toLowerCase();
  let locationVar = location.toLowerCase();

  let counter = 0;
  let results = [];

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    let jobTitle = job.title.toLowerCase();
    let jobLocation = job.location.toLowerCase();

    if (
      job.title.toLowerCase().includes(titleVar) &&
      job.location.toLowerCase().includes(locationVar)
    ) {
      results.push(job);
      counter++;
    } else {
      /* console.log("Not Found"); */
    }
  }
  const resultObject = {
    result: results,
    count: counter,
  };

  return resultObject;
}

const searchBtn = document.querySelector("#btn");
const containerDiv = document.querySelector(".container");
const result = document.querySelector(".result");
const unOrderedList = document.createElement("ul");
unOrderedList.setAttribute("class", "ulStyle");

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  result.innerHTML = "";
  unOrderedList.innerHTML = "";

  const jobInput = document.querySelector("#job-title").value;
  const locationInput = document.querySelector("#job-location").value;

  const jobFunction = searchJob(jobInput, locationInput);

  if (jobFunction.result.length > 0) {
    for (let i = 0; i < jobFunction.result.length; i++) {
      let job = jobFunction.result[i];
      let li = document.createElement("li");
      li.innerText = `${job.title} - ${job.location}`;
      unOrderedList.appendChild(li);
    }
  } else {
    result.innerHTML = " No results";
  }
  result.appendChild(unOrderedList);
});
