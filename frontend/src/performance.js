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
        const btnEdit = document.createElement("button");
        const subDiv = document.createElement("div")

        h3.innerHTML = this.performanceYear;
        div.appendChild(h3);

        subDiv.appendChild(this.buildCompositionList());
        div.appendChild(subDiv);

        div.classList.add("detail-container-item");
        div.setAttribute('data-perf-id',this.performanceId);

        btnEdit.innerText = "Edit performance";
        btnEdit.id = `btn-edit-perf-${this.performanceId}`;
        btnEdit.classList.add("main-body-button");
        btnEdit.addEventListener('click',editPerformance);
        div.appendChild(btnEdit);

        return div;
    }

    buildCompositionList() {
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

        return ul;
    }
}