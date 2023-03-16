import Link from "next/link";

const About = () => {
  return (
    <div className="ml-10 mr-10 mt-3">
      <h1 className="text-center mb-5">Project Details</h1>
      <div>
        <h2>Language</h2>
        <p>JavaScript</p>
        <h2 className="mt-2">React Framework</h2>
        <p>Next.js</p>
        <h2 className="mt-2">Styling</h2>
        <p>Tailwind CSS</p>
        <h2 className="mt-2">Charting</h2>
        <p>D3.js</p>
        <h2 className="mt-2">Package Manager</h2>
        <p>npm</p>
        <h2 className="mt-2">Version Control</h2>
        <p>GitHub</p>
        <h2 className="mt-2">Deployment</h2>
        <p>Netlify</p>
        <h2 className="mt-2">API</h2>
        <p>CoinGecko</p>
      </div>
    </div>
  );
};

export default About;
