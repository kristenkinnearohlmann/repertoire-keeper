class Performance {
    constructor(data) {
        this._id = data.id;
        this._performanceYear = data.performance_year;
        this._organization = data.organization;
        this._compositions = this._compositions;
    }

    get performanceYear() {
        return this._performanceYear;
    }

    // organization needs to be rendered as organization object
    // compositions need to be rendered as composition objects
}