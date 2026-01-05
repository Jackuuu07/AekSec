import { FiClock, FiMessageCircle } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AgenticEraArticle() {
  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* META */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
          <span>June 10, 2025</span>
          <span className="flex items-center gap-1 text-blue-600 cursor-pointer">
            <FiMessageCircle /> 26 Comments
          </span>
        </div>

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.E0yEvGDqXof63L66vR1r3AHaEK?pid=Api&P=0&h=180"
            alt="Agentic AI"
            className="rounded-2xl w-full"
          />

          <div>
            <span className="uppercase tracking-wide text-sm text-gray-500">
              Executive Platform
            </span>

            <h1 className="text-4xl font-light mt-4 mb-4">
              Welcome to the Agentic Era: Humans + Agents Achieving More,
              Together
            </h1>

            <div className="flex items-center gap-3 text-sm text-gray-600">
              <FiClock /> 3 min read
            </div>

            <p className="text-blue-600 mt-4 font-medium">DJ Sampath</p>
          </div>
        </div>

        {/* CONTENT */}
        <article className="space-y-10 text-gray-700 leading-relaxed text-lg">
          <p>
            The world’s biggest challenges—whether transforming global
            businesses, accelerating scientific discovery, or addressing
            pressing societal issues—are too complex for humans or AI to solve
            alone. The real breakthrough emerges when humans and intelligent
            systems collaborate seamlessly.
          </p>

          <p>
            Welcome to the agentic era: a new chapter where autonomous AI agents
            work alongside people, combining human creativity, judgment, and
            ethics with machine speed, scale, and precision. This convergence
            enables outcomes that were previously unattainable.
          </p>

          <h2 className="text-2xl font-medium text-black">
            From apps to agents
          </h2>

          <p>
            For decades, software applications have served as tools that
            required explicit instructions and constant human supervision.
            However, the paradigm is shifting rapidly. Agentic AI systems are
            capable of perceiving context, making decisions, executing actions,
            and learning continuously within complex environments.
          </p>

          <p>
            Unlike traditional automation, agents do not simply respond to
            inputs. They proactively reason across systems, orchestrate
            workflows, and adapt dynamically as conditions evolve. This marks a
            fundamental shift in how organizations interact with technology.
          </p>

          <h3 className="text-xl font-semibold text-black">
            What sets agents apart
          </h3>

          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Autonomous action:</strong> Agents execute tasks
              end-to-end, coordinating across tools, APIs, and systems without
              constant human oversight.
            </li>
            <li>
              <strong>Memory and context:</strong> Powered by large language
              models and fine-tuned domain expertise, agents retain historical
              knowledge and contextual awareness.
            </li>
            <li>
              <strong>Goal-driven behavior:</strong> Agents operate with clear
              objectives, optimizing outcomes rather than completing isolated
              tasks.
            </li>
          </ul>

          <p>
            As enterprises adopt agentic systems, success will depend on
            building secure, observable, and governable AI foundations—ensuring
            trust, accountability, and alignment with human values.
          </p>
        </article>
      </section>

      <Footer />
    </>
  );
}
