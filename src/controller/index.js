import { CertificateController } from './certificate';
import { InstitutionController } from './institution';

const institutionController = new InstitutionController();
const certificateController = new CertificateController();

export const controller = {
    createInstitution: institutionController.createInstitution,
    getAllInstitutions: institutionController.getAllInstitutions,
    getInstitutionById: institutionController.getInstitutionById,
    issueCertificate: certificateController.issueCertificate,
    verifyCertificate: certificateController.verifyCertificate,
};
