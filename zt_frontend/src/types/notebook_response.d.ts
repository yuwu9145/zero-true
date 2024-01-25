/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Notebookname = string;
export type Notebookid = string;
export type Id = string;
export type Code = string;
export type Output = string;
export type VariableName = string;
/**
 * List of component IDs that belong to this column
 */
export type Components1 = (string | Row)[];
export type Width = number | boolean;
/**
 * List of columns that belong to this row
 */
export type Components = (string | Column)[];
/**
 * List of rows in this layout
 */
export type Rows = Row[];
/**
 * List of columns in this layout
 */
export type Columns = Column[];
/**
 * Unique id for a component
 */
export type Id1 = string;
/**
 * Optional variable name associated with a component
 */
export type VariableName1 = string;
export type Components2 = ZTComponent[];
export type Celltype = "code" | "markdown" | "text" | "sql";
export type Userid = string;
export type Value = string;

export interface NotebookResponse {
  notebook: Notebook;
  dependencies: Dependencies;
  [k: string]: unknown;
}
export interface Notebook {
  notebookName?: Notebookname;
  notebookId?: Notebookid;
  cells: Cells;
  userId: Userid;
  [k: string]: unknown;
}
export interface Cells {
  [k: string]: CodeCell;
}
export interface CodeCell {
  id: Id;
  code: Code;
  output: Output;
  variable_name?: VariableName;
  layout?: Layout;
  components: Components2;
  cellType: Celltype;
  [k: string]: unknown;
}
export interface Layout {
  rows?: Rows;
  columns?: Columns;
  [k: string]: unknown;
}
export interface Row {
  components?: Components;
  [k: string]: unknown;
}
export interface Column {
  components?: Components1;
  width?: Width;
  [k: string]: unknown;
}
export interface ZTComponent {
  id: Id1;
  variable_name?: VariableName1;
  [k: string]: unknown;
}
export interface Dependencies {
  value: Value;
  [k: string]: unknown;
}
