const BASE_URL = "http://localhost:3000/";
const ORGS_URL = `${BASE_URL}/organizations`;

document.addEventListener("DOMContentLoaded",function(){
    let p = document.createElement('p');
    p.innerText = "Information for organization's performances will appear here.";
    document.getElementById("main-msg").appendChild(p);
    listOrgs();
});

function listOrgs() {
    return fetch(ORGS_URL)
        .then(response => {
            return response.json();
        })
        .then(orgs => {
            Organization.createOrgList(orgs);
        });
};