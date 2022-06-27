import { FC } from 'react';
import { Link } from 'react-router-dom';
import cartEmptyimg  from '../assets/img/empty-cart.png'

const CartEmphty:FC = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая</h2> <span className='emodji'>😕</span>
            <p>
            Вероятней всего, вы не заказывали ещё пиццу.<br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img  src={cartEmptyimg} alt="EmptyCart" />
            <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
            </Link>
      </div>
    );
};

export default CartEmphty;