// About: dos columnas (trayectoria académica e industria/aplicada).
// Guardamos el contenido en arrays para no repetir JSX y poder editar fácil.

const academic = [
  {
    title: "M.Sc. in Astronomy — UNAL (ongoing until 2027)",
    detail:
      "Thesis: ML applied to predicting molecular abundances in the interstellar medium.",
  },
  {
    title: "Physicist — Universidad Nacional de Colombia",
    detail: "2020–2025 · GPA 4.6/5.0",
  },
  {
    title: "Scientific publication — eSPECTRA (2024)",
    detail:
      "“Implementation of convolutional neural networks for feature extraction from black hole images.”",
  },
  {
    title: "Summer schools",
    detail:
      "UNAM (astrophysics/radio astronomy) | AstroTwinCoLO (gravitational lensing · U. Antioquia & Leiden).",
  },
];

const industry = [
  {
    title: "Urban mobility analysis — TEC Monterrey",
    detail: "Clustering and reproducible metrics on GPS data.",
  },
  {
    title: "OCR and information digitization ",
    detail: "ETL pipeline to digitize and analyze information from PDF documents using OCR with Pytesseract and Pillow.",
  },
  {
    title: "Research internship — RECA",
    detail: "Computational astrochemistry and simulation pipelines.",
  },
  {
    title: "NASA Space Apps Challenge",
    detail: "4th place globally · seismic event detection (96% accuracy).",
  },
  {
    title: "Climate GEO-Hackathon",
    detail: "1st place · analysis of climate trends and correlations.",
  },
  {
    title: "Python instructor — Kodland",
    detail: "Python fundamentals and project-oriented best practices.",
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
    <section id="trayectory" className="bg-navy text-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-bold mb-2 text-center">Trayectory</h2>
        <p className="text-slate-400 text-center mb-12">
          Two complementary tracks.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <TrackColumn
            heading="Academic"
            accentClass="text-accent"
            items={academic}
          />
          <TrackColumn
            heading=" Industry"
            accentClass="text-accent"
            items={industry}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
