// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bsHvoheJaXyaeWhnCxRakT
// Component: EtLrAaCqNS
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

import { useScreenVariants as useScreenVariantswajuQ4R1DeAga } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WajuQ4R1DeAga/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_disuko_website_v_2.module.css"; // plasmic-import: bsHvoheJaXyaeWhnCxRakT/projectcss
import sty from "./PlasmicFooterPixel.module.css"; // plasmic-import: EtLrAaCqNS/css

export type PlasmicFooterPixel__VariantMembers = {};
export type PlasmicFooterPixel__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterPixel__VariantsArgs;
export const PlasmicFooterPixel__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterPixel__ArgsType = {};
type ArgPropType = keyof PlasmicFooterPixel__ArgsType;
export const PlasmicFooterPixel__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterPixel__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  disuko?: p.Flex<"a"> & Partial<LinkProps>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultFooterPixelProps {
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

function PlasmicFooterPixel__RenderFunc(props: {
  variants: PlasmicFooterPixel__VariantsArgs;
  args: PlasmicFooterPixel__ArgsType;
  overrides: PlasmicFooterPixel__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswajuQ4R1DeAga()
  });

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
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column___0Dhmn)}>
          <p.PlasmicLink
            data-plasmic-name={"disuko"}
            data-plasmic-override={overrides.disuko}
            className={classNames(projectcss.all, projectcss.a, sty.disuko)}
            component={Link}
            href={`/`}
            platform={"nextjs"}
            target={"_blank" as const}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__ghbC4)}
              displayHeight={"100%" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/disuko_website_v_2/images/disukoPandaPixelpng.png",
                fullWidth: 480,
                fullHeight: 480,
                aspectRatio: undefined
              }}
            />
          </p.PlasmicLink>
        </div>

        <div className={classNames(projectcss.all, sty.column__uoFtM)}>
          {true ? (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pTtG
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 400 }}
                  >
                    {"website © disuko & "}
                  </span>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        projectcss.plasmic_default__inline,
                        sty.link__soHqz
                      )}
                      component={Link}
                      href={"https://redpandamedia.net" as const}
                      platform={"nextjs"}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 400 }}
                        >
                          {"Red Panda Studios"}
                        </span>
                      </React.Fragment>
                    </p.PlasmicLink>
                  }
                  <React.Fragment>{""}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 400 }}
                  >
                    {" 2023"}
                  </span>
                </React.Fragment>
              </div>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__yBesC
                )}
                component={Link}
                href={"https://www.ohhey.gay/gay-gives" as const}
                platform={"nextjs"}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__qb6Fm)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"56px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/disuko_website_v_2/images/dotGayRgBpng.png",
                    fullWidth: 210,
                    fullHeight: 92,
                    aspectRatio: undefined
                  }}
                />
              </p.PlasmicLink>
            </div>
          ) : null}
        </div>

        <div className={classNames(projectcss.all, sty.column__bLuIo)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__g6QyS
            )}
          >
            <React.Fragment>
              <React.Fragment>{"icons from "}</React.Fragment>
              {
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link__lbK1
                  )}
                  component={Link}
                  href={
                    "https://github.com/konradkalemba/tabler-icons-react" as const
                  }
                  platform={"nextjs"}
                >
                  {"tabler"}
                </p.PlasmicLink>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "disuko", "freeBox"],
  columns: ["columns", "disuko", "freeBox"],
  disuko: ["disuko"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  disuko: "a";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterPixel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterPixel__VariantsArgs;
    args?: PlasmicFooterPixel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterPixel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterPixel__ArgsType,
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
          internalArgPropNames: PlasmicFooterPixel__ArgProps,
          internalVariantPropNames: PlasmicFooterPixel__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooterPixel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterPixel";
  } else {
    func.displayName = `PlasmicFooterPixel.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterPixel = Object.assign(
  // Top-level PlasmicFooterPixel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    disuko: makeNodeComponent("disuko"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicFooterPixel
    internalVariantProps: PlasmicFooterPixel__VariantProps,
    internalArgProps: PlasmicFooterPixel__ArgProps
  }
);

export default PlasmicFooterPixel;
/* prettier-ignore-end */