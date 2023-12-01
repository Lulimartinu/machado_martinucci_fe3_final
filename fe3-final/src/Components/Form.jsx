import React, { useEffect, useState } from "react";

const Form = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setError("");
  }, [nombre, email]);

 

  const handleSubmit = (e) => {
    e.preventDefault();

    let nombreValido = /^[a-zA-Z]{5,}$/;
    let emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nombreValido.test(nombre)) {
      setError(
        "El nombre debe contener al menos 5 caracteres, porfavor verifique su informacion nuevamente"
      );
    } else if (!emailValido.test(email)) {
      setError(
        "El email ingresado no es valido, porfavor verifique su informacion nuevamente"
      );
    } else {
     setMensaje("Gracias "+ (nombre) + " , te contactaremos cuando antes vía mail")
    }
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre: </label>
        <input
          type="text"
          placeholder="Nombre Completo"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="">Email: </label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input className="btn" type="submit" value="Enviar formulario" />
      </form>

      {mensaje && <p style={{ color: "blue" }}>{mensaje}</p>}
    



    </>
  );
};

export default Form;
