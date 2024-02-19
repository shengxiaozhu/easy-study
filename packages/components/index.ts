import { withInstallAll } from '@easy-study/utils'
import * as components from "./src/index";
export * from "./src/index";
import "element-plus/dist/index.css";

const install = withInstallAll(components);
export default install
