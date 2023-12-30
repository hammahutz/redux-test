import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import actionCreators  from "./state/action-creators";

function App() {
  const state = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  useEffect(() => {
    console.log(state);
  });

  return (
    <>
      <h1>Money: {state}</h1>
      <button onClick={() => depositMoney(1000)}>+ Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>- Withdraw</button>
    </>
  );
}

export default App;
