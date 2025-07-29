import CardComponent from '../components/CardComponent';
import './ProjectsPage.css';

const projectsData = [
  {
    id: 1,
    title: "TODO List",
    description: "Una pequeña forma de ver manejar tus tareas y oganizar tu tiempo",
    category: "Web App",
    imageUrl: "./Todo.png"
    , redirectPage: "todo",
    tags: ["Node js", "Javascript", "Next js", "Postrges Sql", "React", "Express",]
  },
  {
    id: 2,
    title: "PokeDex",
    description: "PokeDex donde usando la poke api podras buscar entre una gran selecion de pokemons y ver su informacion, usando tailwindcss para los estilos y animaciones",
    category: "web App",
    imageUrl: "./Pokedex.png"
    , redirectPage: "pokedex",
    tags: ["Javascript", "Tailwind CSS", "Next js", "React"]

  },
  {
    id: 3,
    title: "PlanTweet",
    description: "Una pequeña copia de tweeter con tematioca de jardin",
    category: "Web App",
    imageUrl: "./PlanTweet.png"
    , redirectPage: "plantweet",
    tags: ["Node js", "Typescript", "Postrges Sql", "Next js", "React", "Express", "Tailwind CSS"]


  },
  {
    id: 4,
    title: "MazeSnail",
    description: "UN juego de laberintos en donde llevaras a un caracol que busca curzar un jardin",
    category: "Web App",
    imageUrl: "./PlantLaybirth.png"
    , redirectPage: "maze",
    tags: ["Javascript", "TypeScript", "Next js", "React"]


  }
];

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1>Mis Proyectos</h1>
        <p className="subtitle">Una selección de mis trabajos recientes</p>
      </header>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <a key={index} href={project.redirectPage}>
            <CardComponent key={index} imageUrl={project.imageUrl} title={project.title} tags={project.tags} description={project.description} />

          </a>
        ))}
      </div>
    </div>
  );
};


export default ProjectsPage;