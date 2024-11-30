import React from 'react';
import '../styles/App.css';
import AnimatedHeroPage from '../components/AnimatedHeroPage';

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <AnimatedHeroPage />
      <div className="relative container z-10">
        <header className="header">
          <h1>TypeScript OpenAPI Generator</h1>
          <p className="description">
            Generate OpenAPI specifications from TypeScript types for distributed typescript projects.
          </p>
        </header>

        <main>
          <section className="features">
            <h2>Features</h2>
            <ul>
              <li>Generate AWS Lambda functions from OpenAPI specs</li>
              <li>TypeScript support out of the box</li>
              <li>Automatic request validation</li>
              <li>Easy integration with existing AWS infrastructure</li>
              <li>Comprehensive test coverage</li>
            </ul>
          </section>

          <section className="installation">
            <h2>Installation</h2>
            <pre><code>npm install typescript-openapi-generator</code></pre>
          </section>

          <section className="cta">
            <a 
              href="https://github.com/PeterNMcArthur/typescript-openapi-generator" 
              className="github-link"
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
