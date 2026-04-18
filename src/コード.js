// 最終確認です。
// GitHub Actions 動作確認
function myFunction() {
  Logger.log("Hello, GAS! (Logger)");
  console.log("Hello, GAS! (console)");
}

/**
 * 動作確認用のテスト関数
 */
function testOutput() {
  const now = new Date();
  const message = "テスト実行時刻: " + now.toLocaleString();

  Logger.log("--- Logger による出力 ---");
  Logger.log(message);

  console.log("--- console による出力 ---");
  console.log(message);

  return message;
}
