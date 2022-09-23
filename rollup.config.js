/*
 * @LastEditTime: 2022-09-23 09:14:55
 * @Description:
 * @Date: 2022-09-22 18:46:03
 * @Author: liangshuo liangshuoone@aliyun.com
 * @LastEditors: liangshuo liangshuoone@aliyun.com
 */
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

import rollupConfigBase from "./rollup.config.base";

export default {
  ...rollupConfigBase,
  plugins: [...rollupConfigBase.plugins, terser(), filesize()],
};
