// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bsHvoheJaXyaeWhnCxRakT
// Component: VBA7gR4Oyw
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_disuko_website_v_2.module.css"; // plasmic-import: bsHvoheJaXyaeWhnCxRakT/projectcss
import sty from "./PlasmicMusicplayer.module.css"; // plasmic-import: VBA7gR4Oyw/css

export type PlasmicMusicplayer__VariantMembers = {};
export type PlasmicMusicplayer__VariantsArgs = {};
type VariantPropType = keyof PlasmicMusicplayer__VariantsArgs;
export const PlasmicMusicplayer__VariantProps = new Array<VariantPropType>();

export type PlasmicMusicplayer__ArgsType = {};
type ArgPropType = keyof PlasmicMusicplayer__ArgsType;
export const PlasmicMusicplayer__ArgProps = new Array<ArgPropType>();

export type PlasmicMusicplayer__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultMusicplayerProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicMusicplayer__RenderFunc(props: {
  variants: PlasmicMusicplayer__VariantsArgs;
  args: PlasmicMusicplayer__ArgsType;
  overrides: PlasmicMusicplayer__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMusicplayer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMusicplayer__VariantsArgs;
    args?: PlasmicMusicplayer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMusicplayer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMusicplayer__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMusicplayer__ArgProps,
          internalVariantPropNames: PlasmicMusicplayer__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMusicplayer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMusicplayer";
  } else {
    func.displayName = `PlasmicMusicplayer.${nodeName}`;
  }
  return func;
}

export const PlasmicMusicplayer = Object.assign(
  // Top-level PlasmicMusicplayer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMusicplayer
    internalVariantProps: PlasmicMusicplayer__VariantProps,
    internalArgProps: PlasmicMusicplayer__ArgProps
  }
);

export default PlasmicMusicplayer;
/* prettier-ignore-end */
