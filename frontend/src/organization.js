class Organization {
    constructor(data) {
        this._id = data.id;
        this._name = data.name;
        this._orgType = data.org_type;
        this._yearFounded = data.year_founded;
        this._url = data.url;
        this._orgDescr = data.org_descr;
    }

    get orgDescr() {
        return this._orgDescr;
    }

    renderDescription() {
        // console.log(this.OrgDescr);
        // const p = document.createElement("p");
        // p.innerText = this.OrgDescr;
        // console.log(p);
        // return p;
    }

//     static displayOrgInformation(event) {
//         const selected = event.target;

//         fetch(`${ORGS_URL}/${selected.value}`)
//         .then(response => {
//             return response.json();
//         })
//         .then(object => {
//             console.log(object);
//             const div = document.querySelector("#main-msg");
//             let pDetail = document.createElement("p");
//             let pDescription = document.createElement("p");

//             // clear placeholder
//             div.innerHTML = "";

//             // add founding year and url
//             pDetail.innerHTML = `<strong>Founding year:</strong> ${object.year_founded}<br/><strong>URL:</strong> <a href="${object.url}" target="_blank">${object.url}</a>`;
//             div.appendChild(pDetail);

//             // add description
//             pDescription.innerHTML = `<strong>Description:</strong> ${object.org_descr}`;
//             div.appendChild(pDescription);
//         })
//         .catch(message => {
//             console.log(message);
//         })

//     }

}