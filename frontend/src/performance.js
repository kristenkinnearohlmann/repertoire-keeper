class Performance {
    constructor(data) {
        this._id = data.id;
        this._performanceYear = data.performance_year;
        this._orgId = data.organization.id;
        this._orgName = data.organization.name;
        this._organization = data.organization;
        this._compositions = data.compositions;
    }

    get performanceYear() {
        return this._performanceYear;
    }

    // compositions need to be rendered as composition objects
}