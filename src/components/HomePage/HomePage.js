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
          <Link to={`/projects/${project.id}`} key={project.id}>
            <Card className="project-card">
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{shortDescription}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;

