export default function Projects() {
  const projects = [
    {
      title: "CI/CD Pipeline Optimization",
      description: "Designed CI/CD pipelines (Azure DevOps/Jenkins), reducing deployment time by 40% through YAML optimization",
      technologies: ["Azure DevOps", "YAML", "Jenkins"]
    },
    {
      title: "Infrastructure Automation",
      description: "Automated infrastructure using Terraform & ARM Templates, standardizing 25+ deployments across environments",
      technologies: ["Terraform", "ARM Templates", "Azure"]
    },
    {
      title: "Cost-Saving Automations",
      description: "Implemented PowerShell scripts for VM scheduling, cutting cloud spend by 15%",
      technologies: ["PowerShell", "Azure Automation"]
    },
    {
      title: "Kubernetes Cost Optimizer",
      description: "Developed PowerShell scripts to auto-scale AKS nodes based on workload, saving $8k/month",
      technologies: ["AKS", "PowerShell", "Kubernetes"]
    },
    {
      title: "Security Enhancement",
      description: "Enhanced security via RBAC policies and private endpoints, reducing unauthorized access risks by 30%",
      technologies: ["RBAC", "Private Endpoints", "Azure Security"]
    },
    {
      title: "Legacy VM Migration",
      description: "Migrated 50+ legacy VMs to Azure PaaS (App Services/Functions), reducing maintenance overhead",
      technologies: ["Azure Migration", "App Services", "Azure Functions"]
    }
  ]

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects & Achievements</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
