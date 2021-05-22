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
        console.log(orgs);
        const select = document.querySelector('#org-names');

        for (const org of orgs) {
            const option = document.createElement("option");
            option.text = org.name;
            option.value = org.id;
            select.add(option);
        }
        select.addEventListener('change', event => {
            const org = Organization.getOrgInformation(event);
        })
    }

    static getOrgInformation(event) {
        const selected = event.target;

        fetch(`${ORGS_URL}/${selected.value}`)
            .then(response => {
                return response.json();
            })
            .then(object => {
                console.log(object);
                const org = new Organization(object.id, object.name, object.org_type, object.year_founded, object.url, object.org_descr)
                org.sayName();
                return org;
            })
            .catch(message => {
                console.log(message);
            })
    }

    sayName() {
        console.log(`My name is ${this._name}`);
    }
}