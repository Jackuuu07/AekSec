import { useNavigate } from "react-router-dom";

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <section
      className="h-[90vh] bg-cover bg-center flex items-center px-20  text-white     
      max-sm:h-[105vh]        
      max-sm:items-start    
      max-sm:px-6           
      max-sm:pt-24
"
      style={{
        backgroundImage:
          "url('https://wallpaperaccess.com/full/1398312.jpg')",
      }}
    >
      <div className="max-w-xl">
        <h2 className="text-7xl font-light ">AI's new frontier:</h2>
        <h2 className="text-7xl font-light mb-6">the edge</h2>
        <p className="mb-8 text-lg">
          Power AI at the edge by bringing compute, networking, and security
          where your data originates and customer engagement thrives. Unlock
          seamless, real-time experiences and new value with Cisco.
        </p>

        <button
          onClick={() => navigate("/explore")}
          className="
              group
              bg-white text-black
              px-6 py-3
              rounded-full
              font-medium
              flex items-center gap-2

              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:shadow-[0_10px_30px_rgba(255,255,255,0.35)]
              active:scale-95
            "
        >
          Explore Security
          <span
            className="
            transition-transform duration-300
            group-hover:translate-x-1
          "
          >
            →
          </span>
        </button>
      </div>
    </section>
  );
}
