// Mock data for Abhijit DevOps Portfolio

export const personalInfo = {
  name: "Abhijit Ray",
  nickname: "Abhi",
  title: "Aspiring DevOps & Cloud Engineer",
  subtitle: "AWS Certified, OCI 2025 DevOps Professional",
  tagline: "Automating infrastructure, deployments, and cloud workflows",
  email: "roy055659@gmail.com",
  github: "https://github.com/abhijitray7810/",
  linkedin: "https://www.linkedin.com/in/abhijitray7810/",
  profileImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
};

export const aboutText = {
  intro: "I'm a DevOps & Cloud Engineer in the making, focused on automation, cloud-native architecture, and scalable systems.",
  expertise: "With hands-on experience in AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines, I enjoy designing reproducible infrastructure and streamlining deployments through code.",
  philosophy: "I believe DevOps is not just tools—it's about reliability, efficiency, and continuous improvement.",
  current: "Currently building projects, earning certifications, and sharing real-world DevOps insights."
};

export const highlightCards = [
  {
    id: 1,
    title: "Experience",
    value: "Self-learning Projects",
    description: "Personal Projects"
  },
  {
    id: 2,
    title: "Technologies",
    value: "10+",
    description: "DevOps Tools Mastered"
  },
  {
    id: 3,
    title: "Specialties",
    value: "Cloud & IaC",
    description: "AWS, OCI, Terraform"
  },
  {
    id: 4,
    title: "Achievements",
    value: "AWS Certified",
    description: "Cloud Practitioner"
  }
];

export const skills = [
  { name: "AWS", percentage: 85, category: "Cloud" },
  { name: "OCI", percentage: 75, category: "Cloud" },
  { name: "Terraform", percentage: 80, category: "IaC & Automation" },
  { name: "Ansible", percentage: 75, category: "IaC & Automation" },
  { name: "Docker", percentage: 85, category: "Containers" },
  { name: "Kubernetes", percentage: 70, category: "Containers" },
  { name: "Jenkins", percentage: 75, category: "CI/CD" },
  { name: "GitHub Actions", percentage: 80, category: "CI/CD" },
  { name: "GitLab CI", percentage: 70, category: "CI/CD" },
  { name: "Python", percentage: 70, category: "Scripting" },
  { name: "Shell", percentage: 75, category: "Scripting" },
  { name: "Linux & Git", percentage: 85, category: "Core" }
];

export const services = [
  {
    id: 1,
    title: "Real-world DevOps Projects",
    description: "Building production-grade infrastructure and automation solutions using industry best practices."
  },
  {
    id: 2,
    title: "Cloud Infrastructure Simulations",
    description: "Designing and deploying scalable cloud architectures on AWS and OCI platforms."
  },
  {
    id: 3,
    title: "CI/CD Pipeline Automation",
    description: "Creating automated deployment pipelines with Jenkins, GitHub Actions, and GitLab CI."
  },
  {
    id: 4,
    title: "Containerization & Kubernetes",
    description: "Orchestrating containerized applications with Docker and Kubernetes for high availability."
  }
];

export const projects = [
  {
    id: 1,
    title: "AWS-Powered Static E-Commerce Deployment (Terraform + Docker)",
    description: "Successfully deployed a static e-commerce website using AWS and Terraform, configured S3 static hosting, secure IAM policies, and Dockerized the application.",
    image: "https://github.com/abhijitray7810/AWS-Powered-Static-E-Commerce-Deployment-Terraform-Docker/blob/1fafdcf3e364f3d7dfbccdd45c5d0e2129ae66a1/Architecture/Website-1.png?raw=true",
    link: "https://github.com/abhijitray7810/AWS-Powered-Static-E-Commerce-Deployment-Terraform-Docker",
    technologies: ["AWS", "Terraform", "Docker", "S3"]
  },
  {
    id: 2,
    title: "Custom Apache Docker Image — Stratos DC",
    description: "Built a custom Apache web server Docker image with optimized configurations for production deployment.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop",
    link: "https://github.com/abhijitray7810/Docker-Practice-100/tree/main/Day-15%3A%20Write%20a%20Docker%20File",
    technologies: ["Docker", "Apache", "Linux"]
  },
  {
    id: 3,
    title: "Dockerized PHP–MariaDB Stack Deployment",
    description: "Containerized a full-stack application with PHP and MariaDB, implementing multi-container orchestration.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    link: "https://github.com/abhijitray7810/100-days-of-devops-kodekloud/tree/main/Day%2046%3A%20Deploy%20an%20App%20on%20Docker%20Containers",
    technologies: ["Docker", "PHP", "MariaDB"]
  },
  {
    id: 4,
    title: "Kubernetes Time-Check Pod — DevOps Automation Task",
    description: "Automated time-based tasks using Kubernetes CronJobs and pod scheduling for DevOps workflows.",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&h=600&fit=crop",
    link: "https://github.com/abhijitray7810/Kubernetes-Work/tree/main/Kubernetes%20Time-Check%20Pod",
    technologies: ["Kubernetes", "YAML", "Pods"]
  },
  {
    id: 5,
    title: "Ansible Email App Deployment",
    description: "Automated email application deployment using Ansible playbooks for configuration management.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    link: "https://github.com/abhijitray7810/Ansible-Email-App",
    technologies: ["Ansible", "YAML", "Automation"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "DevOps Lead at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    feedback: "Abhijit's approach to infrastructure automation is impressive. His Terraform and AWS skills are top-notch, and he consistently delivers clean, maintainable code."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Cloud Architect at CloudScale",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    feedback: "Working with Abhijit on containerization projects was a great experience. His Docker and Kubernetes expertise helped us achieve seamless deployments."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Senior DevOps Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    feedback: "Abhijit's CI/CD pipeline implementations are efficient and well-documented. His dedication to learning and applying best practices is commendable."
  }
];

export const experience = [
  {
    id: 1,
    period: "Mar 2025 - Present",
    title: "Self-learning Projects",
    description: "Personal Projects focused on DevOps automation and cloud infrastructure"
  }
];