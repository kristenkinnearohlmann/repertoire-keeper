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
        div.appendChild(this.buildAddCompositionForm());

        return div;
    }

    buildCompositionList() {
        const div = document.createElement("div");
        const ul = document.createElement("ul");

        ul.id = `perf-${this.performanceId}-comps`;
        for (let comp of this.getPerformanceCompositions()) {
            ul.appendChild(comp.renderPerformanceCompositionListItem());
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
        btn.id = `btn-add-perf-${this.performanceId}`;
        btn.classList.add("main-body-button");
        btn.classList.add("display-none");
        btn.addEventListener('click',addPerformanceComposition);

        return btn;
    }

    buildCancelButton() {
        const btn = document.createElement("button");

        btn.innerText = "Cancel";
        btn.id = `btn-cancel-perf-${this.performanceId}`;
        btn.classList.add("main-body-button");
        btn.classList.add("display-none");
        btn.addEventListener('click',cancelEditPerformance);

        return btn;
    }

    buildAddCompositionForm() {
        const div = document.createElement("div");
        const form = document.createElement("form");

        form.innerHTML = `
        <p>Add composition to performance</p>
        <input type="hidden" name="performance_id" id="performance_id" value="${this.performanceId}">
        <input type="text" name="comp[name]" id="comp_name" placeholder="Composition Title"><br/>
        <input type="text" name="comp[composer_firstname]" id="comp_composer_firstname" placeholder="Composer First Name"></br>        
        <input type="text" name="comp[composer_lastname]" id="comp_composer_lastname" placeholder="Composer Last Name"></br>
        <input type="text" name="comp[year_composed]" id="comp_year_composed" placeholder="Year Composed"></br>
        <input type="Submit">
        `;
        div.appendChild(form);

        div.id = `perf-${this.performanceId}-add-comp`;
        div.classList.add("perf-add-comp");
        div.classList.add("display-none");
        div.addEventListener('submit',addCompositionToPerformance);

        return div;
    }

}