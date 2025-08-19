/* eslint-env node */
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Icon from "./images/logo-outline.png";

export const metadata = {
  metadataBase: new URL("https://presetbase.app"),
  title: {
    template: "%s - Nextra",
  },
  description:
    "PresetBase - The most extensive community-sourced synth preset database on the internet.",
  applicationName: "PresetBase",
  generator: "Next.js",
  appleWebApp: {
    title: "PresetBase",
  },
  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://presetbase.app",
  },
};

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
          <img
            src={Icon.src}
            alt="PresetBase Logo"
            style={{ height: 24, width: 24 }}
          />
          <span>PresetBase</span>
        </div>
      }
      projectLink="https://github.com/k0src/PresetBase"
    />
  );
  const pageMap = await getPageMap();
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer>© {new Date().getFullYear()} PresetBase</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/k0src/PresetBase-Docs/blob/master"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
