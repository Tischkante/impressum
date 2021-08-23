
import './App.css';

import background from './goldi.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, objectFit: "contain" }}>
    <h3>Impressum</h3>
    <div id="lustigerText">
        <p id="pTag">Wenn Sie jemanden verschwinden lassen wollen oder einfach mal Ruhe brauchen rufen sie mich Inkasseo Reins der Mann fürs Grobe.</p>
    </div>
        <div id="centerDiv">
            <div id="flexWrap">
                <p>Joel Reins</p>
                <p>+49 179 2939098</p>
                <a href="mailto:InkassoReins@yahoo.com">Mail me at InkassoReins@yahoo.com</a>
            </div>
        </div>
    </div>
  );
}

export default App;
