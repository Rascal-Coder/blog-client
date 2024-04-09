import { type ESLintConfig } from 'eslint-define-config';
import { type Options } from 'prettier';

declare module '@rascal/rules-config' {
  export const prettier: Options;
  export const eslint: ESLintConfig;
}
