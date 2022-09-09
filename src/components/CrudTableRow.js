const CrudTableRow = ({ caballero }) => {
  const { name, constellation } = caballero;
  return (
    <>
      <tr>
        <th>{name}</th>
        <th>{constellation}</th>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
    </>
  );
};

export default CrudTableRow;
