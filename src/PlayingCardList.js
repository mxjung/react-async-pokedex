import React from "react";
import {useAxios} from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  // const [cards, setCards] = useState([]);

  const [cards, fetchData] = useAxios();
  
  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  // };

  const addCard = () => {
    fetchData("https://deckofcardsapi.com/api/deck/new/draw/");
  }

  // 1. fetchData will update useState in useAxios and useAxios will rerender and return new [responses, fetchData]
  // 2. CardTable rerenders because fetchData was called, and now, cards and fetchData are the new
  // [responses and fetachData] passed back from useAxios

  // Yes to above comment

  // Imagine const [data, setData] = useState(42); 42 would be the initial call when CardTable is rendered, but
  // everytime that setData is called, our data is updated, it would no longer be 42. Same idea applies to useAxios

  // calling getResponses = > it will just update responses INSIDE useAxios
  
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
