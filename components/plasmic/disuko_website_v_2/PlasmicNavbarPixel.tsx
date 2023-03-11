// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bsHvoheJaXyaeWhnCxRakT
// Component: i-jxMljO8wt
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

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
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_disuko_website_v_2.module.css"; // plasmic-import: bsHvoheJaXyaeWhnCxRakT/projectcss
import sty from "./PlasmicNavbarPixel.module.css"; // plasmic-import: i-jxMljO8wt/css

import Menu2SvgIcon from "./icons/PlasmicIcon__Menu2Svg"; // plasmic-import: Oge_6sYsD-/icon
import XsvgIcon from "./icons/PlasmicIcon__Xsvg"; // plasmic-import: LUQvvF4qlM/icon

export type PlasmicNavbarPixel__VariantMembers = {};
export type PlasmicNavbarPixel__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbarPixel__VariantsArgs;
export const PlasmicNavbarPixel__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbarPixel__ArgsType = {};
type ArgPropType = keyof PlasmicNavbarPixel__ArgsType;
export const PlasmicNavbarPixel__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbarPixel__OverridesType = {
  root?: p.Flex<typeof NavigationBar>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  home?: p.Flex<"a"> & Partial<LinkProps>;
  music?: p.Flex<"a"> & Partial<LinkProps>;
  links?: p.Flex<"a"> & Partial<LinkProps>;
  portfolio?: p.Flex<"a"> & Partial<LinkProps>;
  merch?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultNavbarPixelProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavbarPixel__RenderFunc(props: {
  variants: PlasmicNavbarPixel__VariantsArgs;
  args: PlasmicNavbarPixel__ArgsType;
  overrides: PlasmicNavbarPixel__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

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
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          component={Link}
          href={`/`}
          platform={"nextjs"}
        >
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__rUFf)}
            displayHeight={"40px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            src={{
              src: "/plasmic/disuko_website_v_2/images/disukoPixelpng.png",
              fullWidth: 640,
              fullHeight: 160,
              aspectRatio: undefined
            }}
          />
        </p.PlasmicLink>
      }
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      closeButton={
        <XsvgIcon
          className={classNames(projectcss.all, sty.svg__wAndi)}
          role={"img"}
        />
      }
      itemsGap={8 as const}
      menuItems={
        <React.Fragment>
          <p.PlasmicLink
            data-plasmic-name={"home"}
            data-plasmic-override={overrides.home}
            className={classNames(projectcss.all, projectcss.a, sty.home)}
            component={Link}
            href={`/`}
            platform={"nextjs"}
            title={"home" as const}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__bfiHu)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"30%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/disuko_website_v_2/images/homepng5.png",
                fullWidth: 160,
                fullHeight: 150,
                aspectRatio: undefined
              }}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"music"}
            data-plasmic-override={overrides.music}
            className={classNames(projectcss.all, projectcss.a, sty.music)}
            component={Link}
            href={`/music`}
            platform={"nextjs"}
            title={"music" as const}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__nzbvf)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"30%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/disuko_website_v_2/images/musicpng3.png",
                fullWidth: 160,
                fullHeight: 150,
                aspectRatio: undefined
              }}
            />
          </p.PlasmicLink>

          {true ? (
            <p.PlasmicLink
              data-plasmic-name={"links"}
              data-plasmic-override={overrides.links}
              className={classNames(projectcss.all, projectcss.a, sty.links)}
              component={Link}
              href={`/links`}
              platform={"nextjs"}
              title={"links" as const}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__xe5Ck)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"30%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/disuko_website_v_2/images/linkspng2.png",
                  fullWidth: 160,
                  fullHeight: 160,
                  aspectRatio: undefined
                }}
              />
            </p.PlasmicLink>
          ) : null}

          <p.PlasmicLink
            data-plasmic-name={"portfolio"}
            data-plasmic-override={overrides.portfolio}
            className={classNames(projectcss.all, projectcss.a, sty.portfolio)}
            component={Link}
            href={`/portfolio`}
            platform={"nextjs"}
            title={"portfolio" as const}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__qi9Zc)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"30%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/disuko_website_v_2/images/portfofliopng2.png",
                fullWidth: 160,
                fullHeight: 150,
                aspectRatio: undefined
              }}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"merch"}
            data-plasmic-override={overrides.merch}
            className={classNames(projectcss.all, projectcss.a, sty.merch)}
            component={Link}
            href={"https://merch.disuko.gay" as const}
            platform={"nextjs"}
            title={"merch" as const}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__uzAa6)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"30%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/disuko_website_v_2/images/shirtpng3.png",
                fullWidth: 160,
                fullHeight: 130,
                aspectRatio: undefined
              }}
            />
          </p.PlasmicLink>
        </React.Fragment>
      }
      openButton={
        <Menu2SvgIcon
          className={classNames(projectcss.all, sty.svg__xeGS)}
          role={"img"}
        />
      }
      responsiveBreakpoint={768 as const}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link", "home", "music", "links", "portfolio", "merch"],
  link: ["link"],
  home: ["home"],
  music: ["music"],
  links: ["links"],
  portfolio: ["portfolio"],
  merch: ["merch"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof NavigationBar;
  link: "a";
  home: "a";
  music: "a";
  links: "a";
  portfolio: "a";
  merch: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbarPixel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbarPixel__VariantsArgs;
    args?: PlasmicNavbarPixel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbarPixel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbarPixel__ArgsType,
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
          internalArgPropNames: PlasmicNavbarPixel__ArgProps,
          internalVariantPropNames: PlasmicNavbarPixel__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavbarPixel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarPixel";
  } else {
    func.displayName = `PlasmicNavbarPixel.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarPixel = Object.assign(
  // Top-level PlasmicNavbarPixel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    home: makeNodeComponent("home"),
    music: makeNodeComponent("music"),
    links: makeNodeComponent("links"),
    portfolio: makeNodeComponent("portfolio"),
    merch: makeNodeComponent("merch"),

    // Metadata about props expected for PlasmicNavbarPixel
    internalVariantProps: PlasmicNavbarPixel__VariantProps,
    internalArgProps: PlasmicNavbarPixel__ArgProps
  }
);

export default PlasmicNavbarPixel;
/* prettier-ignore-end */
