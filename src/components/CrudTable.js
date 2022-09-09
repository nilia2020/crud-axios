import "./CrudTable.css";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data }) => {
  return (
    <div className="table-container">
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr key="thead">
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr key="">
              <td>Sin datos</td>
            </tr>
          )}
          {data.length !== 0 &&
            data.map((caballero) => (
              <CrudTableRow key={caballero.id} caballero={caballero} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
