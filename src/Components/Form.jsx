import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user.nombre.length >= 5 && emailRegex.test(user.email)) {
      onSubmit(user); 
      setUser({ nombre: "", email: "" });
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          value={user.nombre}
          onChange={(event) =>
            setUser({ ...user, nombre: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={user.email}
          onChange={(event) =>
            setUser({ ...user, email: event.target.value })
          }
        />
      </div>
      <button type="submit">Enviar</button>

      {error && (
        <h4 style={{ color: "red", marginTop: "10px" }}>
          Por favor verifica tu información nuevamente.
        </h4>
      )}
    </form>
  );
};

export default Form;