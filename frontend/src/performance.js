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

        h3.innerHTML = this.performanceYear;
        div.appendChild(h3);

        subDiv.innerHTML = `<ul>${this.getPerformanceCompositions().map(comp => {
            return `<li data-comp-id="${comp.compositionId}"><button id='btn-comp-${comp.compositionId}'>X</button>${comp.composerLastName}: ${comp.compositionName}</li>`;
        }).join("")}</ul>`;
        div.appendChild(subDiv);

        div.classList.add("detail-container-item");
        div.setAttribute('data-perf-id',this.performanceId);

        btn.innerText = "Edit performance";
        btn.id = `btn-perf-${this.performanceId}`;
        // btn.setAttribute('data-btn-perf-id',this.performanceId);
        btn.addEventListener('click',editPerformance);
        div.appendChild(btn);

        return div;
    }
}