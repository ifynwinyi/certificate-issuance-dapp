import { Certificate } from "../models/certificate";
import { RollupStateHandler } from "../shared/rollup-state-handler";
import { institutionStorage } from "../storage/institution";

export class CertificateController {
  /**
   * ### CertificateController issueCertificate
   * @description Issue a certificate from an institution.
   * @param {*} data {institution: UUID, recipient: string, course: string}
   */
  async issueCertificate(data) {
    if (!data.institution || !data.recipient || !data.course) {
      return await RollupStateHandler.handleReport({
        error: "Institution id, recipient, and course must be provided.",
      });
    }

    const institution = institutionStorage.getOneById(data.institution);

    if (!institution.id) {
      return await RollupStateHandler.handleReport({
        error: `Institution not found for id '${data.institution}'`,
      });
    }

    return await RollupStateHandler.advanceWrapper(() => {
      const newCertificate = new Certificate(data);
      institution.addCertificate(newCertificate);
      institutionStorage.updateOne(institution);

      return {
        ok: true,
        message: `Certificate issued successfully to recipient '${data.recipient}'!`,
        data: newCertificate.getData(),
      };
    });
  }

  /**
   * ### CertificateController verifyCertificate
   * @description Verify a certificate by id.
   * @param {*} data certificate id (UUID)
   */
  async verifyCertificate(data) {
    const certificateId = data[0];
    let verified = false;

    institutionStorage.getAll().forEach((institution) => {
      if (institution.getCertificateById(certificateId)) {
        verified = true;
      }
    });

    if (!verified) {
      return await RollupStateHandler.handleReport({
        error: `Certificate not found for id '${certificateId}'.`,
      });
    }

    return await RollupStateHandler.inspectWrapper(() => ({
      details: certificateId,
      verified: true,
    }));
  }
}
