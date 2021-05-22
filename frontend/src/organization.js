class Organization {
    constructor(data) {
        this._id = data.id;
        this._name = data.name;
        this._orgType = data.org_type;
        this._yearFounded = data.year_founded;
        this._url = data.url;
        this._orgDescr = data.org_descr;
    }

    get orgId() {
        return this._id;
    }

    get orgName() {
        return this._name;
    }

    get orgType() {
        return this._orgType;
    }

    get yearFounded() {
        return this._yearFounded;
    }

    get url() {
        return this._url;
    }

    get orgDescr() {
        return this._orgDescr;
    }

    renderDescription() {
        const div = document.createElement("div");
        const pDetail = document.createElement("p");
        const pDescription = document.createElement("p");

        pDetail.innerHTML = `<p><em>Founded in ${this.yearFounded} | <a href="${this.url}" target=_"blank">${this.url}</a></em></p>`;
        pDescription.innerText = this.orgDescr;

        div.append(pDetail);
        div.appendChild(pDescription);
        div.id = ("org-descr-detail");

        return div;
    }

}