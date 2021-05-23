class Performance {
    constructor(data) {
        this._id = data.id;
        this._performanceYear = data.performance_year;
        this._organization = data.organization;
        this._compositions = data.compositions;
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

        console.log(this.performanceYear);
        console.log(this.getPerformanceCompositions());
        // const comps = this.getPerformanceCompositions();
        // console.log(typeof comps);

        h3.innerHTML = this.performanceYear;
        div.appendChild(h3);

        btn.innerText = "Edit performance";
        btn.addEventListener('click',editPerformance);
        div.appendChild(btn);

        div.classList.add("detail-container-item");

        return div;
    }
}