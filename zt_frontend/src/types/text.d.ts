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
 * Vue component name for static text.
 */
export type Component = string;
/**
 * The actual text content.
 */
export type Text1 = string;
/**
 * Text type for text-related components.
 */
export type TextType =
  | "text-h1"
  | "text-h2"
  | "text-h3"
  | "text-h4"
  | "text-h5"
  | "text-h6"
  | "text-subtitle-1"
  | "text-subtitle-2"
  | "text-body-1"
  | "text-body-2"
  | "text-button"
  | "text-caption"
  | "text-overline";
/**
 * Color of the text.
 */
export type Color = string;
/**
 * Trigger event to send code to the backend. None for static text.
 */
export type Triggerevent = string;

/**
 * A class for static text components inheriting from ZTComponent.
 */
export interface Text {
  id: Id;
  variable_name?: VariableName;
  component?: Component;
  text?: Text1;
  text_type?: TextType;
  color?: Color;
  triggerEvent?: Triggerevent;
  [k: string]: unknown;
}
