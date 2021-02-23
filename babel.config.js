module.exports = (api) => {
  const isProduction = api.env("production");
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env", // トランスパイルする時にどの環境で動かすようにトランスパイルするかを設定するもの
      {
        targets: {
          chrome: "79",
          ie: "11",
          firefox: "72",
          safari: "13",
        },
        useBuiltIns: "entry", // 指定先の環境では対応していない機能について、どのように補完するか
        corejs: 3,
      },
    ],
    [
      "@babel/preset-react", // トランスパイルする時にReactのjsx構文をJavaScriptに変換してくれるもの
      {
        development: !isProduction,
      },
    ],
  ];

  const plugins = [
    [
      "babel-plugin-styled-components", // babel実行時にstyled-componentsが生成するクラス名の設定ができるプラグイン
      isProduction //productionビルド時の設定
          ? {
              fileName: false, //クラス名にファイル名を含めるかどうか
              displayName: false, // クラス名にReactのコンポーネント名を含めるかどうか(
              pure: true,
          }
        : {
            minify: false,
          },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
