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
        const comps = this._compositions.map(item => {
            const comp = new Composition(item);
            return comp;
        });
        console.log(comps);
    }

    renderPerformanceData() {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");

        this.getPerformanceCompositions();
        // const comps = this.getPerformanceCompositions();
        // console.log(typeof comps);

        h3.innerHTML = this.performanceYear;
        div.appendChild(h3);

        div.innerHTML += '<p><a href="#">Edit performance</a></p>';

        div.classList.add("detail-container-item");
        return div;
    }
}