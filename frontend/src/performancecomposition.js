class PerformanceComposition {
    constructor(data) {
        this._performanceId = data.performance_id;
        this._compositionId = data.composition_id;
    }

    get performanceId() {
        return this._performanceId;
    }

    get compositionId() {
        return this._compositionId;
    }
}