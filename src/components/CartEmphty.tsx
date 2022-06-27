import { FC } from "react";
import { Link } from "react-router-dom";
import cartEmptyimg from "../assets/img/empty-cart.png";

const CartEmphty: FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>Cart is empty</h2> <span className="emodji">😕</span>
      <p>
        You probably haven't ordered pizza yet.
        <br />
        To order pizza, go to the main page.
      </p>
      <img src={cartEmptyimg} alt="EmptyCart" />
      <Link to="/" className="button button--black">
        <span>Come back</span>
      </Link>
    </div>
  );
};

export default CartEmphty;
