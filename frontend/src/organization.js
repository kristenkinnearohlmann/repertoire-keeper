class Organization {
    constructor(id, name, org_type, year_founded, url, org_descr) {
        this._id = id;
        this._name = name;
        this._org_type = org_type;
        this._year_founded = year_founded;
        this._url = url;
        this._org_descr = org_descr;
    }

    static createOrgList(orgs) {
        const select = document.querySelector('#org-names');

        for (const org of orgs) {
            const option = document.createElement("option");
            option.text = org.name;
            option.value = org.id;
            select.add(option);
        }
        select.addEventListener('change', event => {
            Organization.displayOrgInformation(event);
        })
    }

    static displayOrgInformation(event) {
        const selected = event.target;

        fetch(`${ORGS_URL}/${selected.value}`)
            .then(response => {
                return response.json();
            })
            .then(object => {
                console.log(object);

                const div = document.querySelector("#main-msg");
                let pDetail = document.createElement("p");
                let pDescription = document.createElement("p");

                // clear placeholder
                div.innerHTML = "";

                // add founding year and url
                pDetail.innerHTML = `<strong>Founding year:</strong> ${object.year_founded}<br/><strong>URL:</strong> <a href="${object.url}" target="_blank">${object.url}</a>`;
                div.appendChild(pDetail);

                // add description
                pDescription.innerHTML = `<strong>Description:</strong> ${object.org_descr}`;
                div.appendChild(pDescription);
            })
            .catch(message => {
                console.log(message);
            })
    }

}