/// <reference types="vite/client" />
/**
 * Namespace Env
 *
 * It is used to declare the type of the import.meta object
 */
// declare namespace Env {
//   /** Interface for import.meta */
//   interface ImportMeta extends ImportMetaEnv {}
// }

interface ImportMetaEnv {
  /** The prefix of the iconify icon */
  readonly VITE_ICON_PREFIX: 'icon'
  /**
   * The prefix of the local icon
   *
   * This prefix is start with the icon prefix
   */
  readonly VITE_ICON_LOCAL_PREFIX: 'local-icon'
  /**
   * Font family for code.
   */
  readonly VITE_CODE_FONTFAMILY: string
  /**
   * Whether to enable the redux logger.
   */
  readonly VITE_REDUX_LOGGER: 'Y' | 'N'
  /**
   * Iconify api provider url
   *
   * If the project is deployed in intranet, you can set the api provider url to the local iconify server
   *
   * @link https://docs.iconify.design/api/providers.html
   */
  readonly VITE_ICONIFY_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
