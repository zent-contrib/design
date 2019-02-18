import { isString, isArray, isNumber, isFunction } from 'lodash';

export function getDesignType(editor, defaultType) {
  const { designType } = editor;

  if (isString(designType)) {
    if (isFunction(defaultType)) {
      return defaultType(designType);
    }
    return designType;
  }

  if (isArray(designType) && designType.length > 0) {
    if (isNumber(defaultType)) {
      return designType[defaultType || 0];
    }

    if (isFunction(defaultType)) {
      return defaultType(designType);
    }

    return designType[0];
  }

  throw new TypeError('designType should be a string or an array of strings');
}

export function isExpectedDesignType(component, expected) {
  const { type } = component;

  if (isString(type)) {
    return expected === type;
  }

  if (isArray(type)) {
    return type.indexOf(expected) !== -1;
  }

  return false;
}

export function serializeDesignType(designType) {
  if (isString(designType)) {
    return designType;
  }
  if (isArray(designType)) {
    return designType.join(' | ');
  }

  throw new TypeError('designType should be a string or an array of strings');
}

export const COMPONENT_GROUP_DESIGN_TYPE = '__zent-design-component-group__';
