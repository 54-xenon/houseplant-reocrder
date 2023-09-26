/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./src/component/**/*.{js,jsx}','./src/**/*.{html,js,jsx}'],
  // 一旦はtailwindCSSをオフにして作ってみる
  theme: {
    extend: {},
  },
  plugins: [],
}

// なんかtailwind.config.js(設定用のファイル)のcontent(適用する範囲を指定する)を変更すると良さそう
// App.jsとcomponentフォルダを適用の範囲を指定すると改善する