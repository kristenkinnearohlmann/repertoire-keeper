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
        const btn = document.createElement("button");
        const subDiv = document.createElement("div")
        const ul = document.createElement("ul");

        h3.innerHTML = this.performanceYear;
        div.appendChild(h3);

        // subDiv.innerHTML = `<ul>${this.getPerformanceCompositions().map(comp => {
        //     return `<li data-comp-id="${comp.compositionId}"><button id='btn-comp-${comp.compositionId}'>X</button>${comp.composerLastName}: ${comp.compositionName}</li>`;
        // }).join("")}</ul>`;

        
        // subDiv.innerHTML = '<ul>';

        // subDiv.innerHTML = `<ul>${this.getPerformanceCompositions().map(comp => {
        //     return `<li data-comp-id="${comp.compositionId}"><button id='btn-comp-${comp.compositionId}'>X</button>${comp.composerLastName}: ${comp.compositionName}</li>`;
        // }).join("")}</ul>`;
// add event listener to ul for indiv X?

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
        subDiv.appendChild(ul);
        div.appendChild(subDiv);

        div.classList.add("detail-container-item");
        div.setAttribute('data-perf-id',this.performanceId);

        btn.innerText = "Edit performance";
        btn.id = `btn-edit-perf-${this.performanceId}`;
        btn.classList.add("main-body-button");
        btn.addEventListener('click',editPerformance);
        div.appendChild(btn);

        return div;
    }
}