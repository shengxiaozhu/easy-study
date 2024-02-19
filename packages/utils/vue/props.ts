type NativeType = null | number | boolean | string | symbol | Function;

type NotUndefined<T> = T extends undefined ? never : T;

type InterDefault<P, T> =
  | ((props: P) => T & {})
  | (T extends NativeType ? T : never);

type InterDefaults<T> = {
  [P in keyof T]: T[P] | undefined;
};

type InterDefaultProps<
  T,
  Defaults extends InterDefaults<T>,
  BKsys extends keyof T
> = Omit<T, keyof Defaults> & {
  [K in keyof Defaults]-?: K extends keyof T
    ? Defaults[K] extends undefined
      ? T[K]
      : NotUndefined<T[K]>
    : never;
} & {
  readonly [K in BKsys]-?: boolean;
};

export type {
  NativeType,
  NotUndefined,
  InterDefault,
  InterDefaults,
  InterDefaultProps,
};
