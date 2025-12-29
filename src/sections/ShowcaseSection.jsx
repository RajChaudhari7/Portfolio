import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Multi vendor eccomerce Card with Live Preview Link */}
          <a
            href="https://gocart-delta.vercel.app/" // Replace with your live URL
            target="_blank"
            rel="noopener noreferrer"
            className="first-project-wrapper"
            ref={rydeRef}
          >
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Multi Vendor E-Commerce Interface" />
            </div>
            <div className="text-content">
              <h2>
                Multi-Vendor eCommerce System for Scalable Online Marketplaces
              </h2>
              <p className="text-white-50 md:text-xl">
                A robust platform for vendors to sell products, with admin dashboards,vendor dashboards ,  payment gateways, and real-time analytics.
              </p>
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">
            {/* Green Cart with Live Preview Link */}
            <a
              href="https://greencart-client-2wsm.onrender.com" // Replace with your live URL
              target="_blank"
              rel="noopener noreferrer"
              className="project"
              ref={libraryRef}
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Green Cart Platform"
                />
              </div>
              <h2>GreenCart – Grocery Website</h2>
            </a>

            {/* Jobify Card with Live Preview Link */}
            <a
              href="https://jobify-psi-five.vercel.app/" // Replace with your live URL
              target="_blank"
              rel="noopener noreferrer"
              className="project"
              ref={ycDirectoryRef}
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>Jobify: Your Job Search Made Easy</h2>
            </a>

            {/* Duplicate YC Directory Card with Live Preview Link */}
            <a
              href="https://yc-directory-live.example.com" // Replace with your live URL
              target="_blank"
              rel="noopener noreferrer"
              className="project"
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
