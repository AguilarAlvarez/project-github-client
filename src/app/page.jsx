import CardComponent from '../components/CardComponent';
import './ProjectsPage.css';

const projectsData = [
  {
    id: 1,
    title: "TODO List",
    description: "Una pequeña forma de ver manejar tus tareas y oganizar tu tiempo",
    category: "Web App",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    , redirectPage: "todo"
  },
  {
    id: 2,
    title: "PokeDex",
    description: "PokeDex donde usando la poke api podras buscar entre una gran selecion de pokemons y ver su informacion, usando tailwindcss para los estilos y animaciones",
    category: "web App",
    imageUrl: "./Pokedex.png"
    , redirectPage: "pokedex"

  },
  {
    id: 3,
    title: "Portafolio Creativo",
    description: "Diseño minimalista para mostrar trabajos de diseño gráfico.",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    , redirectPage: "todo"

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
          <a href={project.redirectPage}>
            <CardComponent key={index} imageUrl={project.imageUrl} title={project.title} description={project.description} />

          </a>
        ))}
      </div>
    </div>
  );
};


export default ProjectsPage;