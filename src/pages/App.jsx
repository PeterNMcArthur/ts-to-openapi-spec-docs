import React from 'react';
import '../styles/App.css';
import AnimatedHeroPage from '../components/AnimatedHeroPage';

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <AnimatedHeroPage />
      <div className="relative container z-10">
        <header className="header">
          <h1 className="text-6xl font-bold mb-4">TypeScript OpenAPI Generator</h1>
          <p className="text-xl text-blue-200">
            Generate OpenAPI specifications from TypeScript types for distributed typescript projects.
          </p>
        </header>

        <main>
          <section className="features">
            <h2 className="text-3xl font-semibold mb-4 text-slate-900">Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Generate AWS Lambda functions from OpenAPI specs</li>
              <li>TypeScript support out of the box</li>
              <li>Automatic request validation</li>
              <li>Easy integration with existing AWS infrastructure</li>
              <li>Comprehensive test coverage</li>
            </ul>
          </section>

          <section className="installation">
            <h2 className="text-3xl font-semibold mb-4 text-slate-900">Installation</h2>
            <pre className="bg-gray-800 p-4 rounded-lg"><code className="text-blue-200">npm install typescript-openapi-generator</code></pre>
          </section>

          <section className="cta">
            <a 
              href="https://github.com/PeterNMcArthur/typescript-openapi-generator" 
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
