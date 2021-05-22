const BASE_URL = "http://localhost:3000";
const orgNames = document.getElementById("org-names");

// structure page for use
const init = () => {
    getOrgNames();
};


const getOrgNames = () => {
    fetch(`${BASE_URL}/organizations`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (const org of data) {
                const { name, id } = org;
                const option = document.createElement("option");
                option.text = name;
                option.value = id;
                orgNames.add(option);
            }
        })
};

// load page
init();

// const ORGS_URL = `${BASE_URL}organizations`;

// document.addEventListener("DOMContentLoaded",function(){
//     let p = document.createElement('p');
//     p.innerText = "Information for organization's performances will appear here.";
//     document.getElementById("main-msg").appendChild(p);
//     listOrgs();
// });

// function listOrgs() {
//     return fetch(ORGS_URL)
//         .then(response => {
//             return response.json();
//         })
//         .then(orgs => {
//             Organization.createOrgList(orgs);
//         });
// };