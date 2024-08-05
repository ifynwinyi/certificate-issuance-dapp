export class InstitutionStorage {
    institutions;

    constructor() {
        this.institutions = new Map();
    }

    /**
     * ### InstitutionStorage getAll
     * @description get all stored institutions.
     * @returns {*} list InstitutionModel[ ]
     */
    getAll() {
        return Array.from(this.institutions.values());
    }

    /**
     * ### InstitutionStorage addOne
     * @description store a single institution.
     * @param {*} institution InstitutionModel
     */
    addOne(institution) {
        this.institutions.set(institution.id, institution);
    }

    /**
     * ### InstitutionStorage getOneById
     * @description get a single institution given an id.
     * @param {*} id UUID
     * @returns InstitutionModel | undefined (not found)
     */
    getOneById(id) {
        return this.institutions.get(id);
    }

    /**
     * ### InstitutionStorage updateOne
     * @description update a single institution.
     * @param {*} institution InstitutionModel
     */
    updateOne(institution) {
        this.institutions.set(institution.id, institution);
    }
}

export const institutionStorage = new InstitutionStorage();
