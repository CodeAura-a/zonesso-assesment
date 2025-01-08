import { TextStyle } from 'react-native';

// Define all possible variants as a union type
export type fontsTitle =
  | 'listHeader'
  | 'sub'
  | 'black'
  | 'sub2'
  | 'black2'
  | 'button'
  | 'h1'
  | 'sub3';

export type FontVariant = TextStyle[];
