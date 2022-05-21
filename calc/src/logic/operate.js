import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || "0");
  if (operation === "+") {
    return one.plus(two).toString();
  }

  throw Error(`Unknown operation '${operation}'`);
}
