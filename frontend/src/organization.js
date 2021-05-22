class Organization {
    constructor(id, name, org_type) {
        this._id = id;
        this._name = name;
        this._org_type = org_type;
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
            console.log("Changed");
            const selected = event.target;
            console.log(selected.value);
            console.log(selected[selected.value].text);
        })
    }
}