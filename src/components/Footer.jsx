export default function Footer() {
    return (
      <footer className="bg-yellow-300 text-blue py-8" id="contact">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-bold">Himanko Boruah</p>
              <p className="text-gray-600">Data Scientist & Analyst</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/himankoboruah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/himanko"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Himanko Boruah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
