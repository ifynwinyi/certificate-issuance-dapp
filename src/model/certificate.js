import crypto from 'node:crypto';

export class Certificate {
    id;
    institution;
    issuedAt;
    recipient;
    course;

    /**
     * ### Certificate model
     * @requires institution: UUID {*}
     * @requires recipient: string {*}
     * @requires course: string {*}
     */
    constructor({ institution, recipient, course }) {
        this.institution = institution;
        this.recipient = recipient;
        this.course = course;
        this.id = crypto.randomUUID();
        this.issuedAt = Date.now();
    }

    /**
     * ### Certificate getData
     * @description return certificate basic data.
     * @returns {*}
     * certificate {
     * id: UUID
     * institution: UUID
     * issuedAt: number
     * recipient: string
     * course: string
     * }
     */
    getData() {
        return {
            id: this.id,
            institution: this.institution,
            issuedAt: this.issuedAt,
            recipient: this.recipient,
            course: this.course,
        };
    }
}
