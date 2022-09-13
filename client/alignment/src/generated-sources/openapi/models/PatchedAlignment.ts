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
import type { StatusEnum } from './StatusEnum';
import {
    StatusEnumFromJSON,
    StatusEnumFromJSONTyped,
    StatusEnumToJSON,
} from './StatusEnum';

/**
 * 
 * @export
 * @interface PatchedAlignment
 */
export interface PatchedAlignment {
    /**
     * 
     * @type {number}
     * @memberof PatchedAlignment
     */
    readonly id?: number;
    /**
     * DNA sequence that you want to align
     * @type {string}
     * @memberof PatchedAlignment
     */
    searchSequence?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof PatchedAlignment
     */
    searchGenomes?: Array<number>;
    /**
     * 
     * @type {StatusEnum}
     * @memberof PatchedAlignment
     */
    status?: StatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof PatchedAlignment
     */
    matchedGenes?: Array<number>;
}

/**
 * Check if a given object implements the PatchedAlignment interface.
 */
export function instanceOfPatchedAlignment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedAlignmentFromJSON(json: any): PatchedAlignment {
    return PatchedAlignmentFromJSONTyped(json, false);
}

export function PatchedAlignmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedAlignment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'searchSequence': !exists(json, 'search_sequence') ? undefined : json['search_sequence'],
        'searchGenomes': !exists(json, 'search_genomes') ? undefined : json['search_genomes'],
        'status': !exists(json, 'status') ? undefined : StatusEnumFromJSON(json['status']),
        'matchedGenes': !exists(json, 'matched_genes') ? undefined : json['matched_genes'],
    };
}

export function PatchedAlignmentToJSON(value?: PatchedAlignment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'search_sequence': value.searchSequence,
        'search_genomes': value.searchGenomes,
        'status': StatusEnumToJSON(value.status),
        'matched_genes': value.matchedGenes,
    };
}

