/*
 * @LastEditTime: 2022-09-23 12:29:43
 * @Description:
 * @Date: 2022-09-23 12:29:37
 * @Author: liangshuo liangshuoone@aliyun.com
 * @LastEditors: liangshuo liangshuoone@aliyun.com
 */
import { Greeter } from "../index";
test("My Greeter", () => {
  expect(Greeter(1, 2)).toBe(3);
});
