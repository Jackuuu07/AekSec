import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AiNexsus() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-28">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <p className="text-sm font-medium text-blue-700 mb-4">
              AekSec Nexus HyperFabric
            </p>

            <h1 className="text-5xl font-light text-gray-900 leading-tight mb-6">
              Build unlimited data center fabrics—
              <br />
              quickly, easily, anywhere
            </h1>

            <p className="text-gray-600 max-w-xl mb-10">
              Scale high-performance data center fabrics across on-prem, hybrid,
              and cloud environments with the simplified, cloud-managed
              architecture of AekSec Nexus HyperFabric.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                Free trial
              </button>
              <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                Watch video (01:00)
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full">
            <img
              src="https://thumbs.dreamstime.com/b/data-science-big-data-technology-data-scientists-compute-analyze-visualize-complex-data-sets-computers-data-science-358142047.jpg"
              alt="AekSec HyperFabric Dashboard"
              className=""
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-light mb-6">
            Simple, automated, and flexible
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-20">
            Let AekSec Nexus HyperFabric handle the complexity. Teams of all
            skill levels can deploy, operate, and scale data center fabrics
            using a unified cloud-managed experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="bg-gray-50 p-8 rounded-xl">
            <img src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/networking/data-center-networking/nexus-hyperfabric/icon-hyperfabric-simplicity.svg" className="w-20"/>
              <h3 className="text-xl font-medium mb-3">
                Easy lifecycle management
              </h3>
              <p className="text-gray-600">
                From initial design to deployment and continuous monitoring,
                HyperFabric streamlines the full data center lifecycle.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <img src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/networking/data-center-networking/nexus-hyperfabric/icon-hyperfabric-data-center.svg" className="w-20"/>

              <h3 className="text-xl font-medium mb-3">
                A streamlined fabric experience
              </h3>
              <p className="text-gray-600">
                Manage switching, topology, policies, and connectivity from a
                single, intuitive control plane.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <img src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/networking/data-center-networking/nexus-hyperfabric/icon-circularity.svg" className="w-20"/>

              <h3 className="text-xl font-medium mb-3">
                Distributed fabric oversight
              </h3>
              <p className="text-gray-600">
                Centrally operate fabrics deployed across data centers, edge
                locations, and hybrid environments.
              </p>
            </div>
          </div>

          <button className="mt-16 px-8 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50">
            Read blog
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6">
              Manage your data center fabric through the cloud
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              Retain full control of your data center fabric from anywhere.
              AekSec Nexus HyperFabric provides cloud-managed orchestration,
              automated upgrades, secure fabric underlay management, and
              seamless integration with applications and workloads.
            </p>

            <button className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
              See FAQ
            </button>
          </div>

          <div className="w-full">
  <img
    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
    alt="Cloud fabric management"
    className="w-full h-full object-cover"
  />
</div>

        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="w-full">
            <img
              src="https://cdn.aitimes.com/news/photo/202212/148344_156697_5059.jpg"
              alt="AI infrastructure"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-light mb-6">
              AekSec Nexus HyperFabric AI: AI for all
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              Deploy AI clusters with a single click. HyperFabric AI combines
              cloud-native operations with optimized high-performance networking
              to support GPU-accelerated workloads, AI pipelines, and
              large-scale model training.
            </p>

            <button className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
              Deliver AI results
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-center mb-20">
            Controlled in the cloud and user friendly
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-medium mb-3">
                Design before you buy
              </h3>
              <p className="text-gray-600">
                Build validated fabric designs with capacity planning, topology
                validation, and automated bill of materials.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">
                Plug-and-play deployment
              </h3>
              <p className="text-gray-600">
                Guided deployment automates provisioning, cabling validation,
                and real-time readiness checks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">
                Assertion-based monitoring
              </h3>
              <p className="text-gray-600">
                Continuously verify availability, reliability, and policy
                enforcement across the entire fabric.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">
                Direct expert support
              </h3>
              <p className="text-gray-600">
                Resolve mission-critical issues with direct access to AekSec
                networking experts.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">
                High-performance cloud-managed switches
              </h3>
              <p className="text-gray-600">
                Optimized for scale, throughput, and reliability with full cloud
                visibility and control.
              </p>
            </div>
          </div>

          <div className="text-center mt-16 space-x-6">
            <a className="text-blue-600 hover:underline cursor-pointer">
              Read data sheet →
            </a>
            <a className="text-blue-600 hover:underline cursor-pointer">
              Read white paper →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-28 text-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <h2 className="text-5xl font-light">
            Design and configure
            <br />
            your fabrics for free
          </h2>

          <div>
            <p className="text-gray-300 mb-8">
              With your AekSec account, you can design and validate HyperFabric
              architectures at no cost. No documentation required — just build
              and go.
            </p>

            <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700">
              Get started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
