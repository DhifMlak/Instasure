import * as mongoose from 'mongoose';
import { Document, Schema, Model, model } from 'mongoose';

export const sinistreSchema: Schema = new Schema({


    numero_sinistre: {
        type: 'String'
    },
    Date_entree_RGA: {
        type: 'String'
    },
    Immatriculation: {
        type: 'String'
    },
    VIN: {
        type: 'String'
    },
    Marque: {
        type: 'String'
    },
    Modele: {
        type: 'String'
    },
    DMC: {
        type: 'String'
    },
    Piece: {
        type: 'String'
    },
    Statut: {
        type: 'String'
    },
    Date_Reception_devis: {
        type: 'String'
    },
    Prix_Piece: {
        type: 'String'
    },
    TOT_reparation: {
        type: 'String'
    },
    Nombre_heure_reparation: {
        type: 'String'
    },
    TYPE_SINISTRE: {
        type: 'String'
    },
    annee_survenance: {
        type: 'String'
    },
    reglement_tot: {
        type: 'String'
    },
    reserve_tot: {
        type: 'String'
    },
    reglement_mat: {
        type: 'String'
    },
    reserve_mat: {
        type: 'String'
    },
    NUM_POLICE: {
        type: 'String'
    },
    nbre_sin_tot: {
        type: 'String'
    },
    nbre_sin_mat: {
        type: 'String'
    },
    MOIS: {
        type: 'String'
    },
    ANNEE: {
        type: 'String'
    },
    AGENCE: {
        type: 'String'
    },
    CODE_PRODUIT: {
        type: 'String'
    },
    PRODUIT: {
        type: 'String'
    },
    TYPE_PACK: {
        type: 'String'
    },
    TYPE_POLICE: {
        type: 'String'
    },
    DATE_EFFET_POLICE: {
        type: 'String'
    },
    DATE_EFFET: {
        type: 'String'
    },
    DATE_ECHEANCE: {
        type: 'String'
    },
    TACITE_RECONDUCTION: {
        type: 'String'
    },
    FRACTIONNEMENT: {
        type: 'String'
    },
    ETAT_POLICE: {
        type: 'String'
    },
    DATE_RESILIATION: {
        type: 'String'
    },
    TYPE_CLIENT: {
        type: 'String'
    },
    SOUS_TYPE_CLIENT: {
        type: 'String'
    },
    TYPE_IDENTIFIANT: {
        type: 'String'
    },
    SEXE: {
        type: 'String'
    },
    ETAT_CIVILE: {
        type: 'String'
    },
    PROFESSION: {
        type: 'String'
    },
    SITUATION_ASSURE: {
        type: 'String'
    },
    DATE_NAISSANCE: {
        type: 'String'
    },
    ADRESSE: {
        type: 'String'
    },
    GOUVERNORAT: {
        type: 'String'
    },
    VILLE: {
        type: 'String'
    },
    CODE_POSTAL_VILLE: {
        type: 'String'
    },
    NUM_PERMIS_SOUSC: {
        type: 'String'
    },
    DATE_OBTENT_PERMIS: {
        type: 'String'
    },
    PUISSANCE: {
        type: 'String'
    },
    ENERGIE: {
        type: 'String'
    },
    TYPE_IMMATRICULATION: {
        type: 'String'
    },
    USAGEE: {
        type: 'String'
    },
    CLASSE_BM: {
        type: 'String'
    },
    COEFFICIENT: {
        type: 'String'
    },
    DATE_M_CIRC: {
        type: 'String'
    },
    NBR_PLACE: {
        type: 'String'
    },
    VALEUR_NEUF: {
        type: 'String'
    },
    VALEUR_VENALE: {
        type: 'String'
    },
    PRIME_ANNUELLE: {
        type: 'String'
    },
    Nom_agence: {
        type: 'String'
    },
    USAGE_DU_VEHICULE: {
        type: 'String'
    },
    flag_Fraude: {
        type: 'String'
    },
    type_dossier_afin: {
        type: 'String'
    }


});
