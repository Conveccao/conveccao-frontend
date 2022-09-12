import 'styled-components';
import THEME from './theme';

declare module 'styled-components' {
  type ThemeType = typeof THEME;

  export interface DefaultTheme extends ThemeType {}
}