"use client";
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ParticleBackground } from "@/components/particle-background";
import { useState } from "react";

export default function Portfolio() {
  const [showParticles, setShowParticles] = useState(true);

  return (
    <div className="relative min-h-screen">
      {showParticles && <ParticleBackground />}

      <div className="max-w-3xl mx-auto px-4 py-12 relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold  mb-1">Vineet Shah</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Software Engineer
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://github.com/vtshah"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FiGithub size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://x.com/_VineetShah"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FiTwitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/vtshah/"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FiLinkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.youtube.com/@VineetShahT"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FiYoutube size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
          <button
            onClick={() => setShowParticles(!showParticles)}
            className="mt-4 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {showParticles ? "Disable particles" : "Enable particles"}
          </button>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">About</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Hi, I'm Vineet! I'm a founding engineer at{" "}
              <Link
                href="https://www.getflipturn.com"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Flipturn
              </Link>
              , an EV charging platform. Previously, I worked at{" "}
              <Link
                href="https://www.samsara.com"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Samsara
              </Link>
              , an IOT company.
            </p>
            <p>
              I studied computer science at the University of Maryland, College
              Park.
            </p>
            <p>
              I interned at{" "}
              <Link
                href="https://www.samsara.com"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Samsara
              </Link>
              ,{" "}
              <Link
                href="https://aws.amazon.com"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                AWS
              </Link>
              ,{" "}
              <Link
                href="https://www.finra.org"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                FINRA
              </Link>
              , and{" "}
              <Link
                href="https://www.weatherbug.com"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Weatherbug
              </Link>
              .
            </p>
            <p>
              Outside of work, I also did a VC fellowship at{" "}
              <Link
                href="https://www.comma.vc"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Comma Capital
              </Link>
              , and served on the board for the{" "}
              <Link
                href="https://www.yja.org"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Young Jains of America
              </Link>
              .
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6 dark:text-white">
            Projects
          </h2>

          <div className="p-8 text-center border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
              Coming soon...
            </h3>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          Built with{" "}
          <Link
            href="https://exponent.run"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            exponent.run
          </Link>
        </footer>
      </div>
    </div>
  );
}
