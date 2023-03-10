// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJAowqBqcWtGU49FNparet
// Component: mv-wbMPu_X
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
import Header2 from "../../Header2"; // plasmic-import: rUSB5x1lbq/component

import { useScreenVariants as useScreenVariantshOjvR8SK0BhqS } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: HOjvR8sK0bhqS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_disuko_website.module.css"; // plasmic-import: wJAowqBqcWtGU49FNparet/projectcss
import sty from "./PlasmicFilmVideo.module.css"; // plasmic-import: mv-wbMPu_X/css

export type PlasmicFilmVideo__VariantMembers = {};
export type PlasmicFilmVideo__VariantsArgs = {};
type VariantPropType = keyof PlasmicFilmVideo__VariantsArgs;
export const PlasmicFilmVideo__VariantProps = new Array<VariantPropType>();

export type PlasmicFilmVideo__ArgsType = {};
type ArgPropType = keyof PlasmicFilmVideo__ArgsType;
export const PlasmicFilmVideo__ArgProps = new Array<ArgPropType>();

export type PlasmicFilmVideo__OverridesType = {
  root2?: p.Flex<"div">;
  header2?: p.Flex<typeof Header2>;
  main?: p.Flex<"div">;
  content?: p.Flex<"div">;
  about?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultFilmVideoProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicFilmVideo__RenderFunc(props: {
  variants: PlasmicFilmVideo__VariantsArgs;
  args: PlasmicFilmVideo__ArgsType;
  overrides: PlasmicFilmVideo__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshOjvR8SK0BhqS()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicFilmVideo.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicFilmVideo.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicFilmVideo.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root2"}
          data-plasmic-override={overrides.root2}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root2
          )}
        >
          <Header2
            data-plasmic-name={"header2"}
            data-plasmic-override={overrides.header2}
            className={classNames("__wab_instance", sty.header2)}
          />

          <div
            data-plasmic-name={"main"}
            data-plasmic-override={overrides.main}
            className={classNames(projectcss.all, sty.main)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"content"}
              data-plasmic-override={overrides.content}
              hasGap={true}
              className={classNames(projectcss.all, sty.content)}
            >
              <div
                data-plasmic-name={"about"}
                data-plasmic-override={overrides.about}
                className={classNames(projectcss.all, sty.about)}
              >
                <div
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lZrGx
                    )}
                  >
                    {"film/video"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jQVe
                    )}
                  >
                    {
                      "my main experience with video comes from making entertainment videos for youtube. on my youtube channel i make videos covering gaming, music, and other digital media things as well as announce new music or sometimes post a cinematic edit. my main editing software is adobe premiere and recently i've been getting more into after effects! for 3d stuff i use blender."
                    }
                  </div>
                </div>
              </div>
            </p.Stack>
          </div>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__csfB9
            )}
            component={Link}
            href={"https://youtube.com/disuko" as const}
            platform={"nextjs"}
            target={"_blank" as const}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___3QDj)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/disuko_website/images/image20220305115856Png.png",
                fullWidth: 1666,
                fullHeight: 1024,
                aspectRatio: undefined
              }}
            />
          </p.PlasmicLink>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cftxb
            )}
          >
            {
              "alongside my youtube channel, i've been doing some more cinematic projects on my second channel, disuko flips. the videos cover reviews and cinematic edits of balisong knives and trainers."
            }
          </div>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__t2ISw
            )}
            component={Link}
            href={
              "https://www.youtube.com/channel/UCQSiS-ZX3Inl4YhlYpeEuug" as const
            }
            platform={"nextjs"}
            target={"_blank" as const}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__xkAqz)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/disuko_website/images/screenShot20220411At123450PMpng.png",
                fullWidth: 3576,
                fullHeight: 1748,
                aspectRatio: undefined
              }}
            />
          </p.PlasmicLink>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root2: ["root2", "header2", "main", "content", "about", "freeBox"],
  header2: ["header2"],
  main: ["main", "content", "about", "freeBox"],
  content: ["content", "about", "freeBox"],
  about: ["about", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root2: "div";
  header2: typeof Header2;
  main: "div";
  content: "div";
  about: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFilmVideo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFilmVideo__VariantsArgs;
    args?: PlasmicFilmVideo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFilmVideo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFilmVideo__ArgsType,
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
          internalArgPropNames: PlasmicFilmVideo__ArgProps,
          internalVariantPropNames: PlasmicFilmVideo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFilmVideo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root2") {
    func.displayName = "PlasmicFilmVideo";
  } else {
    func.displayName = `PlasmicFilmVideo.${nodeName}`;
  }
  return func;
}

export const PlasmicFilmVideo = Object.assign(
  // Top-level PlasmicFilmVideo renders the root element
  makeNodeComponent("root2"),
  {
    // Helper components rendering sub-elements
    header2: makeNodeComponent("header2"),
    main: makeNodeComponent("main"),
    content: makeNodeComponent("content"),
    about: makeNodeComponent("about"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicFilmVideo
    internalVariantProps: PlasmicFilmVideo__VariantProps,
    internalArgProps: PlasmicFilmVideo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "disuko",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicFilmVideo;
/* prettier-ignore-end */
