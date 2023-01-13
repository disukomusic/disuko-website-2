// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";

export type ModeValue = "lightMode" | "darkMode";
export const ModeContext = React.createContext<ModeValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useMode() {
  return React.useContext(ModeContext);
}

export default ModeContext;
/* prettier-ignore-end */
