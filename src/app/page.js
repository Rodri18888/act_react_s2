import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";
import TarjetaDinamica from "./components/TarjetaDinamica";
import TarjetaTailwind from "./components/TarjetaTailwind";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Comparación de Métodos de Estilizado en Next.js</h1>

      {/* CSS Global */}
      <section>
        <h2 className="text-xl font-semibold mb-4">1. CSS Global</h2>
        <TarjetaGlobal 
          titulo="Tarjeta Global" 
          contenido="Ejemplo con estilos en globals.css" 
        />
      </section>

      {/* CSS Modules */}
      <section>
        <h2 className="text-xl font-semibold mb-4">2. CSS Modules</h2>
        <TarjetaModulo 
          nombre="Producto A" 
          descripcion="Tarjeta usando módulos CSS" 
          categoria="Primaria" 
          variante="tarjetaPrimaria"
        />
        <TarjetaModulo 
          nombre="Producto B" 
          descripcion="Tarjeta secundaria" 
          categoria="Secundaria" 
          variante="tarjetaSecundaria"
        />
      </section>

      {/* Estilos en Línea */}
      <section>
        <h2 className="text-xl font-semibold mb-4">3. Estilos en Línea</h2>
        <TarjetaDinamica 
          titulo="Dinámica Activa"
          contenido="Con fondo verde claro"
          colorFondo="#e0f7fa"
          colorTexto="#004d40"
          ancho="250px"
          activo={true}
        />
        <TarjetaDinamica 
          titulo="Dinámica Inactiva"
          contenido="Con fondo gris claro"
          colorFondo="#f5f5f5"
          colorTexto="#333"
          ancho="250px"
          activo={false}
        />
      </section>

      {/* Tailwind */}
      <section>
        <h2 className="text-xl font-semibold mb-4">4. Tailwind CSS</h2>
        <TarjetaTailwind 
          titulo="Tarjeta con Tailwind"
          descripcion="Ejemplo de card con utilidades de Tailwind"
          etiqueta="Tailwind"
          imagen="https://picsum.photos/300/200"
        />
      </section>
    </main>
  );
}
