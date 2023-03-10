// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bsHvoheJaXyaeWhnCxRakT
// Component: JYPULZb0pa
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
import sty from "./PlasmicSugarrushthree.module.css"; // plasmic-import: JYPULZb0pa/css

export type PlasmicSugarrushthree__VariantMembers = {};
export type PlasmicSugarrushthree__VariantsArgs = {};
type VariantPropType = keyof PlasmicSugarrushthree__VariantsArgs;
export const PlasmicSugarrushthree__VariantProps = new Array<VariantPropType>();

export type PlasmicSugarrushthree__ArgsType = {};
type ArgPropType = keyof PlasmicSugarrushthree__ArgsType;
export const PlasmicSugarrushthree__ArgProps = new Array<ArgPropType>();

export type PlasmicSugarrushthree__OverridesType = {
  root?: p.Flex<"div">;
  finalAlbumSubjectToChange2023?: p.Flex<typeof p.PlasmicImg>;
  finalAlbumSubjectToChange2024?: p.Flex<typeof p.PlasmicImg>;
  finalAlbumSubjectToChange2025?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultSugarrushthreeProps {}

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

function PlasmicSugarrushthree__RenderFunc(props: {
  variants: PlasmicSugarrushthree__VariantsArgs;
  args: PlasmicSugarrushthree__ArgsType;
  overrides: PlasmicSugarrushthree__OverridesType;

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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicSugarrushthree.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicSugarrushthree.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicSugarrushthree.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <p.PlasmicImg
            data-plasmic-name={"finalAlbumSubjectToChange2023"}
            data-plasmic-override={overrides.finalAlbumSubjectToChange2023}
            alt={""}
            className={classNames(sty.finalAlbumSubjectToChange2023)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ("347px" as const)
                : ("701px" as const)
            }
            loading={"lazy" as const}
            src={{
              src: "/plasmic/disuko_website_v_2/images/sugarRushThreeTeaserpng.png",
              fullWidth: 2064,
              fullHeight: 1251,
              aspectRatio: undefined
            }}
          />

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
          ) ? (
            <p.PlasmicImg
              data-plasmic-name={"finalAlbumSubjectToChange2024"}
              data-plasmic-override={overrides.finalAlbumSubjectToChange2024}
              alt={""}
              className={classNames(sty.finalAlbumSubjectToChange2024)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"701px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/disuko_website_v_2/images/sugarRushThreeTeaserpng.png",
                fullWidth: 2064,
                fullHeight: 1251,
                aspectRatio: undefined
              }}
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
          ) ? (
            <p.PlasmicImg
              data-plasmic-name={"finalAlbumSubjectToChange2025"}
              data-plasmic-override={overrides.finalAlbumSubjectToChange2025}
              alt={""}
              className={classNames(sty.finalAlbumSubjectToChange2025)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"701px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/disuko_website_v_2/images/sugarRushThreeTeaserpng.png",
                fullWidth: 2064,
                fullHeight: 1251,
                aspectRatio: undefined
              }}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "finalAlbumSubjectToChange2023",
    "finalAlbumSubjectToChange2024",
    "finalAlbumSubjectToChange2025"
  ],
  finalAlbumSubjectToChange2023: ["finalAlbumSubjectToChange2023"],
  finalAlbumSubjectToChange2024: ["finalAlbumSubjectToChange2024"],
  finalAlbumSubjectToChange2025: ["finalAlbumSubjectToChange2025"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  finalAlbumSubjectToChange2023: typeof p.PlasmicImg;
  finalAlbumSubjectToChange2024: typeof p.PlasmicImg;
  finalAlbumSubjectToChange2025: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSugarrushthree__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSugarrushthree__VariantsArgs;
    args?: PlasmicSugarrushthree__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSugarrushthree__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSugarrushthree__ArgsType,
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
          internalArgPropNames: PlasmicSugarrushthree__ArgProps,
          internalVariantPropNames: PlasmicSugarrushthree__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSugarrushthree__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSugarrushthree";
  } else {
    func.displayName = `PlasmicSugarrushthree.${nodeName}`;
  }
  return func;
}

export const PlasmicSugarrushthree = Object.assign(
  // Top-level PlasmicSugarrushthree renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    finalAlbumSubjectToChange2023: makeNodeComponent(
      "finalAlbumSubjectToChange2023"
    ),
    finalAlbumSubjectToChange2024: makeNodeComponent(
      "finalAlbumSubjectToChange2024"
    ),
    finalAlbumSubjectToChange2025: makeNodeComponent(
      "finalAlbumSubjectToChange2025"
    ),

    // Metadata about props expected for PlasmicSugarrushthree
    internalVariantProps: PlasmicSugarrushthree__VariantProps,
    internalArgProps: PlasmicSugarrushthree__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "?????????",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSugarrushthree;
/* prettier-ignore-end */
