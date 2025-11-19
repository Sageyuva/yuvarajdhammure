import React from 'react';
import Image from 'next/image';

// Importing logos from the assets folder (SVGs and PNGs)
import JavaScriptLogo from '@/assets/JavaScript.png';
import ReactLogo from '@/assets/reactlogo.svg';
import NextjsLogo from '@/assets/Nextjslogo.svg';
import HtmlLogo from '@/assets/html.png';
import CssLogo from '@/assets/css.png';
import BootstrapLogo from '@/assets/Bootstrap.png';
import TailwindLogo from '@/assets/tailwind.png';
import MongodbLogo from '@/assets/mongo.png';
import GitLogo from '@/assets/Git.png';
import GithubLogo from '@/assets/GitHub.png';
import VscodeLogo from '@/assets/Visual.png';
import FigmaLogo from '@/assets/Figma.png';
import VercelLogo from '@/assets/Vercel.png';

const Skills = () => {
  return (
    <section id='skills' className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold">My Skills</h2>
        <p className="mt-2 text-lg text-gray-400">
          Technologies and tools I’ve worked with throughout my projects and experience
        </p>

        {/* Front End Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Front End</h3>
          <div className="mt-6 flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={JavaScriptLogo} alt="JavaScript" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={ReactLogo} alt="React.js" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">React.js</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={NextjsLogo} alt="Next.js" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">Next.js</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={ReactLogo} alt="React Native" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">React Native</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={HtmlLogo} alt="HTML" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={CssLogo} alt="CSS" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={BootstrapLogo} alt="Bootstrap" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={TailwindLogo} alt="Tailwind CSS" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Databases Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Databases</h3>
          <div className="mt-6 flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={MongodbLogo} alt="MongoDB" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">MongoDB</p>
            </div>
          </div>
        </div>

        {/* Version Control Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Version Control</h3>
          <div className="mt-6 flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={GitLogo} alt="Git" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">Git</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={GithubLogo} alt="GitHub" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">GitHub</p>
            </div>
          </div>
        </div>

        {/* Tools & Platforms Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Tools & Platforms</h3>
          <div className="mt-6 flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={VscodeLogo} alt="VS Code" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">VS Code</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={FigmaLogo} alt="Figma" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">Figma</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Image src={VercelLogo} alt="Vercel" width={40} height={40} />
              </div>
              <p className="mt-2 text-sm">Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;