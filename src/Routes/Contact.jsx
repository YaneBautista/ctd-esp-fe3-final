import { useState } from "react"; 
import Form from "../Components/Form"; 
import "../styles/index.css";

const Contact = () => {
  const [submittedData, setSubmittedData] = useState(null); 

  const handleFormSubmit = (data) => {
    setSubmittedData(data); 
  };

  return (
    <main>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>

    <div className="form">
      <Form onSubmit={handleFormSubmit} /> 
      </div>
   
      {submittedData && (
        <div >
          <p>¡Gracias, {submittedData.nombre}!   Te contactaremos via email.</p>
          
        </div>
      )}
    </main>
  );
};

export default Contact;