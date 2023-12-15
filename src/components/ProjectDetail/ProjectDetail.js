import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './ProjectDetail.css'; 
import projects from '../../data/projectsData';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
  
    if (!project) {
      return <p>Project not found!</p>;
    }

    return (
        <div className="project-detail-container">
          <Card className="project-detail">
            <Card.Img variant="top" src={project.imageUrl} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              
              {project.features && (
                <>
                  <h3>Features</h3>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
    
              {project.builtWith && (
                <>
                  <h3>Built With</h3>
                  <ul>
                    {project.builtWith.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}
    
              {project.gettingStarted && (
                <>
                  <h3>Getting Started</h3>
                  <ol>
                    {project.gettingStarted.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </>
              )}
    
              <Link to={project.repoUrl} target="_blank" className="btn btn-primary">GitHub Repo</Link>
              {project.liveUrl && <Link to={project.liveUrl} target="_blank" className="btn btn-success">Live Site</Link>}
            </Card.Body>
          </Card>
        </div>
      );
    };
    
    export default ProjectDetail;
