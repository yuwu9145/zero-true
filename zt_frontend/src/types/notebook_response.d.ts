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
export type Cellname = string;
export type Hidecell = boolean;
export type Hidecode = boolean;
export type Expandcode = boolean;
export type Showtable = boolean;
export type Nonreactive = boolean;
export type VariableName = string;
/**
 * List of component IDs and rows that belong to this column, rendered in order
 */
export type Components1 = (string | Row)[];
/**
 * Width of the column. It can be a number 1-12 and by default is automatically calculated
 */
export type Width = number | boolean;
/**
 * List of component IDs and columns that belong to this row, rendered in order
 */
export type Components = (string | Column)[];
/**
 * List of rows in this layout
 */
export type Rows = Row[];
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
export type Package = string;
export type Version = string;
export type Dependencies1 = Dependency[];

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
  cellName?: Cellname;
  hideCell?: Hidecell;
  hideCode?: Hidecode;
  expandCode?: Expandcode;
  showTable?: Showtable;
  nonReactive?: Nonreactive;
  variable_name?: VariableName;
  layout?: Layout;
  components: Components2;
  cellType: Celltype;
  [k: string]: unknown;
}
/**
 * Layout is an object that contains the list of rows to be rendered
 */
export interface Layout {
  rows?: Rows;
  [k: string]: unknown;
}
/**
 * Rows can contain both individual components and columns. They are the top level components of a layout and can be subcomponents of columns
 */
export interface Row {
  components?: Components;
  [k: string]: unknown;
}
/**
 * A Column must be a subcomponent of a Row. It can contain both individual components and rows
 */
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
  dependencies?: Dependencies1;
  [k: string]: unknown;
}
export interface Dependency {
  package: Package;
  version?: Version;
  [k: string]: unknown;
}
