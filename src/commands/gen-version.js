/* eslint-disable @typescript-eslint/no-var-requires */
const { version } = require("../../package.json");

require("fs").writeFileSync(
  require("path").resolve(__dirname, "version.ts"),
  `export default '${version}'\n`
);
