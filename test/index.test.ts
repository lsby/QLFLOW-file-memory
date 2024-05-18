import { 文件记忆函数 } from "../src/index";
import path from "path";

async function main() {
  var 普通函数 = (a: number, b: number) => a + b;
  var 记忆函数 = 文件记忆函数(
    普通函数,
    path.resolve(__dirname, "./记忆文件.json")
  );

  console.log(await 记忆函数(1, 2));
  console.log(await 记忆函数(2, 3));
}
main();
