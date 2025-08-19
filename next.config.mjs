// next.config.js
import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  search: { codeblocks: false },
});

export default withNextra({
  reactStrictMode: true,
  distDir: "../../../next-dist", // go two levels up, out of "!Code"
});
