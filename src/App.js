import './App.css';
import Header from './compornent/Header';

function App() {
  return (
    <div className="App">
      {/* なぜかApp.jsの方は適用されるけどコンポーネントは適用されない。→App.cssの無効化でなぜか修正できた。競争するのだろうか*/}
      {/* まずはヘッダーを作成していく */}
      <Header />
    </div>
  );
}
export default App;


// tailwindCSSがうまくうごか買った。多分全体でCSSを指定したことが原因かもしれない後でドキュメントに目を通す
//　コメントアウトは公開する時には消す