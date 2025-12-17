const journey = [
  {
    years: "Jun 2021 - Sep 2025",
    role: "Diseñador Web & Frontend",
    institution: "Ministerio de Cultura – Proyecto Bicentenario",
  },
  {
    years: "Mar 2016 - Jun 2021",
    role: "Diseñador Gráfico / Web",
    institution: "Universidad San Ignacio de Loyola",
  },
  {
    years: "Sep 2015 - Mar 2016",
    role: "Diseñador Gráfico",
    institution: "MADISON Experience Marketing",
  },
  
  {
    years: "Ene 2018 - Oct 2023",
    role: "Ingeniería de Sistemas",
    institution: "UPC",
  },
  {
    years: "Ene 2011 - Dic 2015",
    role: "Arte y Diseño Empresarial",
    institution: "USIL",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Educación & <span className="text-accent">Experiencia</span>
      </h2>
      {journey.map((item, index) => {
        const { institution, role, years } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            {/* bullets */}
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-px h-[180px] bg-primary/90"></div>
            </div>
            {/* text */}
            <div className="max-w-[500px]">
              <p className="mb-6 text-lg text-secondary/50">{years}</p>
              <h4 className="h4 mb-2">{role}</h4>
              <p className="text-lg text-secondary/50">{institution}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
