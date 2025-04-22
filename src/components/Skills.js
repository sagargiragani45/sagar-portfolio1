export default function Skills() {
  const skills = [
    { category: 'Cloud Platforms', items: ['Microsoft Azure (IaaS/PaaS)'] },
    { category: 'DevOps Tools', items: ['Azure DevOps', 'GitHub Actions', 'Docker', 'Kubernetes (AKS, EKS)', 'Helm'] },
    { category: 'IaC & Scripting', items: ['Terraform', 'ARM Templates', 'PowerShell', 'Bash', 'Python'] },
    { category: 'Monitoring & Security', items: ['Azure Monitor', 'Log Analytics', 'Application Insights', 'RBAC', 'Private Endpoints'] },
    { category: 'Networking', items: ['Load Balancers', 'Traffic Manager', 'VNet Peering', 'Site-to-Site VPN', 'DNS'] }
  ]

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h3>
            <ul className="space-y-2">
              {skillGroup.items.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
