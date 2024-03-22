import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1d18e88a26124f63b49dee4865aca2bc',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "西片的秘密花园",
  domain: 'notion.allinu.vercel.app',
  author: '西片',

  // open graph metadata (optional)
  description: '和你分享 网络安全 前端开发 等计算机的相关内容',

  // social usernames (optional)
  github: 'allinu',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '西片的笔记',
      pageId: '1d18e88a26124f63b49dee4865aca2bc'
    },
    {
      title: '网络安全百宝箱',
      pageId: '7fd09acfbced411d9e88d71ba30c3e33'
    },
    {
      title: 'Hack The Box',
      pageId: '33607695dc81402ba64dbfc45f0169d7'
    },
    {
      title: 'ATT&CK',
      pageId: '025935aede1d4421819b68c2328b71d9'
    }
  ]
})
