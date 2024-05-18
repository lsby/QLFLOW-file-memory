import fs from "fs";

export function 文件记忆函数<A extends (...a: any[]) => any>(
  函数: A,
  缓存存放路径: string
) {
  if (!fs.existsSync(缓存存放路径)) {
    fs.writeFileSync(缓存存放路径, "{}");
  }
  var 缓存 = JSON.parse(fs.readFileSync(缓存存放路径).toString());
  return async (...a: any[]) => {
    var 参数格式化 = JSON.stringify(a);
    if (缓存[参数格式化]) return 缓存[参数格式化];
    var 调用结果 = await 函数(...a);
    缓存[参数格式化] = 调用结果;
    fs.writeFileSync(缓存存放路径, JSON.stringify(缓存));
    return 调用结果;
  };
}
