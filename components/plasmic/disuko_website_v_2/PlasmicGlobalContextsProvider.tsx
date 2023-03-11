// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bsHvoheJaXyaeWhnCxRakT
import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { CommerceProviderComponent } from "@plasmicpkgs/commerce-shopify"; // plasmic-import: jKXfoEXfU9R/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  commerceProviderComponentProps?: Partial<
    Omit<React.ComponentProps<typeof CommerceProviderComponent>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, commerceProviderComponentProps } = props;

  return (
    <CommerceProviderComponent
      {...commerceProviderComponentProps}
      accessToken={
        commerceProviderComponentProps &&
        "accessToken" in commerceProviderComponentProps
          ? commerceProviderComponentProps.accessToken!
          : ("ef7d41c7bf7e1c214074d0d3047bcd7b" as const)
      }
      storeDomain={
        commerceProviderComponentProps &&
        "storeDomain" in commerceProviderComponentProps
          ? commerceProviderComponentProps.storeDomain!
          : ("next-js-store.myshopify.com" as const)
      }
    >
      {children}
    </CommerceProviderComponent>
  );
}
