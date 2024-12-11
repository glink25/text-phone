import TextPhone, { App } from "../src";

// 示例应用
const phoneApp: App = {
  name: "电话",
  description: "给指定联系人或者号码拨打电话",
  run: () => `电话应用界面：\n输入“拨号 [号码]”拨打电话，输入“返回”回到启动器。`,
};

const smsApp: App = {
  name: "短信",
  description: "聊天应用，与好友互相发送信息",
  run: () => `短信应用界面：\n输入“发送 [消息]”发送消息，输入“返回”回到启动器。`,
};

// 初始化文本手机并安装应用
const myTextPhone = new TextPhone();
myTextPhone.installApp(phoneApp);
myTextPhone.installApp(smsApp);

export { myTextPhone };

// // 启动手机
// console.log(myTextPhone.start()); // 显示启动器界面

// // 模拟用户交互
// console.log(myTextPhone.handleInput("打开 电话")); // 启动电话应用
// console.log(myTextPhone.handleInput("返回")); // 返回启动器界面
// console.log(myTextPhone.handleInput("打开 短信")); // 启动短信应用
