import { useContext } from "react"; 
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context"; 

const favs = () => {
  const { state } = useContext(ContextGlobal); 

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}>
      <h1>Dentist Fav</h1>
      <div className="card-grid">
        {state.favorites && state.favorites.length > 0 ? (
          state.favorites.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))
        ) : (
          <p>No tienes favoritos seleccionados</p>
        )}
      </div>
    </main>
  );
};

export default favs;