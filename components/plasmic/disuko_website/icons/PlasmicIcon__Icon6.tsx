// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 400 400"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M175 1.183C10.27 21.534-58.998 223.923 58.539 341.461c117.828 117.828 320.448 48.026 340.331-117.242C414.431 94.879 304.345-14.797 175 1.183m-66.92 51.356c-19.996 31.672-18.546 78.794 3.442 111.887 19.797 29.796 49.345 45.73 88.478 47.712 81.278 4.118 112.338 102.813 46.875 148.945-46.185 32.546-133.262 9.605-181.437-47.802-67.4-80.315-50.507-200.261 36.515-259.275 8.366-5.673 8.856-5.79 6.127-1.467m99.786 24.499c18.393 5.45 27.125 25.1 18.73 42.153-10.785 21.907-42.407 21.907-53.192 0-11.388-23.133 10.069-49.379 34.462-42.153m-16.285 187.456c-25.091 6.755-30.318 41.427-8.363 55.471 20.693 13.237 47.392-1.311 47.392-25.824 0-20.606-19.001-35.039-39.029-29.647"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
