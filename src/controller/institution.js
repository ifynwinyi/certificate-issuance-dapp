import { Institution } from '../models/institution';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { institutionStorage } from '../storage/institution';

export class InstitutionController {
    /**
     * ### InstitutionController createInstitution
     * @description Create an institution.
     * @param {*} data {owner: address ("0x..."), name: string}
     */
    async createInstitution(data) {
        return await RollupStateHandler.advanceWrapper(() => {
            const newInstitution = new Institution(data.owner, data.name);
            institutionStorage.addOne(newInstitution);

            return {
                ok: true,
                message: `Institution created successfully!`,
                data: newInstitution.getData(),
            };
        });
    }

    /**
     * ### InstitutionController getAllInstitutions
     * @description Get all institutions.
     */
    async getAllInstitutions() {
        return await RollupStateHandler.inspectWrapper(() =>
            institutionStorage.getAll()
        );
    }

    /**
     * ### InstitutionController getInstitutionById
     * @description Get an institution by given id.
     * @param {*} data institution id (UUID)
     */
    async getInstitutionById(data) {
        const institutionId = data[0];
        const storageRequest = institutionStorage.getOneById(institutionId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `Institution not found for id '${institutionId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: {
                details: storageRequest.getData(),
                certificates: storageRequest.getCertificates(),
            },
        }));
    }
}
