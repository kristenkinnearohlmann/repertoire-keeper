class Performance {
    constructor(data) {
        this._id = data.id;
        this._performanceYear = data.performance_year;
        this._organization = data.organization;
        this._compositions = data.compositions;
    }

    get performanceId() {
        return this._id;
    }

    get performanceYear() {
        return this._performanceYear;
    }

    getPerformanceCompositions() {
        return this._compositions.map(comp => {
            return new Composition(comp);
        })
    }

    renderPerformanceData() {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");

        h3.innerHTML = this.performanceYear;
        div.appendChild(h3);

        div.appendChild(this.buildCompositionList());

        div.classList.add("detail-container-item");
        div.setAttribute('data-perf-id',this.performanceId);

        div.appendChild(this.buildEditButton());
        div.appendChild(this.buildAddButton());
        div.appendChild(this.buildCancelButton());

        return div;
    }

    buildCompositionList() {
        const div = document.createElement("div");
        const ul = document.createElement("ul");

        ul.id = `perf-${this.performanceId}-comps`;
        for (let comp of this.getPerformanceCompositions()) {
            const li = document.createElement("li");
            const btn = document.createElement("button");

            btn.id = `btn-comp-${comp.compositionId}`;
            btn.innerText = 'x';
            btn.classList.add("display-none");
            btn.classList.add("main-body-button");
            btn.classList.add("main-body-button-delete");

            li.setAttribute('data-comp-id',comp.compositionId);
            li.innerText = `${comp.composerLastName}: ${comp.compositionName}`;

            btn.addEventListener('click',deletePerformanceComposition);
            li.appendChild(btn);
            ul.appendChild(li);
        }

        div.appendChild(ul);
        return div;
    }

    buildEditButton() {
        const btn = document.createElement("button");

        btn.innerText = "Edit performance";
        btn.id = `btn-edit-perf-${this.performanceId}`;
        btn.classList.add("main-body-button");
        btn.addEventListener('click',editPerformance);

        return btn;
    }

    buildAddButton() {
        const btn = document.createElement("button");

        btn.innerText = "Add composition";
        btn.id = `btn-save-perf-${this.performanceId}`;
        btn.classList.add("main-body-button");
        btn.classList.add("display-none");
        btn.addEventListener('click',addPerformanceComposition);

        return btn;
    }

    buildCancelButton() {
        const btn = document.createElement("button");

        btn.innerText = "Cancel";
        btn.id = `btn-save-perf-${this.performanceId}`;
        btn.classList.add("main-body-button");
        btn.classList.add("display-none");
        btn.addEventListener('click',cancelEditPerformance);

        return btn;
    }

}