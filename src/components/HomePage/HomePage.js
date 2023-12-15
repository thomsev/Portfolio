import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './HomePage.css'; 
import projects from '../../data/projectsData';

const HomePage = () => {
  return (
    <div className="project-list">
      {projects.map((project) => {
        const shortDescription = project.description.length > 100 
          ? `${project.description.slice(0, 100)}...` 
          : project.description;

        return (
          <Card className="project-card" key={project.id}>
            <Link to={`/projects/${project.id}`} className="text-decoration-none">
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{shortDescription}</Card.Text>
              </Card.Body>
            </Link>
            <div className="project-card-actions">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                GitHub Repo
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                  Live Site
                </a>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default HomePage;

