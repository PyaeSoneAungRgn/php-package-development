import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from "@hempworks/pilgrim";
import config from "@hempworks/pilgrim/config";

export default defineConfigWithTheme<ThemeConfig>({
  extends: config,
  title: "PHP Package Development",
  description:
    "PHP နဲ့ Laravel Package တွေ ဖန်တီးတာကို knowledge sharing လုပ်ထားတာပါ",
  base: "/",
  cleanUrls: false,
  srcDir: "src",
  sitemap: {
    hostname: "https://packagedevelopment.pyaesoneaung.dev",
  },

  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "https://res.cloudinary.com/pyaesoneaung/image/upload/v1709306129/elephant.png",
        type: "image/x-icon",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "PHP နဲ့ Laravel Package တွေ ဖန်တီးတာကို knowledge sharing လုပ်ထားတာပါ",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "PHP Package Development",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "PHP နဲ့ Laravel Package တွေ ဖန်တီးတာကို knowledge sharing လုပ်ထားတာပါ",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/pyaesoneaung/image/upload/v1709312090/package-development-preview_h2gvaa.jpg",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://packagedevelopment.pyaesoneaung.dev",
      },
    ],
    [
      "meta",
      {
        property: "twitter:title",
        content: "PHP Package Development",
      },
    ],
    [
      "meta",
      {
        property: "twitter:description",
        content:
          "PHP နဲ့ Laravel Package တွေ ဖန်တီးတာကို knowledge sharing လုပ်ထားတာပါ",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image",
        content:
          "https://res.cloudinary.com/pyaesoneaung/image/upload/v1709312090/package-development-preview_h2gvaa.jpg",
      },
    ],
    [
      "meta",
      {
        property: "twitter:card",
        content: "https://packagedevelopment.pyaesoneaung.dev",
      },
    ],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-WY0HG9H28P",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-WY0HG9H28P');",
    ],
  ],

  themeConfig: {
    logo: {
      light:
        "https://res.cloudinary.com/pyaesoneaung/image/upload/v1709306129/elephant.png",
      dark: "https://res.cloudinary.com/pyaesoneaung/image/upload/v1709306129/elephant.png",
    },
    nav: [
      { text: 'PDF Download', link: 'https://cdn.pyaesoneaung.dev/books/package-development.pdf' },
    ],
    sidebar: [
      {
        text: "Package Development",
        items: [
          { text: "PHP", link: "/" },
          {
            text: "Laravel",
            link: "/laravel",
          },
          {
            text: "Tools",
            link: "/tools",
          },
        ],
      },
    ],
    search: {
      provider: "local",
      options: {
        placeholder: "Search...",
      },
    },
  },
});
