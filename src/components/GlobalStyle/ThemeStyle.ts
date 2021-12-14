declare module "styled-components" {
  export interface DefaultTheme extends IThemeType {}
}

export const darkTheme = {
  colorDark100: "#0d1117",
  colorDark50: "#161b22",
  colorDark20: "#21262C",
  colorPrimary100: "#c9d1d9",
  colorPrimary50: "#8b949e",
  colorBlue20: "#1f6feb",
};

export type IThemeType = typeof darkTheme;
