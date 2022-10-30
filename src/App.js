import "./App.css";
import myinfo from "./myInfo/info_obj";
import Info from "./myInfo/info";

function App() {
  return (
    <div className="App">
      <Info data={myinfo}></Info>
    </div>
  );
}

export default App;
