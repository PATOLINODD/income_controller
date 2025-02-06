

export class ValidObj {

    /**
     * Method returns true if the obj has one empty field or 
     * false if the obj does not have empty field.
     * @param obj 
     * @returns 
     */
    static hasEmptyField(obj: Object): boolean {
        if (obj == null) throw new Error('Object cannot be null');
        let isEmpty = false;
        for (let i in obj) {
            if (i == '') isEmpty = true;
        }

        return isEmpty;
    }

    /**
     * 
     * @param obj Method returns true if the obj is totally empty or
     * false if the obj is not totally empty.
     * @returns 
     */
    static isObjEmptyOrNull(obj: Object): boolean {
        if (obj == null) return true;
        let isEmpty = true;
        for (let i in obj) {
            if (i != '') isEmpty = false;
        }
        return isEmpty;
    }
}