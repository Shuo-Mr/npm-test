/*
 * @LastEditTime: 2022-09-22 19:07:54
 * @Description: 
 * @Date: 2022-09-22 18:45:54
 * @Author: liangshuo liangshuoone@aliyun.com
 * @LastEditors: liangshuo liangshuoone@aliyun.com
 */
import rollupConfigBase from "./rollup.config.base";
import serve from "rollup-plugin-serve";

import livereload from "rollup-plugin-livereload";

export default {
  ...rollupConfigBase,
  plugins: [
    ...rollupConfigBase.plugins,
    serve({
      contentBase: "",
      port: 8020,
    }),
    livereload("src"),
  ],
};
