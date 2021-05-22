class Composition {
    constructor(data) {
        this._name = data.name;
        this._composerLastName = data.composer_lastname;
        this._composerFirstName = data.composer_firstname;
        this._yearComposed = data.year_composed;
    }

    get compositionName() {
        return this._name;
    }

    get yearComposed() {
        return this._yearComposed;
    }

    get composerLastName() {
        return this._composerLastName;
    }

    get composerFirstName() {
        return this._composerLastName;
    }

    get composerFullName() {
        return `${this._composerFirstName} ${this._composerLastName}`;
    }

    get composerFullNameDirectoryStyle() {
        return `$${this._composerLastName}, {this._composerFirstName}`;
    }
}