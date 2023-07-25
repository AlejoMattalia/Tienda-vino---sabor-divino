import { ConfirmBuy } from "../../common/confirmBuy/ConfirmBuy";

export function Checkout({ data }) {
  const { functionBuy, showConfirmBuy } = data;

  return (
    <>
      <button onClick={functionBuy}>Checkout</button>
      {showConfirmBuy && <ConfirmBuy />}
    </>
  );
}
