
const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://substantial-diascia.glitch.me/projects')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setProjects(res);
    })
  }, []);

  return (
    <div className="projects-container">
      {projects.length > 0 ? (
        projects.map(project => (
          <div className="project" key={project.id}>
            <img src={project.img_url} alt={project.name} />
            <div className="project-info">
              <p>{project.description}</p>
              <small>
                <strong>Tags:</strong> {project.tags.join(', ')}
              </small>
              <div className="btn-container">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  See Project
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading Projects</p>
      )}
    </div>
  );
  
}

export default App;
