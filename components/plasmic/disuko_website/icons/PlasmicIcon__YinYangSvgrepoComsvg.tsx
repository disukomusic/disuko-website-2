// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type YinYangSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function YinYangSvgrepoComsvgIcon(props: YinYangSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 297 297"}
      xmlSpace={"preserve"}
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
          "M148.5 0C66.617 0 0 66.617 0 148.5S66.617 297 148.5 297h.027C230.397 296.984 297 230.374 297 148.5 297 66.617 230.383 0 148.5 0zm.001 51.766c15.281 0 27.713 12.432 27.713 27.713s-12.432 27.713-27.713 27.713-27.713-12.432-27.713-27.713c0-15.282 12.432-27.713 27.713-27.713zm-.001 224.318c-32.292 0-58.563-26.271-58.563-58.563 0-32.293 26.271-58.564 58.563-58.564 43.824 0 79.479-35.654 79.479-79.479a78.982 78.982 0 00-9.469-37.583c34.654 22.834 57.575 62.09 57.575 106.604 0 70.352-57.234 127.585-127.585 127.585z"
        }
      ></path>

      <path
        d={
          "M148.5 241c-14.612 0-26.5-11.888-26.5-26.5s11.888-26.5 26.5-26.5 26.5 11.888 26.5 26.5-11.888 26.5-26.5 26.5z"
        }
      ></path>
    </svg>
  );
}

export default YinYangSvgrepoComsvgIcon;
/* prettier-ignore-end */
