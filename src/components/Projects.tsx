import React, { useState } from 'react';
import { Github as GitHub, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Configuration and Deployment on AWS EKS',
      description: 'Automated cloud infrastructure provisioning using AWS services (EC2, S3, RDS, EKS) and Terraform, reducing setup time by 50%. Implemented Infrastructure as Code (IaC) with Terraform for scalable, repeatable cloud infrastructure, ensuring consistency across multiple environments.',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['AWS', 'Terraform', 'EC2', 'S3', 'EKS', 'CloudFormation'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 2,
      title: 'MERN Stack Application with Docker Compose',
      description: 'Built a 3-tier MERN stack application using Docker Compose for seamless orchestration of services. The project consists of a React frontend, a Node.js backend with Express, and a MongoDB database, all containerized for easy deployment. Docker networking ensures communication between services, while persistent MongoDB data storage is handled via local volumes. The application is fully scalable and deployable using Docker commands or Docker Compose. This solution showcases expertise in containerization and full-stack application development.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'MERN Stack'],
      githubUrl: 'https://github.com/Sreenu827/MERN-Application-using-docker-compose.git'
    },
    {
      id: 3,
      title: 'upload_jenkins_build_logs',
      description: 'his is a simple Bash script that automates the process of backing up Jenkins build logs to an AWS S3 bucket. The script iterates through Jenkins job directories, checks if the build log was created today, and if so, uploads the log file to a specified S3 bucket with the job name and build number as the filename',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Shell', 'Scripting', 'AWS', 'Amazon S3', 'Automation'],
       
      githubUrl: 'https://github.com/Sreenu827/upload_jenkins_build_logs.git',
      liveUrl: 'https://example.com'
    },
    {
      id: 4,
      title: 'Containerized Microservices Architecture',
      description: 'Designed and implemented a containerized microservices architecture using Docker and Kubernetes. Created a scalable and resilient system with automated deployment, scaling, and management of containerized applications.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Docker', 'Kubernetes', 'Microservices', 'API Gateway', 'Service Mesh'],
      githubUrl: 'https://github.com/Sreenu827/ci-cd-Kubernetes-integration'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience in cloud technologies, DevOps, and software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-blue-600/80 text-white text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600/80 text-white text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {project.description.length > 150 
                    ? `${project.description.substring(0, 150)}...` 
                    : project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                      <GitHub size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                  
                  <button 
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                    onClick={() => setHoveredProject(hoveredProject === project.id ? null : project.id)}
                  >
                    {hoveredProject === project.id ? 'Less Details' : 'More Details'}
                  </button>
                </div>
                
                {hoveredProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;