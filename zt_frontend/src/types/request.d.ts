/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Id = string;
export type Code = string;
export type Cells = CodeRequest[];
/**
 * Unique id for a component
 */
export type Id1 = string;
/**
 * Optional variable name associated with a component
 */
export type VariableName = string;
export type Components = ZTComponent[];

export interface Request {
  cells: Cells;
  components: Components;
  [k: string]: unknown;
}
export interface CodeRequest {
  id: Id;
  code: Code;
  [k: string]: unknown;
}
export interface ZTComponent {
  id: Id1;
  variable_name?: VariableName;
  [k: string]: unknown;
}
