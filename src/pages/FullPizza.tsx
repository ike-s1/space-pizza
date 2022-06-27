import axios from "axios";
import { useEffect, useState, FC } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza: FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://62b187b7c7e53744afbb1e34.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert(error);
        navigate("/");
      }
    };
    fetchPizza();
  }, []);

  if (!pizza) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div className="container">
        <div className="fullPizza">
          <div className="fullPizza__prev ">
            <img className="pizza-block__image" src={pizza.imageUrl} alt="pizza" />
            <h4>{pizza.price}$</h4>
          </div>
          <div className="fullPizza__info">
          <h2>{pizza.title}</h2>
            <p>
              Most astronauts would probably love to enjoy a slice of pizza in
              the final frontier. Unfortunately, serving pizza in low-earth
              orbit is a fairly difficult task, but this hasn’t stopped a few
              hungry astronauts from trying over the years. You have a chance to
              try our space pizza on Earth, so what are you waiting for? Most
              astronauts would probably love to enjoy a slice of pizza in the
              final frontier. Unfortunately, serving pizza in low-earth orbit is
              a fairly difficult task, but this hasn’t stopped a few hungry
              astronauts from trying over the years. You have a chance to try
              our space pizza on Earth, so what are you waiting for?
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default FullPizza;
