class Composition {
    constructor(data) {
        this._id = data.id;
        this._name = data.name;
        this._composerLastName = data.composer_lastname;
        this._composerFirstName = data.composer_firstname;
        this._yearComposed = data.year_composed;
        this.likes = 0;
    }

    get compositionId() {
        return this._id;
    }

    get compositionName() {
        return this._name;
    }

    get yearComposed() {
        return this._yearComposed;
    }

    get composerLastName() {
        return this._composerLastName;
    }

    get composerFirstName() {
        return this._composerLastName;
    }

    get composerFullName() {
        return `${this._composerFirstName} ${this._composerLastName}`;
    }

    get composerFullNameDirectoryStyle() {
        let fmtName;

        if (this._composerFirstName === "") {
            fmtName = this._composerLastName;
        } else {
            fmtName = `${this._composerLastName}, ${this._composerFirstName}`;
        }

        return fmtName;
    }

    moreLikes(event) {
        this.likes += 1;
        event.target.parentElement.querySelector("p").innerText = this.likes;
    }

    renderCompositionListItem() {
        const li = document.createElement("li");
        const btn = document.createElement("btn");
        const p = document.createElement("p");

        btn.id = `btn-like-comp-${this.compositionId}`;
        btn.innerText = 'Like';
        btn.classList.add("main-body-button");
        btn.classList.add("main-body-button-delete");
        btn.addEventListener('click',(e) => this.moreLikes(e));

        p.innerText = this.likes;

        li.innerText = `${this.composerFullNameDirectoryStyle}: ${this.compositionName} (${this.yearComposed})`;

        li.appendChild(btn);
        li.appendChild(p);

        return li;
    }

    renderPerformanceCompositionListItem() {
        const li = document.createElement("li");
        const btn = document.createElement("button");

        btn.id = `btn-dele-comp-${this.compositionId}`;
        btn.innerText = 'x';
        btn.classList.add("display-none");
        btn.classList.add("main-body-button");
        btn.classList.add("main-body-button-delete");

        li.setAttribute('data-comp-id',this.compositionId);
        li.innerText = `${this.composerLastName}: ${this.compositionName}`;

        btn.addEventListener('click',deletePerformanceComposition);
        li.appendChild(btn);

        return li;
    }
}