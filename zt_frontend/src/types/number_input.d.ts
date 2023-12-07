/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Unique id for a component
 */
export type Id = string;
/**
 * Optional variable name associated with a component
 */
export type VariableName = string;
/**
 * Vue component name.
 */
export type Component = string;
/**
 * The input text value
 */
export type Value = number | null;
/**
 * Placeholder text.
 */
export type Placeholder = string | null;
/**
 * Label for the text input.
 */
export type Label = string | null;
/**
 * If true, the input is read-only.
 */
export type Readonly = boolean | null;
/**
 * If true, the input is disabled.
 */
export type Disabled = boolean | null;
/**
 * Ensures that only numbers are accepted on the frontend
 */
export type Type = string;
/**
 * Trigger event to send code to the backend
 */
export type Triggerevent = string;

/**
 * A class for TextInput components inheriting from ZTComponent.
 */
export interface NumberInput {
  id: Id;
  variable_name?: VariableName;
  component?: Component;
  value?: Value;
  placeholder?: Placeholder;
  label?: Label;
  readonly?: Readonly;
  disabled?: Disabled;
  type?: Type;
  triggerEvent?: Triggerevent;
  [k: string]: unknown;
}
