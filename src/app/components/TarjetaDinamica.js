export default function TarjetaDinamica({ 
  titulo, 
  contenido, 
  colorFondo, 
  colorTexto, 
  ancho, 
  activo 
}) {
  const style = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: "16px",
    margin: "12px",
    borderRadius: "12px",
    border: activo ? "2px solid green" : "1px solid gray",
    opacity: activo ? 1 : 0.6,
    transition: "all 0.3s ease"
  };

  return (
    <div style={style}>
      <h3>{titulo}</h3>
      <p>{contenido}</p>
    </div>
  );
}
