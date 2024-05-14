import "styled-components";
import { GlobalTheme } from "../styles/theme";

type ThemeType = typeof GlobalTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
