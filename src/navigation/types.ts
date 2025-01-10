import type { StackScreenProps } from '@react-navigation/stack';
import type { Paths } from '@/navigation/paths';

export type RootStackParamList = {
  [Paths.Example]: undefined;
  [Paths.Startup]: undefined;
  [Paths.bottomTab]: undefined;
  [Paths.CarWash]: undefined;
  [Paths.AllList]: { title: string };
  [Paths.CompanyProfile]: undefined;
  [Paths.Form]: { image: string; title: string; description: string };
  [Paths.Payment]: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
