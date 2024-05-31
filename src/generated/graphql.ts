/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "addresses" */
export type Addresses = {
  __typename?: 'addresses';
  city: Scalars['String']['output'];
  county: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  line1: Scalars['String']['output'];
  line2?: Maybe<Scalars['String']['output']>;
  postcode: Scalars['String']['output'];
  region: Scalars['String']['output'];
};

/** aggregated selection of "addresses" */
export type Addresses_Aggregate = {
  __typename?: 'addresses_aggregate';
  aggregate?: Maybe<Addresses_Aggregate_Fields>;
  nodes: Array<Addresses>;
};

/** aggregate fields of "addresses" */
export type Addresses_Aggregate_Fields = {
  __typename?: 'addresses_aggregate_fields';
  avg?: Maybe<Addresses_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Addresses_Max_Fields>;
  min?: Maybe<Addresses_Min_Fields>;
  stddev?: Maybe<Addresses_Stddev_Fields>;
  stddev_pop?: Maybe<Addresses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Addresses_Stddev_Samp_Fields>;
  sum?: Maybe<Addresses_Sum_Fields>;
  var_pop?: Maybe<Addresses_Var_Pop_Fields>;
  var_samp?: Maybe<Addresses_Var_Samp_Fields>;
  variance?: Maybe<Addresses_Variance_Fields>;
};


/** aggregate fields of "addresses" */
export type Addresses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Addresses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Addresses_Avg_Fields = {
  __typename?: 'addresses_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  _and?: InputMaybe<Array<Addresses_Bool_Exp>>;
  _not?: InputMaybe<Addresses_Bool_Exp>;
  _or?: InputMaybe<Array<Addresses_Bool_Exp>>;
  city?: InputMaybe<String_Comparison_Exp>;
  county?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  line1?: InputMaybe<String_Comparison_Exp>;
  line2?: InputMaybe<String_Comparison_Exp>;
  postcode?: InputMaybe<String_Comparison_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "addresses" */
export enum Addresses_Constraint {
  /** unique or primary key constraint on columns "id" */
  AddressesPkey = 'addresses_pkey'
}

/** input type for incrementing numeric columns in table "addresses" */
export type Addresses_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "addresses" */
export type Addresses_Insert_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  county?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  __typename?: 'addresses_max_fields';
  city?: Maybe<Scalars['String']['output']>;
  county?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  __typename?: 'addresses_min_fields';
  city?: Maybe<Scalars['String']['output']>;
  county?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "addresses" */
export type Addresses_Mutation_Response = {
  __typename?: 'addresses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Addresses>;
};

/** input type for inserting object relation for remote table "addresses" */
export type Addresses_Obj_Rel_Insert_Input = {
  data: Addresses_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};

/** on_conflict condition type for table "addresses" */
export type Addresses_On_Conflict = {
  constraint: Addresses_Constraint;
  update_columns?: Array<Addresses_Update_Column>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

/** Ordering options when selecting data from "addresses". */
export type Addresses_Order_By = {
  city?: InputMaybe<Order_By>;
  county?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  line1?: InputMaybe<Order_By>;
  line2?: InputMaybe<Order_By>;
  postcode?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
};

/** primary key columns input for table: addresses */
export type Addresses_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "addresses" */
export enum Addresses_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  County = 'county',
  /** column name */
  Id = 'id',
  /** column name */
  Line1 = 'line1',
  /** column name */
  Line2 = 'line2',
  /** column name */
  Postcode = 'postcode',
  /** column name */
  Region = 'region'
}

/** input type for updating data in table "addresses" */
export type Addresses_Set_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  county?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Addresses_Stddev_Fields = {
  __typename?: 'addresses_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Addresses_Stddev_Pop_Fields = {
  __typename?: 'addresses_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Addresses_Stddev_Samp_Fields = {
  __typename?: 'addresses_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "addresses" */
export type Addresses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Addresses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Addresses_Stream_Cursor_Value_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  county?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Addresses_Sum_Fields = {
  __typename?: 'addresses_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "addresses" */
export enum Addresses_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  County = 'county',
  /** column name */
  Id = 'id',
  /** column name */
  Line1 = 'line1',
  /** column name */
  Line2 = 'line2',
  /** column name */
  Postcode = 'postcode',
  /** column name */
  Region = 'region'
}

export type Addresses_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Addresses_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Addresses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Addresses_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Addresses_Var_Pop_Fields = {
  __typename?: 'addresses_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Addresses_Var_Samp_Fields = {
  __typename?: 'addresses_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Addresses_Variance_Fields = {
  __typename?: 'addresses_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "nurses" */
  delete_nurses?: Maybe<Nurses_Mutation_Response>;
  /** delete single row from the table: "nurses" */
  delete_nurses_by_pk?: Maybe<Nurses>;
  /** delete data from the table: "patients" */
  delete_patients?: Maybe<Patients_Mutation_Response>;
  /** delete single row from the table: "patients" */
  delete_patients_by_pk?: Maybe<Patients>;
  /** delete data from the table: "pharmacies" */
  delete_pharmacies?: Maybe<Pharmacies_Mutation_Response>;
  /** delete single row from the table: "pharmacies" */
  delete_pharmacies_by_pk?: Maybe<Pharmacies>;
  /** delete data from the table: "visits" */
  delete_visits?: Maybe<Visits_Mutation_Response>;
  /** delete single row from the table: "visits" */
  delete_visits_by_pk?: Maybe<Visits>;
  /** insert data into the table: "addresses" */
  insert_addresses?: Maybe<Addresses_Mutation_Response>;
  /** insert a single row into the table: "addresses" */
  insert_addresses_one?: Maybe<Addresses>;
  /** insert data into the table: "nurses" */
  insert_nurses?: Maybe<Nurses_Mutation_Response>;
  /** insert a single row into the table: "nurses" */
  insert_nurses_one?: Maybe<Nurses>;
  /** insert data into the table: "patients" */
  insert_patients?: Maybe<Patients_Mutation_Response>;
  /** insert a single row into the table: "patients" */
  insert_patients_one?: Maybe<Patients>;
  /** insert data into the table: "pharmacies" */
  insert_pharmacies?: Maybe<Pharmacies_Mutation_Response>;
  /** insert a single row into the table: "pharmacies" */
  insert_pharmacies_one?: Maybe<Pharmacies>;
  /** insert data into the table: "visits" */
  insert_visits?: Maybe<Visits_Mutation_Response>;
  /** insert a single row into the table: "visits" */
  insert_visits_one?: Maybe<Visits>;
  /** update data of the table: "addresses" */
  update_addresses?: Maybe<Addresses_Mutation_Response>;
  /** update single row of the table: "addresses" */
  update_addresses_by_pk?: Maybe<Addresses>;
  /** update multiples rows of table: "addresses" */
  update_addresses_many?: Maybe<Array<Maybe<Addresses_Mutation_Response>>>;
  /** update data of the table: "nurses" */
  update_nurses?: Maybe<Nurses_Mutation_Response>;
  /** update single row of the table: "nurses" */
  update_nurses_by_pk?: Maybe<Nurses>;
  /** update multiples rows of table: "nurses" */
  update_nurses_many?: Maybe<Array<Maybe<Nurses_Mutation_Response>>>;
  /** update data of the table: "patients" */
  update_patients?: Maybe<Patients_Mutation_Response>;
  /** update single row of the table: "patients" */
  update_patients_by_pk?: Maybe<Patients>;
  /** update multiples rows of table: "patients" */
  update_patients_many?: Maybe<Array<Maybe<Patients_Mutation_Response>>>;
  /** update data of the table: "pharmacies" */
  update_pharmacies?: Maybe<Pharmacies_Mutation_Response>;
  /** update single row of the table: "pharmacies" */
  update_pharmacies_by_pk?: Maybe<Pharmacies>;
  /** update multiples rows of table: "pharmacies" */
  update_pharmacies_many?: Maybe<Array<Maybe<Pharmacies_Mutation_Response>>>;
  /** update data of the table: "visits" */
  update_visits?: Maybe<Visits_Mutation_Response>;
  /** update single row of the table: "visits" */
  update_visits_by_pk?: Maybe<Visits>;
  /** update multiples rows of table: "visits" */
  update_visits_many?: Maybe<Array<Maybe<Visits_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AddressesArgs = {
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addresses_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NursesArgs = {
  where: Nurses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nurses_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PatientsArgs = {
  where: Patients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Patients_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PharmaciesArgs = {
  where: Pharmacies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pharmacies_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_VisitsArgs = {
  where: Visits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Visits_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AddressesArgs = {
  objects: Array<Addresses_Insert_Input>;
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addresses_OneArgs = {
  object: Addresses_Insert_Input;
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NursesArgs = {
  objects: Array<Nurses_Insert_Input>;
  on_conflict?: InputMaybe<Nurses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nurses_OneArgs = {
  object: Nurses_Insert_Input;
  on_conflict?: InputMaybe<Nurses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PatientsArgs = {
  objects: Array<Patients_Insert_Input>;
  on_conflict?: InputMaybe<Patients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Patients_OneArgs = {
  object: Patients_Insert_Input;
  on_conflict?: InputMaybe<Patients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PharmaciesArgs = {
  objects: Array<Pharmacies_Insert_Input>;
  on_conflict?: InputMaybe<Pharmacies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pharmacies_OneArgs = {
  object: Pharmacies_Insert_Input;
  on_conflict?: InputMaybe<Pharmacies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VisitsArgs = {
  objects: Array<Visits_Insert_Input>;
  on_conflict?: InputMaybe<Visits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Visits_OneArgs = {
  object: Visits_Insert_Input;
  on_conflict?: InputMaybe<Visits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AddressesArgs = {
  _inc?: InputMaybe<Addresses_Inc_Input>;
  _set?: InputMaybe<Addresses_Set_Input>;
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addresses_By_PkArgs = {
  _inc?: InputMaybe<Addresses_Inc_Input>;
  _set?: InputMaybe<Addresses_Set_Input>;
  pk_columns: Addresses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Addresses_ManyArgs = {
  updates: Array<Addresses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NursesArgs = {
  _inc?: InputMaybe<Nurses_Inc_Input>;
  _set?: InputMaybe<Nurses_Set_Input>;
  where: Nurses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nurses_By_PkArgs = {
  _inc?: InputMaybe<Nurses_Inc_Input>;
  _set?: InputMaybe<Nurses_Set_Input>;
  pk_columns: Nurses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nurses_ManyArgs = {
  updates: Array<Nurses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PatientsArgs = {
  _inc?: InputMaybe<Patients_Inc_Input>;
  _set?: InputMaybe<Patients_Set_Input>;
  where: Patients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Patients_By_PkArgs = {
  _inc?: InputMaybe<Patients_Inc_Input>;
  _set?: InputMaybe<Patients_Set_Input>;
  pk_columns: Patients_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Patients_ManyArgs = {
  updates: Array<Patients_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PharmaciesArgs = {
  _inc?: InputMaybe<Pharmacies_Inc_Input>;
  _set?: InputMaybe<Pharmacies_Set_Input>;
  where: Pharmacies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pharmacies_By_PkArgs = {
  _inc?: InputMaybe<Pharmacies_Inc_Input>;
  _set?: InputMaybe<Pharmacies_Set_Input>;
  pk_columns: Pharmacies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pharmacies_ManyArgs = {
  updates: Array<Pharmacies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VisitsArgs = {
  _inc?: InputMaybe<Visits_Inc_Input>;
  _set?: InputMaybe<Visits_Set_Input>;
  where: Visits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Visits_By_PkArgs = {
  _inc?: InputMaybe<Visits_Inc_Input>;
  _set?: InputMaybe<Visits_Set_Input>;
  pk_columns: Visits_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Visits_ManyArgs = {
  updates: Array<Visits_Updates>;
};

/** columns and relationships of "nurses" */
export type Nurses = {
  __typename?: 'nurses';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

/** aggregated selection of "nurses" */
export type Nurses_Aggregate = {
  __typename?: 'nurses_aggregate';
  aggregate?: Maybe<Nurses_Aggregate_Fields>;
  nodes: Array<Nurses>;
};

/** aggregate fields of "nurses" */
export type Nurses_Aggregate_Fields = {
  __typename?: 'nurses_aggregate_fields';
  avg?: Maybe<Nurses_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nurses_Max_Fields>;
  min?: Maybe<Nurses_Min_Fields>;
  stddev?: Maybe<Nurses_Stddev_Fields>;
  stddev_pop?: Maybe<Nurses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nurses_Stddev_Samp_Fields>;
  sum?: Maybe<Nurses_Sum_Fields>;
  var_pop?: Maybe<Nurses_Var_Pop_Fields>;
  var_samp?: Maybe<Nurses_Var_Samp_Fields>;
  variance?: Maybe<Nurses_Variance_Fields>;
};


/** aggregate fields of "nurses" */
export type Nurses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nurses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nurses_Avg_Fields = {
  __typename?: 'nurses_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nurses". All fields are combined with a logical 'AND'. */
export type Nurses_Bool_Exp = {
  _and?: InputMaybe<Array<Nurses_Bool_Exp>>;
  _not?: InputMaybe<Nurses_Bool_Exp>;
  _or?: InputMaybe<Array<Nurses_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nurses" */
export enum Nurses_Constraint {
  /** unique or primary key constraint on columns "id" */
  NursesPkey = 'nurses_pkey'
}

/** input type for incrementing numeric columns in table "nurses" */
export type Nurses_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nurses" */
export type Nurses_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Nurses_Max_Fields = {
  __typename?: 'nurses_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Nurses_Min_Fields = {
  __typename?: 'nurses_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "nurses" */
export type Nurses_Mutation_Response = {
  __typename?: 'nurses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nurses>;
};

/** input type for inserting object relation for remote table "nurses" */
export type Nurses_Obj_Rel_Insert_Input = {
  data: Nurses_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nurses_On_Conflict>;
};

/** on_conflict condition type for table "nurses" */
export type Nurses_On_Conflict = {
  constraint: Nurses_Constraint;
  update_columns?: Array<Nurses_Update_Column>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};

/** Ordering options when selecting data from "nurses". */
export type Nurses_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nurses */
export type Nurses_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "nurses" */
export enum Nurses_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

/** input type for updating data in table "nurses" */
export type Nurses_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Nurses_Stddev_Fields = {
  __typename?: 'nurses_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nurses_Stddev_Pop_Fields = {
  __typename?: 'nurses_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nurses_Stddev_Samp_Fields = {
  __typename?: 'nurses_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nurses" */
export type Nurses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nurses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nurses_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Nurses_Sum_Fields = {
  __typename?: 'nurses_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nurses" */
export enum Nurses_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

export type Nurses_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nurses_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nurses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nurses_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nurses_Var_Pop_Fields = {
  __typename?: 'nurses_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nurses_Var_Samp_Fields = {
  __typename?: 'nurses_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nurses_Variance_Fields = {
  __typename?: 'nurses_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "patients" */
export type Patients = {
  __typename?: 'patients';
  /** An object relationship */
  address: Addresses;
  address_id: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  /** An array relationship */
  visits: Array<Visits>;
  /** An aggregate relationship */
  visits_aggregate: Visits_Aggregate;
};


/** columns and relationships of "patients" */
export type PatientsVisitsArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};


/** columns and relationships of "patients" */
export type PatientsVisits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};

/** aggregated selection of "patients" */
export type Patients_Aggregate = {
  __typename?: 'patients_aggregate';
  aggregate?: Maybe<Patients_Aggregate_Fields>;
  nodes: Array<Patients>;
};

/** aggregate fields of "patients" */
export type Patients_Aggregate_Fields = {
  __typename?: 'patients_aggregate_fields';
  avg?: Maybe<Patients_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Patients_Max_Fields>;
  min?: Maybe<Patients_Min_Fields>;
  stddev?: Maybe<Patients_Stddev_Fields>;
  stddev_pop?: Maybe<Patients_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Patients_Stddev_Samp_Fields>;
  sum?: Maybe<Patients_Sum_Fields>;
  var_pop?: Maybe<Patients_Var_Pop_Fields>;
  var_samp?: Maybe<Patients_Var_Samp_Fields>;
  variance?: Maybe<Patients_Variance_Fields>;
};


/** aggregate fields of "patients" */
export type Patients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Patients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Patients_Avg_Fields = {
  __typename?: 'patients_avg_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "patients". All fields are combined with a logical 'AND'. */
export type Patients_Bool_Exp = {
  _and?: InputMaybe<Array<Patients_Bool_Exp>>;
  _not?: InputMaybe<Patients_Bool_Exp>;
  _or?: InputMaybe<Array<Patients_Bool_Exp>>;
  address?: InputMaybe<Addresses_Bool_Exp>;
  address_id?: InputMaybe<Int_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  visits?: InputMaybe<Visits_Bool_Exp>;
  visits_aggregate?: InputMaybe<Visits_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "patients" */
export enum Patients_Constraint {
  /** unique or primary key constraint on columns "id" */
  PatientsPkey = 'patients_pkey'
}

/** input type for incrementing numeric columns in table "patients" */
export type Patients_Inc_Input = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "patients" */
export type Patients_Insert_Input = {
  address?: InputMaybe<Addresses_Obj_Rel_Insert_Input>;
  address_id?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  visits?: InputMaybe<Visits_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Patients_Max_Fields = {
  __typename?: 'patients_max_fields';
  address_id?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Patients_Min_Fields = {
  __typename?: 'patients_min_fields';
  address_id?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "patients" */
export type Patients_Mutation_Response = {
  __typename?: 'patients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Patients>;
};

/** on_conflict condition type for table "patients" */
export type Patients_On_Conflict = {
  constraint: Patients_Constraint;
  update_columns?: Array<Patients_Update_Column>;
  where?: InputMaybe<Patients_Bool_Exp>;
};

/** Ordering options when selecting data from "patients". */
export type Patients_Order_By = {
  address?: InputMaybe<Addresses_Order_By>;
  address_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  visits_aggregate?: InputMaybe<Visits_Aggregate_Order_By>;
};

/** primary key columns input for table: patients */
export type Patients_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "patients" */
export enum Patients_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

/** input type for updating data in table "patients" */
export type Patients_Set_Input = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Patients_Stddev_Fields = {
  __typename?: 'patients_stddev_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Patients_Stddev_Pop_Fields = {
  __typename?: 'patients_stddev_pop_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Patients_Stddev_Samp_Fields = {
  __typename?: 'patients_stddev_samp_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "patients" */
export type Patients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Patients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Patients_Stream_Cursor_Value_Input = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Patients_Sum_Fields = {
  __typename?: 'patients_sum_fields';
  address_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "patients" */
export enum Patients_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

export type Patients_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Patients_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Patients_Set_Input>;
  /** filter the rows which have to be updated */
  where: Patients_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Patients_Var_Pop_Fields = {
  __typename?: 'patients_var_pop_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Patients_Var_Samp_Fields = {
  __typename?: 'patients_var_samp_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Patients_Variance_Fields = {
  __typename?: 'patients_variance_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "pharmacies" */
export type Pharmacies = {
  __typename?: 'pharmacies';
  address_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "pharmacies" */
export type Pharmacies_Aggregate = {
  __typename?: 'pharmacies_aggregate';
  aggregate?: Maybe<Pharmacies_Aggregate_Fields>;
  nodes: Array<Pharmacies>;
};

/** aggregate fields of "pharmacies" */
export type Pharmacies_Aggregate_Fields = {
  __typename?: 'pharmacies_aggregate_fields';
  avg?: Maybe<Pharmacies_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pharmacies_Max_Fields>;
  min?: Maybe<Pharmacies_Min_Fields>;
  stddev?: Maybe<Pharmacies_Stddev_Fields>;
  stddev_pop?: Maybe<Pharmacies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pharmacies_Stddev_Samp_Fields>;
  sum?: Maybe<Pharmacies_Sum_Fields>;
  var_pop?: Maybe<Pharmacies_Var_Pop_Fields>;
  var_samp?: Maybe<Pharmacies_Var_Samp_Fields>;
  variance?: Maybe<Pharmacies_Variance_Fields>;
};


/** aggregate fields of "pharmacies" */
export type Pharmacies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pharmacies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Pharmacies_Avg_Fields = {
  __typename?: 'pharmacies_avg_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pharmacies". All fields are combined with a logical 'AND'. */
export type Pharmacies_Bool_Exp = {
  _and?: InputMaybe<Array<Pharmacies_Bool_Exp>>;
  _not?: InputMaybe<Pharmacies_Bool_Exp>;
  _or?: InputMaybe<Array<Pharmacies_Bool_Exp>>;
  address_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "pharmacies" */
export enum Pharmacies_Constraint {
  /** unique or primary key constraint on columns "id" */
  PharmaciesPkey = 'pharmacies_pkey'
}

/** input type for incrementing numeric columns in table "pharmacies" */
export type Pharmacies_Inc_Input = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "pharmacies" */
export type Pharmacies_Insert_Input = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Pharmacies_Max_Fields = {
  __typename?: 'pharmacies_max_fields';
  address_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Pharmacies_Min_Fields = {
  __typename?: 'pharmacies_min_fields';
  address_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "pharmacies" */
export type Pharmacies_Mutation_Response = {
  __typename?: 'pharmacies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Pharmacies>;
};

/** on_conflict condition type for table "pharmacies" */
export type Pharmacies_On_Conflict = {
  constraint: Pharmacies_Constraint;
  update_columns?: Array<Pharmacies_Update_Column>;
  where?: InputMaybe<Pharmacies_Bool_Exp>;
};

/** Ordering options when selecting data from "pharmacies". */
export type Pharmacies_Order_By = {
  address_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pharmacies */
export type Pharmacies_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "pharmacies" */
export enum Pharmacies_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "pharmacies" */
export type Pharmacies_Set_Input = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Pharmacies_Stddev_Fields = {
  __typename?: 'pharmacies_stddev_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Pharmacies_Stddev_Pop_Fields = {
  __typename?: 'pharmacies_stddev_pop_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Pharmacies_Stddev_Samp_Fields = {
  __typename?: 'pharmacies_stddev_samp_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "pharmacies" */
export type Pharmacies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pharmacies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pharmacies_Stream_Cursor_Value_Input = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Pharmacies_Sum_Fields = {
  __typename?: 'pharmacies_sum_fields';
  address_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "pharmacies" */
export enum Pharmacies_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Pharmacies_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pharmacies_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pharmacies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pharmacies_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pharmacies_Var_Pop_Fields = {
  __typename?: 'pharmacies_var_pop_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Pharmacies_Var_Samp_Fields = {
  __typename?: 'pharmacies_var_samp_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Pharmacies_Variance_Fields = {
  __typename?: 'pharmacies_variance_fields';
  address_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "nurses" */
  nurses: Array<Nurses>;
  /** fetch aggregated fields from the table: "nurses" */
  nurses_aggregate: Nurses_Aggregate;
  /** fetch data from the table: "nurses" using primary key columns */
  nurses_by_pk?: Maybe<Nurses>;
  /** fetch data from the table: "patients" */
  patients: Array<Patients>;
  /** fetch aggregated fields from the table: "patients" */
  patients_aggregate: Patients_Aggregate;
  /** fetch data from the table: "patients" using primary key columns */
  patients_by_pk?: Maybe<Patients>;
  /** fetch data from the table: "pharmacies" */
  pharmacies: Array<Pharmacies>;
  /** fetch aggregated fields from the table: "pharmacies" */
  pharmacies_aggregate: Pharmacies_Aggregate;
  /** fetch data from the table: "pharmacies" using primary key columns */
  pharmacies_by_pk?: Maybe<Pharmacies>;
  /** An array relationship */
  visits: Array<Visits>;
  /** An aggregate relationship */
  visits_aggregate: Visits_Aggregate;
  /** fetch data from the table: "visits" using primary key columns */
  visits_by_pk?: Maybe<Visits>;
};


export type Query_RootAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootNursesArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


export type Query_RootNurses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


export type Query_RootNurses_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPatientsArgs = {
  distinct_on?: InputMaybe<Array<Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Patients_Order_By>>;
  where?: InputMaybe<Patients_Bool_Exp>;
};


export type Query_RootPatients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Patients_Order_By>>;
  where?: InputMaybe<Patients_Bool_Exp>;
};


export type Query_RootPatients_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPharmaciesArgs = {
  distinct_on?: InputMaybe<Array<Pharmacies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pharmacies_Order_By>>;
  where?: InputMaybe<Pharmacies_Bool_Exp>;
};


export type Query_RootPharmacies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pharmacies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pharmacies_Order_By>>;
  where?: InputMaybe<Pharmacies_Bool_Exp>;
};


export type Query_RootPharmacies_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootVisitsArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};


export type Query_RootVisits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};


export type Query_RootVisits_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table in a streaming manner: "addresses" */
  addresses_stream: Array<Addresses>;
  /** fetch data from the table: "nurses" */
  nurses: Array<Nurses>;
  /** fetch aggregated fields from the table: "nurses" */
  nurses_aggregate: Nurses_Aggregate;
  /** fetch data from the table: "nurses" using primary key columns */
  nurses_by_pk?: Maybe<Nurses>;
  /** fetch data from the table in a streaming manner: "nurses" */
  nurses_stream: Array<Nurses>;
  /** fetch data from the table: "patients" */
  patients: Array<Patients>;
  /** fetch aggregated fields from the table: "patients" */
  patients_aggregate: Patients_Aggregate;
  /** fetch data from the table: "patients" using primary key columns */
  patients_by_pk?: Maybe<Patients>;
  /** fetch data from the table in a streaming manner: "patients" */
  patients_stream: Array<Patients>;
  /** fetch data from the table: "pharmacies" */
  pharmacies: Array<Pharmacies>;
  /** fetch aggregated fields from the table: "pharmacies" */
  pharmacies_aggregate: Pharmacies_Aggregate;
  /** fetch data from the table: "pharmacies" using primary key columns */
  pharmacies_by_pk?: Maybe<Pharmacies>;
  /** fetch data from the table in a streaming manner: "pharmacies" */
  pharmacies_stream: Array<Pharmacies>;
  /** An array relationship */
  visits: Array<Visits>;
  /** An aggregate relationship */
  visits_aggregate: Visits_Aggregate;
  /** fetch data from the table: "visits" using primary key columns */
  visits_by_pk?: Maybe<Visits>;
  /** fetch data from the table in a streaming manner: "visits" */
  visits_stream: Array<Visits>;
};


export type Subscription_RootAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAddresses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Addresses_Stream_Cursor_Input>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Subscription_RootNursesArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


export type Subscription_RootNurses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


export type Subscription_RootNurses_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootNurses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nurses_Stream_Cursor_Input>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


export type Subscription_RootPatientsArgs = {
  distinct_on?: InputMaybe<Array<Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Patients_Order_By>>;
  where?: InputMaybe<Patients_Bool_Exp>;
};


export type Subscription_RootPatients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Patients_Order_By>>;
  where?: InputMaybe<Patients_Bool_Exp>;
};


export type Subscription_RootPatients_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPatients_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Patients_Stream_Cursor_Input>>;
  where?: InputMaybe<Patients_Bool_Exp>;
};


export type Subscription_RootPharmaciesArgs = {
  distinct_on?: InputMaybe<Array<Pharmacies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pharmacies_Order_By>>;
  where?: InputMaybe<Pharmacies_Bool_Exp>;
};


export type Subscription_RootPharmacies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pharmacies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pharmacies_Order_By>>;
  where?: InputMaybe<Pharmacies_Bool_Exp>;
};


export type Subscription_RootPharmacies_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPharmacies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pharmacies_Stream_Cursor_Input>>;
  where?: InputMaybe<Pharmacies_Bool_Exp>;
};


export type Subscription_RootVisitsArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};


export type Subscription_RootVisits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};


export type Subscription_RootVisits_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootVisits_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Visits_Stream_Cursor_Input>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "visits" */
export type Visits = {
  __typename?: 'visits';
  administration_location: Scalars['String']['output'];
  administration_time: Scalars['timestamptz']['output'];
  diastolic_pressure?: Maybe<Scalars['Int']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  heart_rate?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  medication: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nurse?: Maybe<Nurses>;
  nurse_id?: Maybe<Scalars['Int']['output']>;
  pain_level?: Maybe<Scalars['Int']['output']>;
  patient_id: Scalars['Int']['output'];
  pharmacy_id?: Maybe<Scalars['Int']['output']>;
  systolic_pressure?: Maybe<Scalars['Int']['output']>;
  tolerance?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "visits" */
export type Visits_Aggregate = {
  __typename?: 'visits_aggregate';
  aggregate?: Maybe<Visits_Aggregate_Fields>;
  nodes: Array<Visits>;
};

export type Visits_Aggregate_Bool_Exp = {
  count?: InputMaybe<Visits_Aggregate_Bool_Exp_Count>;
};

export type Visits_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Visits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Visits_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "visits" */
export type Visits_Aggregate_Fields = {
  __typename?: 'visits_aggregate_fields';
  avg?: Maybe<Visits_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Visits_Max_Fields>;
  min?: Maybe<Visits_Min_Fields>;
  stddev?: Maybe<Visits_Stddev_Fields>;
  stddev_pop?: Maybe<Visits_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Visits_Stddev_Samp_Fields>;
  sum?: Maybe<Visits_Sum_Fields>;
  var_pop?: Maybe<Visits_Var_Pop_Fields>;
  var_samp?: Maybe<Visits_Var_Samp_Fields>;
  variance?: Maybe<Visits_Variance_Fields>;
};


/** aggregate fields of "visits" */
export type Visits_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Visits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "visits" */
export type Visits_Aggregate_Order_By = {
  avg?: InputMaybe<Visits_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Visits_Max_Order_By>;
  min?: InputMaybe<Visits_Min_Order_By>;
  stddev?: InputMaybe<Visits_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Visits_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Visits_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Visits_Sum_Order_By>;
  var_pop?: InputMaybe<Visits_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Visits_Var_Samp_Order_By>;
  variance?: InputMaybe<Visits_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "visits" */
export type Visits_Arr_Rel_Insert_Input = {
  data: Array<Visits_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Visits_On_Conflict>;
};

/** aggregate avg on columns */
export type Visits_Avg_Fields = {
  __typename?: 'visits_avg_fields';
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  heart_rate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  nurse_id?: Maybe<Scalars['Float']['output']>;
  pain_level?: Maybe<Scalars['Float']['output']>;
  patient_id?: Maybe<Scalars['Float']['output']>;
  pharmacy_id?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "visits" */
export type Visits_Avg_Order_By = {
  diastolic_pressure?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  pain_level?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  pharmacy_id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "visits". All fields are combined with a logical 'AND'. */
export type Visits_Bool_Exp = {
  _and?: InputMaybe<Array<Visits_Bool_Exp>>;
  _not?: InputMaybe<Visits_Bool_Exp>;
  _or?: InputMaybe<Array<Visits_Bool_Exp>>;
  administration_location?: InputMaybe<String_Comparison_Exp>;
  administration_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  diastolic_pressure?: InputMaybe<Int_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  heart_rate?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  medication?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  nurse?: InputMaybe<Nurses_Bool_Exp>;
  nurse_id?: InputMaybe<Int_Comparison_Exp>;
  pain_level?: InputMaybe<Int_Comparison_Exp>;
  patient_id?: InputMaybe<Int_Comparison_Exp>;
  pharmacy_id?: InputMaybe<Int_Comparison_Exp>;
  systolic_pressure?: InputMaybe<Int_Comparison_Exp>;
  tolerance?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "visits" */
export enum Visits_Constraint {
  /** unique or primary key constraint on columns "id" */
  VisitsPkey = 'visits_pkey'
}

/** input type for incrementing numeric columns in table "visits" */
export type Visits_Inc_Input = {
  diastolic_pressure?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  heart_rate?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  nurse_id?: InputMaybe<Scalars['Int']['input']>;
  pain_level?: InputMaybe<Scalars['Int']['input']>;
  patient_id?: InputMaybe<Scalars['Int']['input']>;
  pharmacy_id?: InputMaybe<Scalars['Int']['input']>;
  systolic_pressure?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "visits" */
export type Visits_Insert_Input = {
  administration_location?: InputMaybe<Scalars['String']['input']>;
  administration_time?: InputMaybe<Scalars['timestamptz']['input']>;
  diastolic_pressure?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  heart_rate?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  medication?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  nurse?: InputMaybe<Nurses_Obj_Rel_Insert_Input>;
  nurse_id?: InputMaybe<Scalars['Int']['input']>;
  pain_level?: InputMaybe<Scalars['Int']['input']>;
  patient_id?: InputMaybe<Scalars['Int']['input']>;
  pharmacy_id?: InputMaybe<Scalars['Int']['input']>;
  systolic_pressure?: InputMaybe<Scalars['Int']['input']>;
  tolerance?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Visits_Max_Fields = {
  __typename?: 'visits_max_fields';
  administration_location?: Maybe<Scalars['String']['output']>;
  administration_time?: Maybe<Scalars['timestamptz']['output']>;
  diastolic_pressure?: Maybe<Scalars['Int']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  heart_rate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  medication?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  nurse_id?: Maybe<Scalars['Int']['output']>;
  pain_level?: Maybe<Scalars['Int']['output']>;
  patient_id?: Maybe<Scalars['Int']['output']>;
  pharmacy_id?: Maybe<Scalars['Int']['output']>;
  systolic_pressure?: Maybe<Scalars['Int']['output']>;
  tolerance?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "visits" */
export type Visits_Max_Order_By = {
  administration_location?: InputMaybe<Order_By>;
  administration_time?: InputMaybe<Order_By>;
  diastolic_pressure?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  medication?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  pain_level?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  pharmacy_id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
  tolerance?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Visits_Min_Fields = {
  __typename?: 'visits_min_fields';
  administration_location?: Maybe<Scalars['String']['output']>;
  administration_time?: Maybe<Scalars['timestamptz']['output']>;
  diastolic_pressure?: Maybe<Scalars['Int']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  heart_rate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  medication?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  nurse_id?: Maybe<Scalars['Int']['output']>;
  pain_level?: Maybe<Scalars['Int']['output']>;
  patient_id?: Maybe<Scalars['Int']['output']>;
  pharmacy_id?: Maybe<Scalars['Int']['output']>;
  systolic_pressure?: Maybe<Scalars['Int']['output']>;
  tolerance?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "visits" */
export type Visits_Min_Order_By = {
  administration_location?: InputMaybe<Order_By>;
  administration_time?: InputMaybe<Order_By>;
  diastolic_pressure?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  medication?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  pain_level?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  pharmacy_id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
  tolerance?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "visits" */
export type Visits_Mutation_Response = {
  __typename?: 'visits_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Visits>;
};

/** on_conflict condition type for table "visits" */
export type Visits_On_Conflict = {
  constraint: Visits_Constraint;
  update_columns?: Array<Visits_Update_Column>;
  where?: InputMaybe<Visits_Bool_Exp>;
};

/** Ordering options when selecting data from "visits". */
export type Visits_Order_By = {
  administration_location?: InputMaybe<Order_By>;
  administration_time?: InputMaybe<Order_By>;
  diastolic_pressure?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  medication?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  nurse?: InputMaybe<Nurses_Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  pain_level?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  pharmacy_id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
  tolerance?: InputMaybe<Order_By>;
};

/** primary key columns input for table: visits */
export type Visits_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "visits" */
export enum Visits_Select_Column {
  /** column name */
  AdministrationLocation = 'administration_location',
  /** column name */
  AdministrationTime = 'administration_time',
  /** column name */
  DiastolicPressure = 'diastolic_pressure',
  /** column name */
  Duration = 'duration',
  /** column name */
  HeartRate = 'heart_rate',
  /** column name */
  Id = 'id',
  /** column name */
  Medication = 'medication',
  /** column name */
  Note = 'note',
  /** column name */
  NurseId = 'nurse_id',
  /** column name */
  PainLevel = 'pain_level',
  /** column name */
  PatientId = 'patient_id',
  /** column name */
  PharmacyId = 'pharmacy_id',
  /** column name */
  SystolicPressure = 'systolic_pressure',
  /** column name */
  Tolerance = 'tolerance'
}

/** input type for updating data in table "visits" */
export type Visits_Set_Input = {
  administration_location?: InputMaybe<Scalars['String']['input']>;
  administration_time?: InputMaybe<Scalars['timestamptz']['input']>;
  diastolic_pressure?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  heart_rate?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  medication?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  nurse_id?: InputMaybe<Scalars['Int']['input']>;
  pain_level?: InputMaybe<Scalars['Int']['input']>;
  patient_id?: InputMaybe<Scalars['Int']['input']>;
  pharmacy_id?: InputMaybe<Scalars['Int']['input']>;
  systolic_pressure?: InputMaybe<Scalars['Int']['input']>;
  tolerance?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Visits_Stddev_Fields = {
  __typename?: 'visits_stddev_fields';
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  heart_rate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  nurse_id?: Maybe<Scalars['Float']['output']>;
  pain_level?: Maybe<Scalars['Float']['output']>;
  patient_id?: Maybe<Scalars['Float']['output']>;
  pharmacy_id?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "visits" */
export type Visits_Stddev_Order_By = {
  diastolic_pressure?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  pain_level?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  pharmacy_id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Visits_Stddev_Pop_Fields = {
  __typename?: 'visits_stddev_pop_fields';
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  heart_rate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  nurse_id?: Maybe<Scalars['Float']['output']>;
  pain_level?: Maybe<Scalars['Float']['output']>;
  patient_id?: Maybe<Scalars['Float']['output']>;
  pharmacy_id?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "visits" */
export type Visits_Stddev_Pop_Order_By = {
  diastolic_pressure?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  pain_level?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  pharmacy_id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Visits_Stddev_Samp_Fields = {
  __typename?: 'visits_stddev_samp_fields';
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  heart_rate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  nurse_id?: Maybe<Scalars['Float']['output']>;
  pain_level?: Maybe<Scalars['Float']['output']>;
  patient_id?: Maybe<Scalars['Float']['output']>;
  pharmacy_id?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "visits" */
export type Visits_Stddev_Samp_Order_By = {
  diastolic_pressure?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  pain_level?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  pharmacy_id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "visits" */
export type Visits_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Visits_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Visits_Stream_Cursor_Value_Input = {
  administration_location?: InputMaybe<Scalars['String']['input']>;
  administration_time?: InputMaybe<Scalars['timestamptz']['input']>;
  diastolic_pressure?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  heart_rate?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  medication?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  nurse_id?: InputMaybe<Scalars['Int']['input']>;
  pain_level?: InputMaybe<Scalars['Int']['input']>;
  patient_id?: InputMaybe<Scalars['Int']['input']>;
  pharmacy_id?: InputMaybe<Scalars['Int']['input']>;
  systolic_pressure?: InputMaybe<Scalars['Int']['input']>;
  tolerance?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Visits_Sum_Fields = {
  __typename?: 'visits_sum_fields';
  diastolic_pressure?: Maybe<Scalars['Int']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  heart_rate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nurse_id?: Maybe<Scalars['Int']['output']>;
  pain_level?: Maybe<Scalars['Int']['output']>;
  patient_id?: Maybe<Scalars['Int']['output']>;
  pharmacy_id?: Maybe<Scalars['Int']['output']>;
  systolic_pressure?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "visits" */
export type Visits_Sum_Order_By = {
  diastolic_pressure?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  pain_level?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  pharmacy_id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
};

/** update columns of table "visits" */
export enum Visits_Update_Column {
  /** column name */
  AdministrationLocation = 'administration_location',
  /** column name */
  AdministrationTime = 'administration_time',
  /** column name */
  DiastolicPressure = 'diastolic_pressure',
  /** column name */
  Duration = 'duration',
  /** column name */
  HeartRate = 'heart_rate',
  /** column name */
  Id = 'id',
  /** column name */
  Medication = 'medication',
  /** column name */
  Note = 'note',
  /** column name */
  NurseId = 'nurse_id',
  /** column name */
  PainLevel = 'pain_level',
  /** column name */
  PatientId = 'patient_id',
  /** column name */
  PharmacyId = 'pharmacy_id',
  /** column name */
  SystolicPressure = 'systolic_pressure',
  /** column name */
  Tolerance = 'tolerance'
}

export type Visits_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Visits_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Visits_Set_Input>;
  /** filter the rows which have to be updated */
  where: Visits_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Visits_Var_Pop_Fields = {
  __typename?: 'visits_var_pop_fields';
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  heart_rate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  nurse_id?: Maybe<Scalars['Float']['output']>;
  pain_level?: Maybe<Scalars['Float']['output']>;
  patient_id?: Maybe<Scalars['Float']['output']>;
  pharmacy_id?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "visits" */
export type Visits_Var_Pop_Order_By = {
  diastolic_pressure?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  pain_level?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  pharmacy_id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Visits_Var_Samp_Fields = {
  __typename?: 'visits_var_samp_fields';
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  heart_rate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  nurse_id?: Maybe<Scalars['Float']['output']>;
  pain_level?: Maybe<Scalars['Float']['output']>;
  patient_id?: Maybe<Scalars['Float']['output']>;
  pharmacy_id?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "visits" */
export type Visits_Var_Samp_Order_By = {
  diastolic_pressure?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  pain_level?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  pharmacy_id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Visits_Variance_Fields = {
  __typename?: 'visits_variance_fields';
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  heart_rate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  nurse_id?: Maybe<Scalars['Float']['output']>;
  pain_level?: Maybe<Scalars['Float']['output']>;
  patient_id?: Maybe<Scalars['Float']['output']>;
  pharmacy_id?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "visits" */
export type Visits_Variance_Order_By = {
  diastolic_pressure?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  pain_level?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  pharmacy_id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
};

export type GetPatientQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetPatientQuery = { __typename?: 'query_root', patients: Array<{ __typename?: 'patients', name: string, phone: string, email: string, visits: Array<{ __typename?: 'visits', administration_location: string, administration_time: any, nurse?: { __typename?: 'nurses', name: string, phone: string } | null }> }> };

export type AllPatientsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPatientsQuery = { __typename?: 'query_root', patients: Array<{ __typename?: 'patients', id: number, name: string }> };


export const GetPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"visits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"administration_location"}},{"kind":"Field","name":{"kind":"Name","value":"administration_time"}},{"kind":"Field","name":{"kind":"Name","value":"nurse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPatientQuery, GetPatientQueryVariables>;
export const AllPatientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allPatients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllPatientsQuery, AllPatientsQueryVariables>;