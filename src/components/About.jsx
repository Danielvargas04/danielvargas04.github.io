// About: dos columnas (trayectoria académica e industria/aplicada).
// Guardamos el contenido en arrays para no repetir JSX y poder editar fácil.

const academic = [
  {
    title: "Físico — Universidad Nacional de Colombia",
    detail: "2020–2025 · Promedio 4.6/5.0",
  },
  {
    title: "Maestría en Astronomía — UNAL (en curso)",
    detail:
      "Tesis: ML aplicado a la predicción de abundancias moleculares en el medio interestelar.",
  },
  {
    title: "Publicación científica — eSPECTRA (2024)",
    detail:
      "“Implementación de redes neuronales convolucionales para la extracción de características de imágenes de agujeros negros.”",
  },
  {
    title: "Escuelas de verano",
    detail:
      "UNAM (astrofísica/radioastronomía) y AstroTwinCoLO (lentes gravitacionales · U. Antioquia & Leiden).",
  },
];

const industry = [
  {
    title: "Análisis de movilidad urbana — TEC Monterrey",
    detail: "Clustering y métricas reproducibles sobre datos GPS.",
  },
  {
    title: "NASA Space Apps Challenge",
    detail: "4.º lugar global · detección de eventos sísmicos (96% de precisión).",
  },
  {
    title: "GEO-Hackatón Climático",
    detail: "1er lugar · análisis de tendencias y correlaciones climáticas.",
  },
  {
    title: "Profesor de Python — Kodland",
    detail: "Fundamentos de Python y buenas prácticas orientadas a proyectos.",
  },
  {
    title: "Pasantía de investigación — RECA",
    detail: "Astroquímica computacional y pipelines de simulación.",
  },
];

// Componente auxiliar para una columna. Recibe props: título, color y lista de ítems.
function TrackColumn({ heading, accentClass, items }) {
  return (
    <div className="bg-surface rounded-xl p-6 border border-surface-2">
      <h3 className={`text-xl font-bold mb-6 ${accentClass}`}>{heading}</h3>

      <ul className="space-y-5">
        {/* map() recorre la lista y crea un <li> por cada ítem */}
        {items.map((item) => (
          <li key={item.title} className="border-l-2 border-surface-2 pl-4">
            <p className="font-semibold text-slate-100">{item.title}</p>
            <p className="text-sm text-slate-400 mt-1">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-navy text-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Sobre mí</h2>
        <p className="text-slate-400 text-center mb-12">
          Dos trayectorias que se complementan.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <TrackColumn
            heading="Trayectoria académica"
            accentClass="text-accent"
            items={academic}
          />
          <TrackColumn
            heading="Trayectoria aplicada / industria"
            accentClass="text-accent"
            items={industry}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
