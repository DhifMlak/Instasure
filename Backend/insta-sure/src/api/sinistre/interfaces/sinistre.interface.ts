import { Document } from 'mongoose';

export interface Sinistre extends Document {




    numero_sinistre?: string;
    Date_entree_RGA?: string;
    Immatriculation?: string;
    VIN?: string;
    Marque?: string;
    Modele?: string;
    DMC?: string;
    Piece?: string;
    Statut?: string;
    Date_Reception_devis?: string;
    Prix_Piece?: string;
    TOT_reparation?: string;
    Nombre_heure_reparation?: string;
    TYPE_SINISTRE?: string;
    annee_survenance?: string;
    reglement_tot?: string;
    reserve_tot?: string;
    reglement_mat?: string;
    reserve_mat?: string;
    NUM_POLICE?: string;
    nbre_sin_tot?: string;
    nbre_sin_mat?: string;
    MOIS?: string;
    ANNEE?: string;
    AGENCE?: string;
    CODE_PRODUIT?: string;
    PRODUIT?: string;
    TYPE_PACK?: string;
    TYPE_POLICE?: string;
    DATE_EFFET_POLICE?: string;
    DATE_EFFET?: string;
    DATE_ECHEANCE?: string;
    TACITE_RECONDUCTION?: string;
    FRACTIONNEMENT?: string;
    ETAT_POLICE?: string;
    DATE_RESILIATION?: string;
    TYPE_CLIENT?: string;
    SOUS_TYPE_CLIENT?: string;
    TYPE_IDENTIFIANT?: string;
    SEXE?: string;
    ETAT_CIVILE?: string;
    PROFESSION?: string;
    SITUATION_ASSURE?: string;
    DATE_NAISSANCE?: string;
    ADRESSE?: string;
    GOUVERNORAT?: string;
    VILLE?: string;
    CODE_POSTAL_VILLE?: string;
    NUM_PERMIS_SOUSC?: string;
    DATE_OBTENT_PERMIS?: string;
    PUISSANCE?: string;
    ENERGIE?: string;
    TYPE_IMMATRICULATION?: string;
    USAGEE?: string;
    CLASSE_BM?: string;
    COEFFICIENT?: string;
    DATE_M_CIRC?: string;
    NBR_PLACE?: string;
    VALEUR_NEUF?: string;
    VALEUR_VENALE?: string;
    PRIME_ANNUELLE?: string;
    Nom_agence?: string;
    USAGE_DU_VEHICULE?: string;
    flag_Fraude?: string;
    type_dossier_afin?: string;





}