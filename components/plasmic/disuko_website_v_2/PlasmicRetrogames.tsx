// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bsHvoheJaXyaeWhnCxRakT
// Component: Z39exjNTcmC
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
import NavbarPixel from "../../NavbarPixel"; // plasmic-import: i-jxMljO8wt/component
import FooterPixel from "../../FooterPixel"; // plasmic-import: EtLrAaCqNS/component

import { useScreenVariants as useScreenVariantswajuQ4R1DeAga } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WajuQ4R1DeAga/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_disuko_website_v_2.module.css"; // plasmic-import: bsHvoheJaXyaeWhnCxRakT/projectcss
import sty from "./PlasmicRetrogames.module.css"; // plasmic-import: Z39exjNTcmC/css

export type PlasmicRetrogames__VariantMembers = {};
export type PlasmicRetrogames__VariantsArgs = {};
type VariantPropType = keyof PlasmicRetrogames__VariantsArgs;
export const PlasmicRetrogames__VariantProps = new Array<VariantPropType>();

export type PlasmicRetrogames__ArgsType = {};
type ArgPropType = keyof PlasmicRetrogames__ArgsType;
export const PlasmicRetrogames__ArgProps = new Array<ArgPropType>();

export type PlasmicRetrogames__OverridesType = {
  root?: p.Flex<"div">;
  navbarPixel?: p.Flex<typeof NavbarPixel>;
  columns?: p.Flex<"div">;
  footerPixel?: p.Flex<typeof FooterPixel>;
};

export interface DefaultRetrogamesProps {}

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

function PlasmicRetrogames__RenderFunc(props: {
  variants: PlasmicRetrogames__VariantsArgs;
  args: PlasmicRetrogames__ArgsType;
  overrides: PlasmicRetrogames__OverridesType;

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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => "" as const
          : undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswajuQ4R1DeAga()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicRetrogames.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicRetrogames.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicRetrogames.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicRetrogames.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicRetrogames.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicRetrogames.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicRetrogames.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicRetrogames.pageMetadata.ogImageSrc}
        />
        <link ref="canonical" href={PlasmicRetrogames.pageMetadata.canonical} />
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
          <NavbarPixel
            data-plasmic-name={"navbarPixel"}
            data-plasmic-override={overrides.navbarPixel}
            className={classNames("__wab_instance", sty.navbarPixel)}
          />

          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div className={classNames(projectcss.all, sty.column__aL33)}>
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__uchVk)}
                  />
                ) : null}
              </div>
            ) : null}

            <div className={classNames(projectcss.all, sty.column__mJhXk)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___013R)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"10%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                onMouseOver={async event => {
                  const $steps = {};
                }}
                src={{
                  src: "/plasmic/disuko_website_v_2/images/disukoPixelPandaTopHalfpng.png",
                  fullWidth: 480,
                  fullHeight: 289,
                  aspectRatio: undefined
                }}
              />

              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__jeJgv)}>
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ahq62)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__oj5Ek
                        )}
                      >
                        {
                          "PAGE IS UNDER CONSTRUCTION. ALL CONTENT IS PLACEHOLDER."
                        }
                      </div>
                    </div>
                  ) : null}

                  <div
                    className={classNames(projectcss.all, sty.freeBox___32YJg)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iDpS6
                      )}
                    >
                      {
                        "This page is to show off some of my modded retro game consoles! If item is listed for sale, contact disukomusic@gmail.com for purchase."
                      }
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__qfbt1)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__fvPXy)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__venUi
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Disuko DMG"}
                          </span>
                        </React.Fragment>
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img___7KJj4)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/disuko_website_v_2/images/disukoDmGjpg.jpeg",
                          fullWidth: 512,
                          fullHeight: 512,
                          aspectRatio: undefined
                        }}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lYruF
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#9F4343" }}
                          >
                            {"$NFS"}
                          </span>
                        </React.Fragment>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ozLYm
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Upgrades:"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-Glass Screen Lens"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-New Shell"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-New Buttons"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-OEM Membranes"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {""}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"ToDo:"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-Upgrade Screen"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {'-Custom "Disuko" label'}
                          </span>
                        </React.Fragment>
                      </div>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.freeBox__rQbpv)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__yVCq
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Disuko GBP"}
                          </span>
                        </React.Fragment>
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__uLz3X)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/disuko_website_v_2/images/disukoGbPjpg.jpeg",
                          fullWidth: 512,
                          fullHeight: 512,
                          aspectRatio: undefined
                        }}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__nyAoS
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#9F4343" }}
                          >
                            {"$NFS"}
                          </span>
                        </React.Fragment>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__aqOb
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Upgrades:"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-New Screen Lens"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-New Shell"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-New Buttons"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-OEM Membranes"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {""}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"ToDo:"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-Upgrade Screen"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {'-Custom "Disuko" label'}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {""}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {""}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {""}
                          </span>
                        </React.Fragment>
                      </div>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.freeBox__gr3Lf)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__gh8Dy
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Disuko GBA"}
                          </span>
                        </React.Fragment>
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__xot9F)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/disuko_website_v_2/images/disukoGbAjpg.jpeg",
                          fullWidth: 512,
                          fullHeight: 512,
                          aspectRatio: undefined
                        }}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__roODv
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#9F4343" }}
                          >
                            {"$NFS"}
                          </span>
                        </React.Fragment>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ym33H
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Upgrades:"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-Glass Screen Lens"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-New Shell"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-New Buttons"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-New Membranes"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-Custom sylveon shell decal"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {""}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"ToDo:"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"-Higher quality back labels"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {""}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {""}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {""}
                          </span>
                        </React.Fragment>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div className={classNames(projectcss.all, sty.column__uvFSx)}>
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__scpHe)}
                  />
                ) : null}
              </div>
            ) : null}
          </div>

          <FooterPixel
            data-plasmic-name={"footerPixel"}
            data-plasmic-override={overrides.footerPixel}
            className={classNames("__wab_instance", sty.footerPixel)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbarPixel", "columns", "footerPixel"],
  navbarPixel: ["navbarPixel"],
  columns: ["columns"],
  footerPixel: ["footerPixel"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbarPixel: typeof NavbarPixel;
  columns: "div";
  footerPixel: typeof FooterPixel;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRetrogames__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRetrogames__VariantsArgs;
    args?: PlasmicRetrogames__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRetrogames__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRetrogames__ArgsType,
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
          internalArgPropNames: PlasmicRetrogames__ArgProps,
          internalVariantPropNames: PlasmicRetrogames__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRetrogames__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRetrogames";
  } else {
    func.displayName = `PlasmicRetrogames.${nodeName}`;
  }
  return func;
}

export const PlasmicRetrogames = Object.assign(
  // Top-level PlasmicRetrogames renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarPixel: makeNodeComponent("navbarPixel"),
    columns: makeNodeComponent("columns"),
    footerPixel: makeNodeComponent("footerPixel"),

    // Metadata about props expected for PlasmicRetrogames
    internalVariantProps: PlasmicRetrogames__VariantProps,
    internalArgProps: PlasmicRetrogames__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "disuko - retro games🌸",
      description: "~modded retro gaming devices from disuko",
      ogImageSrc:
        "https://site-assets.plasmic.app/f33b16e8e3629b301959c659f5c8f11d.jpg",
      canonical: "https://disuko.gay/retro"
    }
  }
);

export default PlasmicRetrogames;
/* prettier-ignore-end */
