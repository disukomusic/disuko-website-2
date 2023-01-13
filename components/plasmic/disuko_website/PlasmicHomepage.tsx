// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJAowqBqcWtGU49FNparet
// Component: enopAs-44Scdm
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
import Switch from "../../Switch"; // plasmic-import: uTOQTWLO1hH/component

import { useScreenVariants as useScreenVariantshOjvR8SK0BhqS } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: HOjvR8sK0bhqS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_disuko_website.module.css"; // plasmic-import: wJAowqBqcWtGU49FNparet/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: enopAs-44Scdm/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: J-z2pj5QsV0f6/icon
import IconmonstrInstagram11SvgIcon from "./icons/PlasmicIcon__IconmonstrInstagram11Svg"; // plasmic-import: 4oOlAJRYAy/icon
import YoutubeSvgrepoComsvgIcon from "./icons/PlasmicIcon__YoutubeSvgrepoComsvg"; // plasmic-import: Rt2RjnHmjo/icon

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {
  color?: string;
};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>("color");

export type PlasmicHomepage__OverridesType = {
  root2?: p.Flex<"div">;
  header2?: p.Flex<typeof Header2>;
  main?: p.Flex<"div">;
  content?: p.Flex<"div">;
  about?: p.Flex<"div">;
  socials?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  darkMode?: p.Flex<typeof Switch>;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          color: "" as const
        },
        props.args
      ),
    [props.args]
  );

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
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicHomepage.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicHomepage.pageMetadata.ogImageSrc}
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
          id={"" as const}
          role={"" as const}
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
                <div className={classNames(projectcss.all, sty.freeBox__yh1KE)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nsR4
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "tabletOrSmaller")
                      ? "hi there!"
                      : "hi there!"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8Vz3A
                    )}
                  >
                    {
                      "my name is angelo, i'm a digital media enthusiast who's a fan of all types of creative technology. mainly, i focus on music production and video editing."
                    }
                  </div>
                </div>
              </div>

              <div
                data-plasmic-name={"socials"}
                data-plasmic-override={overrides.socials}
                className={classNames(projectcss.all, sty.socials)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__slsbw)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jCvqd
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <p.PlasmicLink
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            projectcss.plasmic_default__inline,
                            sty.link__cl51W
                          )}
                          component={Link}
                          href={"mailto:disukomusic@gmail.com" as const}
                          platform={"nextjs"}
                        >
                          {"disukomusic@gmail.com"}
                        </p.PlasmicLink>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__gflLj)}
                >
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__ouyY0
                    )}
                    component={Link}
                    href={"https://www.twitter.com/disukomusic" as const}
                    platform={"nextjs"}
                  >
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__rp4T1)}
                      role={"img"}
                    />
                  </p.PlasmicLink>

                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__iWfbw
                    )}
                    component={Link}
                    href={"https://www.instagram.com/disukomusic" as const}
                    platform={"nextjs"}
                  >
                    <IconmonstrInstagram11SvgIcon
                      className={classNames(projectcss.all, sty.svg__xaSq)}
                      role={"img"}
                    />
                  </p.PlasmicLink>

                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__tPrSa
                    )}
                    component={Link}
                    href={"https://youtube.com/disuko" as const}
                    platform={"nextjs"}
                  >
                    <YoutubeSvgrepoComsvgIcon
                      className={classNames(projectcss.all, sty.svg__wdDdI)}
                      role={"img"}
                    />
                  </p.PlasmicLink>
                </p.Stack>

                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "tabletOrSmaller")
                      ? ("171px" as const)
                      : ("auto" as const)
                  }
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={
                    hasVariant(globalVariants, "screen", "tabletOrSmaller")
                      ? ("317px" as const)
                      : ("auto" as const)
                  }
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/disuko_website/images/disukoMountainspng.png",
                    fullWidth: 1920,
                    fullHeight: 1080,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.freeBox__pa7Fx)} />
          </div>

          {true ? (
            <Switch
              data-plasmic-name={"darkMode"}
              data-plasmic-override={overrides.darkMode}
              className={classNames("__wab_instance", sty.darkMode)}
              value={args.color}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root2: [
    "root2",
    "header2",
    "main",
    "content",
    "about",
    "socials",
    "img",
    "darkMode"
  ],
  header2: ["header2"],
  main: ["main", "content", "about", "socials", "img"],
  content: ["content", "about", "socials", "img"],
  about: ["about"],
  socials: ["socials", "img"],
  img: ["img"],
  darkMode: ["darkMode"]
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
  socials: "div";
  img: typeof p.PlasmicImg;
  darkMode: typeof Switch;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root2") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root2"),
  {
    // Helper components rendering sub-elements
    header2: makeNodeComponent("header2"),
    main: makeNodeComponent("main"),
    content: makeNodeComponent("content"),
    about: makeNodeComponent("about"),
    socials: makeNodeComponent("socials"),
    img: makeNodeComponent("img"),
    darkMode: makeNodeComponent("darkMode"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "disuko",
      description: "",
      ogImageSrc:
        "https://site-assets.plasmic.app/66a659c7a68a5cf96c23e2cde20f7e37.png",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
