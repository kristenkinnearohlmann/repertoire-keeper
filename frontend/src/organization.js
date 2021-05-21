class Organization {
    static createOrgList(orgs) {
        console.log(orgs);
        const select = document.querySelector('#org-names');

        for (const org of orgs) {
            const option = document.createElement("option");
            option.text = org.name;
            select.add(option);
        }
        select.addEventListener('change', event => {
            console.log("Changed");
        })
    }
}