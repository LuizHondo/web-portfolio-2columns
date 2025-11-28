function Projects({ projects }) {
  function imageRenderer(image) {
    return;
  }

  return (
    <div className="projects__container">
      <div className="projects__content">
        {projects.map((project, index) => (
          <img
            className="projects__image"
            src={project.url}
            alt={`Project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
