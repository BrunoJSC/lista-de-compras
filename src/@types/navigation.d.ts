export type FormNavigationProps = {
  id?: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      form: FormNavigationProps;
    }
  }
}
