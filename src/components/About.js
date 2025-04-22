export default function About() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4">
            Azure Cloud & DevOps Engineer with 2+ years specializing in CI/CD automation, 
            Infrastructure as Code (IaC), and Azure cost optimization.
          </p>
          <p className="mb-4">
            I'm passionate about building scalable cloud solutions and optimizing 
            infrastructure for performance and cost efficiency.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://linkedin.com/in/sagar-giragani" target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
              LinkedIn
            </a>
            <a href="mailto:sagargoud2606@gmail.com" className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 transition">
              Email Me
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
          <ul className="space-y-2">
            <li>✔️ CI/CD Pipeline Automation</li>
            <li>✔️ Infrastructure as Code (Terraform, ARM)</li>
            <li>✔️ Azure Cloud Architecture</li>
            <li>✔️ Kubernetes & Containerization</li>
            <li>✔️ Cost Optimization Strategies</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
