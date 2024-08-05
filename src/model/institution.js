import crypto from 'node:crypto';

export class Institution {
    id;
    owner;
    name;
    createdAt;
    certificates;

    /**
     * ### Institution model required data
     * @param {*} owner address (eg.: "0x...")
     * @param {*} name string
     */
    constructor(owner, name) {
        this.id = crypto.randomUUID();
        this.owner = owner;
        this.name = name;
        this.createdAt = Date.now();
        this.certificates = new Map();
    }

    /**
     * ### Institution getData
     * @description returns institution basic data.
     * @returns institution { 
            id: UUID, owner: 
            address (eg.: "0x..."), 
            name: string,
            createdAt: number 
        }
     */
    getData() {
        return {
            id: this.id,
            owner: this.owner,
            name: this.name,
            createdAt: this.createdAt,
        };
    }

    /**
     * ### Institution getCertificateById
     * @description return an institution certificate given an id.
     * @returns CertificateModel
     */
    getCertificateById(id) {
        return this.certificates.get(id);
    }

    /**
     * ### Institution getCertificates
     * @description return all certificates issued by the institution.
     * @returns CertificateModel[ ]
     */
    getCertificates() {
        return Array.from(this.certificates.values());
    }

    /**
     * ### Institution addCertificate
     * @description add a single certificate to the institution.
     * @param {*} certificate CertificateModel
     */
    addCertificate(certificate) {
        this.certificates.set(certificate.id, certificate);
    }
}
