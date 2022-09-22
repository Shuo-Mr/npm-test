/*
 * @LastEditTime: 2022-09-22 19:05:34
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
  plugins: [...baseConfig.plugins, terser(), filesize()],
};
