import depositMoney from "./depositMoney";
import withdrawMoney from "./withdrawMoney";

const actionCreators = {
  depositMoney,
  withdrawMoney
}

export default actionCreators;

// export const depositMoney = (amount) => {
//   return (dispatch) => {
//       dispatch({
//           type: "deposit",
//           payload: amount
//       });
//   }
// }


// export const withdrawMoney = (amount) => {
//   console.log(amount, "Lol")
//   return (dispatch) => {
//       dispatch({
//           type: "withdraw",
//           payload: amount
//       });
//   }
// }