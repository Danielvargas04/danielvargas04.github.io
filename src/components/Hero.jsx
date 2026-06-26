// Importamos la foto como un módulo: Vite la optimiza y nos da la URL final.
import fotoDaniel from "../assets/foto-daniel.jpeg";

// El CV vive en /public, así que se sirve desde la raíz del sitio.
// BASE_URL respeta la ruta base configurada en vite.config.js (útil en GitHub Pages).
const cvUrl = `${import.meta.env.BASE_URL}CV-Daniel-Vargas.pdf`;

// Hero: primera pantalla. Solo presenta nombre, headline, foto y botones.
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-navy text-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 md:items-center">
        {/* Columna de texto */}
        <div className="text-center md:text-left">
          <p className="text-accent font-medium tracking-wide mb-3">
            Hola, soy
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Daniel Giovanny
            <br />
            Vargas Wilches
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-8">
            Physicist | Data Scientist | ML Researcher
          </p>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {/* Ancla interna: baja a la sección de proyectos */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-accent text-navy font-semibold hover:bg-accent-strong transition-colors"
            >
              Ver proyectos
            </a>

            {/* Descarga del CV (atributo download sugiere guardar el archivo) */}
            <a
              href={cvUrl}
              download
              className="px-6 py-3 rounded-lg border border-slate-600 text-slate-100 font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Descargar CV
            </a>

            {/* Contacto por correo */}
            <a
              href="mailto:dvargasw@unal.edu.co"
              className="px-6 py-3 rounded-lg border border-slate-600 text-slate-100 font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* Enlaces sociales */}
          <div className="flex gap-5 mt-8 justify-center md:justify-start text-slate-400">
            <a
              href="https://github.com/Danielvargas04"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/daniel-giovanny-vargas-wilches"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Columna de la foto */}
        <div className="flex justify-center">
          <img
            src={fotoDaniel}
            alt="Daniel Vargas Wilches"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-surface-2 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
