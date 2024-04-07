import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './Projects.scss';

function Project() {
  // Define your projects data
  const projects = [
    { 
        title: 'Feedback Manager (Spring Boot & React)',
        description: 'A feedback management system where users provide ratings via barcode scanning. Data is stored in the database and analyzed using Adobe Analytics and various graphs to provide business insights and recommendations.',
        githubUrl: 'https://github.com/samyakOO7/Feedback-Manager'
      },
    { 
      title: 'Finance Manager (Spring Boot & React)',
      description: 'A finance management application allowing users to manage transactions, expenses, budgets, and expense splitting. Built with Spring Boot and React.',
      githubUrl: 'https://github.com/samyakOO7/FinanceManager.git'
    },
    { 
      title: 'Ringer Scheduler (Flutter)',
      description: 'A Flutter application for scheduling phone ringer changes, providing silent, vibrate, or sound mode options. Features include history tracking and alarm-like functionality.',
      githubUrl: 'https://github.com/samyakOO7/RingerScheduler'
    },
    { 
      title: 'Invoice Listing Application (Spring Boot & React)',
      description: 'An invoice listing application for managing transactions from various banks. Built with Spring Boot and React.',
      githubUrl: 'https://github.com/samyakOO7/ABC_Products-Invoice-Listing-HRC'
    },
  ];

  return (
    <div className="project-container">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Card key={index} className="project-card">
            <CardContent>
              <Typography variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Button variant="outlined" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Project;
