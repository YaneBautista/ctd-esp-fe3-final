import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  const {state,dispach} = useContext(ContextGlobal);

  
  // const addFav = () => {
  //   const favs = JSON.parse(localStorage.getItem("favs")) || []; 
  //   const alreadyFav = favs.some((fav) => fav.id === id); 
  //   if (!alreadyFav) {
  //     favs.push({ name, username, id }); 
  //     localStorage.setItem("favs", JSON.stringify(favs)); 
  //     alert("Added to favorites!");
  //   } else {
  //     alert("This card is already in favorites!");
  //   }
  // };
  const handleFavoriteToggle = () => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: { id, name, username },
    });
  };

  const isFavorite = state.favorites.some((fav) => fav.id === id);
  return (
    <div className="card">
      <img src="public/images/doctor.jpg" className="cardImage" />   
      <Link to={`/dentist/${id}`} className="detailsLink">
      <h2>{name}</h2>
      </Link>
      <p>{username}</p>
      
      <button onClick={handleFavoriteToggle}>⭐      
      </button>
    </div>
  );
};

export default Card;

