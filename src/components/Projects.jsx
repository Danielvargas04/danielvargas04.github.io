// Importamos los datos desde el JSON. React/Vite permiten importar JSON directo.
import projects from "../data/projects.json";

// Gradientes escritos literalmente para que Tailwind los detecte al compilar.
// (Tailwind no genera clases que solo existan como strings dentro del JSON.)
const gradients = [
  "from-sky-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
];

// Convierte "texto con **palabra** clave" en JSX, poniendo en negrilla
// lo que esté entre dobles asteriscos. Las partes impares del split son negrilla.
function renderBold(text) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-slate-100 font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-surface text-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Proyectos</h2>
        <p className="text-slate-400 text-center mb-12">
          Algunos trabajos destacados.
        </p>

        {/* Grid responsive: 1 columna en móvil, 2 en tablet, 3 en escritorio */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="bg-navy rounded-xl overflow-hidden border border-surface-2 flex flex-col hover:-translate-y-1 transition-transform"
            >
              {/* Placeholder visual: bloque con degradado (aún no hay screenshots) */}
              <div
                className={`h-40 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center p-4`}
              >
                <span className="text-white font-bold text-lg text-center drop-shadow">
                  {project.title}
                </span>
              </div>

              {/* Cuerpo de la tarjeta */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-accent font-medium mb-2">
                  {project.period}
                </p>
                <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-4 flex-1">
                  {renderBold(project.description)}
                </p>

                {/* Tags de tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-surface-2 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* El link solo aparece si el proyecto tiene github (&&) */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-accent hover:text-accent-strong transition-colors"
                  >
                    Ver en GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
