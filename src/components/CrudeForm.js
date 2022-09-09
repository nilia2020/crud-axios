import { useState } from "react";

const initialForm = {
  name: "",
  constellation: "",
  id: null,
};

const CrudeForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {};
  const handleReset = () => {};
  return (
    <>
      <h3>Agregar</h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="constellation"
          placeholder="constellation"
          onChange={handleChange}
          value={form.constellation}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </>
  );
};

export default CrudeForm;
