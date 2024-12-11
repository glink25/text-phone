export type App = {
  name: string; // 应用名称
  description: string; // 应用描述
  run: () => string; // 应用的功能逻辑，返回下一屏的文本界面
};

export default class TextPhone {
  private apps: App[]; // 已安装的应用
  private currentScreen: string; // 当前显示的文本界面

  constructor() {
    this.apps = [];
    this.currentScreen = "";
  }

  // 注册一个新应用
  installApp(app: App) {
    this.apps.push(app);
  }

  // 显示启动器界面
  private displayLauncher(): string {
    const launcherScreen = this.apps.map((app, index) => `[${index + 1}] ${app.name} - ${app.description}`).join("\n");

    return `启动器界面：\n${launcherScreen}\n\n输入“打开 应用名”以启动某个应用。`;
  }

  // 启动某个应用
  private openApp(appName: string): string {
    const app = this.apps.find((a) => a.name.toLowerCase() === appName.toLowerCase());
    if (!app) {
      return `未找到应用：${appName}\n\n${this.currentScreen}`;
    }

    this.currentScreen = app.run();
    return this.currentScreen;
  }

  // 接收用户输入并更新界面
  handleInput(input: string): string {
    const [command, ...args] = input.split(" ");
    const argument = args.join(" ");

    switch (command.toLowerCase()) {
      case "打开":
        return this.openApp(argument);
      case "返回":
        this.currentScreen = this.displayLauncher();
        return this.currentScreen;
      default:
        return `无法识别的指令：${input}\n\n${this.currentScreen}`;
    }
  }

  // 启动文本手机
  start() {
    this.currentScreen = this.displayLauncher();
    return this.currentScreen;
  }

  get screenContent() {
    return this.currentScreen;
  }
}
