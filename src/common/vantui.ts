/*
 * @Author: huwanfei
 * @Date: 2023-08-04 14:12:49
 * @LastEditTime: 2023-08-04 14:25:40
 * @LastEditors: huwanfei
 * @Description:  vant组件按需引入
 * @FilePath: /vue3-pick-h5/src/common/vantui.ts
 */
import { type App } from "vue";
import { Button } from "vant";
const Vant = {
  install: (app: App): void => {
    app.use(Button);
  },
};
export default Vant;