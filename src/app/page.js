'use client'

import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import certificates from '../data/certifications'
import CertificateCard from '../components/CertificationCard'
import Image from 'next/image'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [resumeDownloaded, setResumeDownloaded] = useState(false) // Added state variable

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const handleResumeDownload = () => {
    setResumeDownloaded(true)
    // Simulate a download by creating a link and clicking it
    const link = document.createElement('a')
    link.href = '/resume/Resume_Himanko_Boruah.pdf' // Replace with the path to your resume
    link.download = 'Himanko_Boruah_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>

        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
              Himanko Boruah
            </h1>
            
            {/* Ribbon divider */}
            <div className="flex justify-center my-6 fade-in-up">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>

            <p className="text-xl text-gray-600 mb-8">
              Data Science & Analytics Professional
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16" id="projects">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              {['All', 'Analytics', 'Data Science'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-secondary text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">  
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Certifications Section */}
        <section className="py-12 px-6 max-w-6xl mx-auto" id="certifications">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <CertificateCard key={index} certificate={certificate} />
            ))}
          </div>

        </section>

        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
                src="/profile/profilePic.png" 
                alt="Himanko Boruah"
                width={300}
                height={300}
                className="rounded-full mx-auto"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About Me
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                I am a passionate data scientist with expertise in data analysis, machine learning, and cloud computing. I enjoy solving complex problems and turning data into actionable insights.
              </p>
              <button
                onClick={handleResumeDownload}
                className="px-6 py-3 bg-secondary text-white rounded-lg transition-transform transform hover:scale-105"
              >
                {resumeDownloaded ? 'Downloaded' : 'Download Resume'}
              </button>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  )
}