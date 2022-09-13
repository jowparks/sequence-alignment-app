/* tslint:disable */
/* eslint-disable */
/**
 * Alignment API
 * Django alignment PAI
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Genome
 */
export interface Genome {
    /**
     * 
     * @type {number}
     * @memberof Genome
     */
    readonly id: number;
    /**
     * e.g. NC_000852
     * @type {string}
     * @memberof Genome
     */
    accession: string;
}

/**
 * Check if a given object implements the Genome interface.
 */
export function instanceOfGenome(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "accession" in value;

    return isInstance;
}

export function GenomeFromJSON(json: any): Genome {
    return GenomeFromJSONTyped(json, false);
}

export function GenomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Genome {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'accession': json['accession'],
    };
}

export function GenomeToJSON(value?: Genome | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accession': value.accession,
    };
}

