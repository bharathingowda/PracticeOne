import "./styles.css";
// import createSagaMiddleware from 'redux-saga';
import "./App.css";
// const sagaMiddleware = createSagaMiddleware();
// import AppiCalling from  "./components/apicall";
import AppiCallingClassComponent from "./components/apicallClassCompontent";
import Quiz from "./components/apiNew";
import Parent from "./components/parent";
import NewParent from "./components/newParent";

const App = () => {
  return (
    <div className="container">
      <h1>Increase Decrease</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="quantity">
        <button className="quantity_minus">-</button>
        <input
          className="quantity_input"
          name="quantity"
          type="text"
          value="0"
        />
        <button className="quantity_plus">+</button>
      </div>
      <br />
      <br />
      {/* <AppiCalling /> */}
      <AppiCallingClassComponent />
      <Quiz />
      <Parent />
      <NewParent />
    </div>
  );
};
export default App;
