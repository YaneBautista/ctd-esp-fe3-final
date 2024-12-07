import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import Footer from "../Components/Footer";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos del dentista.");
        }
        const data = await response.json();
        setDentist(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDentist();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}>
      <h1>Detail Dentist</h1>

      {dentist && (
        <div style={{ marginTop: "20px" }}>
          <table border="1" style={{ width: "100%", textAlign: "left" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Web site</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>
                  <a
                    href={`http://${dentist.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dentist.website}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      
    </main>
  );
};

export default Detail;