import { FiClock } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ScalingAIEnterprise() {
  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.ZMhwWu14APO2USUE7gw2YgHaEK?pid=Api&P=0&h=180"
            alt="AI Infrastructure"
            className="w-full bg-gradient-to-r from-blue-900 to-blue-700 "
          />

          <div>
            <span className="uppercase tracking-wide text-sm text-gray-500">
              Data Center
            </span>

            <h1 className="text-4xl font-light mt-4 mb-4">
              Scaling AI in the Enterprise
            </h1>

            <div className="flex items-center gap-3 text-sm text-gray-600">
              <FiClock /> 3 min read
            </div>

            <p className="text-blue-600 mt-4 font-medium">Will Eatherton</p>
          </div>
        </div>

        {/* CONTENT */}
        <article className="space-y-10 text-gray-700 leading-relaxed text-lg">
          <p>
            AI workloads are rapidly pushing the limits of traditional data
            center infrastructure. Training and inferencing large-scale models
            demand unprecedented levels of performance, scalability, security,
            and operational discipline.
          </p>

          <p>
            To address these challenges, AekSec and NVIDIA are delivering
            validated, enterprise-ready AI infrastructure that unifies compute,
            networking, security, and observability into a cohesive
            architecture.
          </p>

          <h2 className="text-2xl font-medium text-black">
            A fabric built for AI at scale
          </h2>

          <p>
            At the core of this approach lies the integration of NVIDIA
            Spectrum-X networking with Cisco Silicon One–based switching. This
            combination enables deterministic performance, low latency, and
            predictable throughput across massive AI clusters.
          </p>

          <p>
            Enterprises benefit from a unified operational model that simplifies
            deployment while supporting heterogeneous workloads across training,
            inferencing, and edge environments.
          </p>

          <h3 className="text-xl font-semibold text-black">Key takeaways</h3>

          <ul className="list-disc pl-6 space-y-4">
            <li>
              Reference architectures optimized for NVIDIA accelerated computing
              and high-performance Ethernet fabrics.
            </li>
            <li>
              Enhanced fabric-wide awareness through NVIDIA SuperNICs and
              BlueField DPUs.
            </li>
            <li>
              Integrated security and observability for AI workloads at scale.
            </li>
          </ul>

          <p>
            As AI adoption accelerates, enterprises that invest in scalable,
            secure, and flexible infrastructure will be best positioned to turn
            innovation into lasting competitive advantage.
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
}
