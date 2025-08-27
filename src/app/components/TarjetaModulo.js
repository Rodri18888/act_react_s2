import styles from "./TarjetaModulo.module.css";

export default function TarjetaModulo({ nombre, descripcion, categoria, variante }) {
  return (
    <div className={`${styles.tarjeta} ${styles[variante]}`}>
      <div className={styles.encabezado}>
        <h3 className={styles.titulo}>{nombre}</h3>
        <span className={styles.categoria}>{categoria}</span>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
}
