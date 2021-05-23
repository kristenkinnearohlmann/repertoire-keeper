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

    // compositions need to be rendered as composition objects?

    renderPerformanceData() {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");

        h3.innerText = this.performanceYear;
        div.appendChild(h3);

        div.classList.add("detail-container-item");
        return div;
    }
}