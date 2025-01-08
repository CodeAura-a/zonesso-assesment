import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

// Define validation rules as a record with string keys and validators
export type ValidationRules = Record<string, Validator>;
// A validation rule can be a regular expression or a function
type ValidationRuleFunction = (
  value: any,
  formData: Record<string, any>,
) => string | boolean | undefined;
export type Validator = RegExp | ValidationRuleFunction;

export const validateForm = (
  formData: Record<string, any>,
  validationRules?: ValidationRules | undefined,
): Partial<Record<keyof typeof formData, boolean>> => {
  const errors: Partial<Record<keyof typeof formData, boolean>> = {};

  for (const field of Object.keys(formData)) {
    const value = formData[field];
    const validator = validationRules?.[field];

    if (!validator) {
      if (isValueEmpty(value)) {
        errors[`${field}Error` as keyof typeof formData] = true;
        break;
      }
    }

    if (typeof validator === 'function') {
      const validationError = validator(value, formData);
      if (validationError) {
        errors[`${field}Error` as keyof typeof formData] = true;
        break;
      }
    } else if (validator instanceof RegExp) {
      if (!validator?.test(value)) {
        errors[`${field}Error` as keyof typeof formData] = true;
        break;
      }
    }
  }

  return errors;
};

const isValueEmpty = (value: any) =>
  value === undefined ||
  value === '' ||
  (Array.isArray(value) && value.length === 0);

export const handleChangeText = <
  T extends Record<string, any>,
  K extends Extract<keyof T, string | number>, // Ensure K is constrained to string or number keys
>(
  setState: React.Dispatch<React.SetStateAction<T>>,
  setError: React.Dispatch<
    React.SetStateAction<Partial<Record<`${K}Error`, boolean>>>
  >,
  field: K,
  value: T[K],
) => {
  setState((prevState) => ({ ...prevState, [field]: value }));
  setError((prevErrors) => ({
    ...prevErrors,
    [`${field}Error` as `${K}Error`]: false, // Ensure field is converted to string explicitly
  }));
};
