export default function Resume() {
  const handleDownload = () => {
    // This assumes your resume is in the public folder named 'resume.pdf'
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Sagar_Giragani_Resume.pdf'
    link.click()
  }

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">My Resume</h2>
      <div className="bg-gray-800 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold">Sagar Giragani</h3>
            <p className="text-gray-300">Azure Cloud & DevOps Engineer</p>
          </div>
          <button
            onClick={handleDownload}
            className="mt-4 md:mt-0 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Download Resume
          </button>
        </div>
        
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Professional Experience</h4>
          <div className="mb-4">
            <h5 className="font-medium">Azure DevOps Engineer at Sukranth Technologies</h5>
            <p className="text-gray-400 text-sm mb-2">Present – 2+ years — Hyderabad, India</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Designed CI/CD pipelines (Azure DevOps/Jenkins), reducing deployment time by 40% through YAML optimization</li>
              <li>Automated infrastructure using Terraform & ARM Templates, standardizing 25+ deployments across environments</li>
              <li>Implemented cost-saving automations (PowerShell scripts for VM scheduling), cutting cloud spend by 15%</li>
              <li>Enhanced security via RBAC policies and private endpoints, reducing unauthorized access risks by 30%</li>
              <li>Delivered automated multi-stage pipelines (DEV/QA/PROD), improving release efficiency by 25%</li>
              <li>Configured Load Balancers & Traffic Manager to achieve 99.95% uptime for critical financial applications</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Key Achievements</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>35% reduction in deployment failures through pipeline optimization and automated testing</li>
            <li>20% increase in system uptime via proactive monitoring (Azure Monitor alerts)</li>
            <li>Migrated 50+ legacy VMs to Azure PaaS (App Services/Functions), reducing maintenance overhead</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Education</h4>
          <div>
            <h5 className="font-medium">Bachelor of Science in Computer Science</h5>
            <p className="text-gray-400 text-sm">Chaitanya Degree College, Hanamkonda — 2019 – 2022</p>
            <p className="text-gray-400 text-sm">CGPA: 8.5/10.0</p>
          </div>
        </div>
      </div>
    </section>
  )
}
