// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bsHvoheJaXyaeWhnCxRakT
// Component: 2QM518ijxs
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
import Navbar from "../../Navbar"; // plasmic-import: _De9lHvhQM/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent
import Tilt from "@plasmicpkgs/react-parallax-tilt"; // plasmic-import: PfY466VIuq/codeComponent
import Footer from "../../Footer"; // plasmic-import: phAOjgqEmd/component

import { useScreenVariants as useScreenVariantswajuQ4R1DeAga } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WajuQ4R1DeAga/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_disuko_website_v_2.module.css"; // plasmic-import: bsHvoheJaXyaeWhnCxRakT/projectcss
import sty from "./PlasmicLinks.module.css"; // plasmic-import: 2QM518ijxs/css

import BrandYoutubesvgIcon from "./icons/PlasmicIcon__BrandYoutubesvg"; // plasmic-import: 8iuJ_X12Ok/icon
import PigMoneysvgIcon from "./icons/PlasmicIcon__PigMoneysvg"; // plasmic-import: HQAqXLuGsk/icon
import IceCream2SvgIcon from "./icons/PlasmicIcon__IceCream2Svg"; // plasmic-import: 05cyKBhyk/icon
import BrandSpotifysvgIcon from "./icons/PlasmicIcon__BrandSpotifysvg"; // plasmic-import: 15ld03NlrL/icon
import BrandApplesvgIcon from "./icons/PlasmicIcon__BrandApplesvg"; // plasmic-import: VijP-mvKcQ/icon
import BrandBandcampsvgIcon from "./icons/PlasmicIcon__BrandBandcampsvg"; // plasmic-import: 39vE-HYQ0j/icon
import BrandSoundcloudsvgIcon from "./icons/PlasmicIcon__BrandSoundcloudsvg"; // plasmic-import: AzuVKByyip/icon
import BrandInstagramsvgIcon from "./icons/PlasmicIcon__BrandInstagramsvg"; // plasmic-import: W0ah9M2A2q/icon
import BrandTwittersvgIcon from "./icons/PlasmicIcon__BrandTwittersvg"; // plasmic-import: FdEJ0oMOnf/icon
import BrandDiscordsvgIcon from "./icons/PlasmicIcon__BrandDiscordsvg"; // plasmic-import: 0OXdT4L_wG/icon

export type PlasmicLinks__VariantMembers = {};
export type PlasmicLinks__VariantsArgs = {};
type VariantPropType = keyof PlasmicLinks__VariantsArgs;
export const PlasmicLinks__VariantProps = new Array<VariantPropType>();

export type PlasmicLinks__ArgsType = {};
type ArgPropType = keyof PlasmicLinks__ArgsType;
export const PlasmicLinks__ArgProps = new Array<ArgPropType>();

export type PlasmicLinks__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  main?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  embedHtml?: p.Flex<typeof Embed>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultLinksProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLinks__RenderFunc(props: {
  variants: PlasmicLinks__VariantsArgs;
  args: PlasmicLinks__ArgsType;
  overrides: PlasmicLinks__OverridesType;

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
    screen: useScreenVariantswajuQ4R1DeAga()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicLinks.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicLinks.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicLinks.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicLinks.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicLinks.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicLinks.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicLinks.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicLinks.pageMetadata.ogImageSrc}
        />
        <link ref="canonical" href={PlasmicLinks.pageMetadata.canonical} />
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
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"main"}
            data-plasmic-override={overrides.main}
            hasGap={true}
            className={classNames(projectcss.all, sty.main)}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"103px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/disuko_website_v_2/images/logo2023Png.png",
                fullWidth: 2000,
                fullHeight: 2000,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wXVrp
              )}
            >
              {"disuko"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5VdUq
              )}
            >
              {
                "Hi everyone! My name is Disuko. I'm a producer, DJ, and content creator!"
              }
            </div>

            {true ? (
              <Embed
                data-plasmic-name={"embedHtml"}
                data-plasmic-override={overrides.embedHtml}
                className={classNames("__wab_instance", sty.embedHtml)}
                code={
                  '<div class="gfm-embed" data-url="https://www.gofundme.com/f/bite-handle-balisong-rave/widget/medium/"></div><script defer src="https://www.gofundme.com/static/js/embed.js"></script>' as const
                }
              />
            ) : null}

            <Tilt
              className={classNames("__wab_instance", sty.tilt__z0Qvg)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__fJgzI
                )}
                component={Link}
                href={
                  "https://www.youtube.com/watch?v=4nzDNPGY_rg&t=23s" as const
                }
                platform={"nextjs"}
              >
                <div
                  className={classNames(projectcss.all, sty.columns___1IRvS)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__gNurq)}
                  >
                    <BrandYoutubesvgIcon
                      className={classNames(projectcss.all, sty.svg__unk8Q)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__wxPcz)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__o9Dko
                      )}
                    >
                      {"my top audio gear for 2023!"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <Tilt
              className={classNames("__wab_instance", sty.tilt__uxoHd)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__boCmj
                )}
                component={Link}
                href={"https://gofund.me/f8bb50d2" as const}
                platform={"nextjs"}
              >
                <div
                  className={classNames(projectcss.all, sty.columns___3FVbr)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__kKuq2)}
                  >
                    <PigMoneysvgIcon
                      className={classNames(projectcss.all, sty.svg__ykGcF)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__j0Jkx)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___5O7Jg
                      )}
                    >
                      {"balisong rave gofundme"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <Tilt
              className={classNames("__wab_instance", sty.tilt__wfpGx)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__tU0WY
                )}
                component={Link}
                href={"https://www.fiverr.com/share/8mN3dp" as const}
                platform={"nextjs"}
              >
                <div className={classNames(projectcss.all, sty.columns__d5SzW)}>
                  <div
                    className={classNames(projectcss.all, sty.column__tkywi)}
                  >
                    <PigMoneysvgIcon
                      className={classNames(projectcss.all, sty.svg__edt3E)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__jgOhS)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tnfkE
                      )}
                    >
                      {"commissions open!"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <Tilt
              className={classNames("__wab_instance", sty.tilt__i7Qya)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__e9YCi
                )}
                component={Link}
                href={
                  "https://open.spotify.com/track/1XbtwDSEB92yqCxXzxAGF3?si=33d77f6cbcaa474c" as const
                }
                platform={"nextjs"}
              >
                <div className={classNames(projectcss.all, sty.columns__c30ZV)}>
                  <div className={classNames(projectcss.all, sty.column__lrQ6)}>
                    <IceCream2SvgIcon
                      className={classNames(projectcss.all, sty.svg__bwkcs)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column___9X7R6)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sbX9V
                      )}
                    >
                      {"out now: dino hop"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6HChH
              )}
            >
              {"streaming platforms"}
            </div>

            <Tilt
              className={classNames("__wab_instance", sty.tilt__oPkt)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__cb63W
                )}
                component={Link}
                href={
                  "https://open.spotify.com/artist/7miowOQruHb1GpKBlV4tjl" as const
                }
                platform={"nextjs"}
              >
                <div
                  className={classNames(projectcss.all, sty.columns___8B5VC)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__gez9W)}
                  >
                    <BrandSpotifysvgIcon
                      className={classNames(projectcss.all, sty.svg__vqVlQ)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__j6NhJ)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___3VgG3
                      )}
                    >
                      {"spotify"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <Tilt
              className={classNames("__wab_instance", sty.tilt__f8WXy)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__esomr
                )}
                component={Link}
                href={
                  "https://music.apple.com/us/artist/disuko/1497273303" as const
                }
                platform={"nextjs"}
              >
                <div className={classNames(projectcss.all, sty.columns__xHdff)}>
                  <div
                    className={classNames(projectcss.all, sty.column__bCbzv)}
                  >
                    <BrandApplesvgIcon
                      className={classNames(projectcss.all, sty.svg___3T0Xv)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column___2Db3)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rlAv
                      )}
                    >
                      {"itunes / apple music"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <Tilt
              className={classNames("__wab_instance", sty.tilt__lxyu0)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__d0Ezu
                )}
                component={Link}
                href={"https://disuko.bandcamp.com" as const}
                platform={"nextjs"}
              >
                <div className={classNames(projectcss.all, sty.columns__oS2KR)}>
                  <div
                    className={classNames(projectcss.all, sty.column__cQmD7)}
                  >
                    <BrandBandcampsvgIcon
                      className={classNames(projectcss.all, sty.svg__eBv1L)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__jowdc)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___9BmzK
                      )}
                    >
                      {"bandcamp"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <Tilt
              className={classNames("__wab_instance", sty.tilt__qnSM)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__hRZf1
                )}
                component={Link}
                href={"https://soundcloud.com/disukomusic" as const}
                platform={"nextjs"}
              >
                <div
                  className={classNames(projectcss.all, sty.columns___4Dkx2)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__ecbax)}
                  >
                    <BrandSoundcloudsvgIcon
                      className={classNames(projectcss.all, sty.svg__coFpQ)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__yue8J)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__evIxU
                      )}
                    >
                      {"soundcloud"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2YzYa
              )}
            >
              {"socials"}
            </div>

            <Tilt
              className={classNames("__wab_instance", sty.tilt__noAzW)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__vrPXm
                )}
                component={Link}
                href={"https://instagram.com/disukomusic" as const}
                platform={"nextjs"}
              >
                <div className={classNames(projectcss.all, sty.columns__qGmGd)}>
                  <div
                    className={classNames(projectcss.all, sty.column__sAh5Y)}
                  >
                    <BrandInstagramsvgIcon
                      className={classNames(projectcss.all, sty.svg__yedXd)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__ntqZ0)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ixmf6
                      )}
                    >
                      {"instagram"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <Tilt
              className={classNames("__wab_instance", sty.tilt___11BFw)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__lv66Z
                )}
                component={Link}
                href={"https://twitter.com/disukomusic" as const}
                platform={"nextjs"}
              >
                <div className={classNames(projectcss.all, sty.columns__erPm)}>
                  <div className={classNames(projectcss.all, sty.column__zUtq)}>
                    <BrandTwittersvgIcon
                      className={classNames(projectcss.all, sty.svg__jEdPr)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__nm1Zy)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cvAxB
                      )}
                    >
                      {"twitter"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <Tilt
              className={classNames("__wab_instance", sty.tilt___7STmw)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__yf8Gi
                )}
                component={Link}
                href={"https://youtube.com/disuko" as const}
                platform={"nextjs"}
              >
                <div className={classNames(projectcss.all, sty.columns__e9R)}>
                  <div
                    className={classNames(projectcss.all, sty.column__nuiBe)}
                  >
                    <BrandYoutubesvgIcon
                      className={classNames(projectcss.all, sty.svg__wK18D)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column___3GeLg)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bkWy
                      )}
                    >
                      {"youtube"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <Tilt
              className={classNames("__wab_instance", sty.tilt__rTtRb)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__hjV
                )}
                component={Link}
                href={"https://youtube.com/@disukoflips" as const}
                platform={"nextjs"}
              >
                <div className={classNames(projectcss.all, sty.columns__r4UL9)}>
                  <div
                    className={classNames(projectcss.all, sty.column__h9M3K)}
                  >
                    <BrandYoutubesvgIcon
                      className={classNames(projectcss.all, sty.svg__ckXvv)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__hfJvN)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__coMqV
                      )}
                    >
                      {"balisong youtube"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>

            <Tilt
              className={classNames("__wab_instance", sty.tilt__ptxej)}
              glareEnable={false}
              gyroscope={true}
              tiltMaxAngleX={10 as const}
              tiltMaxAngleY={10 as const}
              tiltReverse={true}
              trackOnWindow={false}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___7R8Ao
                )}
                component={Link}
                href={"https://discord.gg/NTwFYvMKhq" as const}
                platform={"nextjs"}
              >
                <div className={classNames(projectcss.all, sty.columns__wslfH)}>
                  <div
                    className={classNames(projectcss.all, sty.column___2I3O)}
                  >
                    <BrandDiscordsvgIcon
                      className={classNames(projectcss.all, sty.svg__wiCUp)}
                      role={"img"}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__m089L)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ey95C
                      )}
                    >
                      {"discord"}
                    </div>
                  </div>
                </div>
              </p.PlasmicLink>
            </Tilt>
          </p.Stack>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "main", "img", "embedHtml", "footer"],
  navbar: ["navbar"],
  main: ["main", "img", "embedHtml"],
  img: ["img"],
  embedHtml: ["embedHtml"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  main: "div";
  img: typeof p.PlasmicImg;
  embedHtml: typeof Embed;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLinks__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLinks__VariantsArgs;
    args?: PlasmicLinks__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLinks__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLinks__ArgsType,
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
          internalArgPropNames: PlasmicLinks__ArgProps,
          internalVariantPropNames: PlasmicLinks__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLinks__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinks";
  } else {
    func.displayName = `PlasmicLinks.${nodeName}`;
  }
  return func;
}

export const PlasmicLinks = Object.assign(
  // Top-level PlasmicLinks renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    main: makeNodeComponent("main"),
    img: makeNodeComponent("img"),
    embedHtml: makeNodeComponent("embedHtml"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicLinks
    internalVariantProps: PlasmicLinks__VariantProps,
    internalArgProps: PlasmicLinks__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "disuko - links 🌸",
      description:
        "~social media platforms and other important links for the disuko youtube channel and streaming services.",
      ogImageSrc:
        "https://site-assets.plasmic.app/f33b16e8e3629b301959c659f5c8f11d.jpg",
      canonical: "https://disuko.gay/links"
    }
  }
);

export default PlasmicLinks;
/* prettier-ignore-end */
