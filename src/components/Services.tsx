import {
  FaWrench,
  FaBuilding,
  FaServer,
  FaTasks,
  FaChartBar,
  FaGlobe,
  FaNetworkWired,
  FaRobot,
  FaNetworkWired as FaNetwork,
} from "react-icons/fa";

const services = [
  {
    title: "Garage Management System",
    description:
      "Manage workshop operations, inventory, and billing efficiently.",
    icon: FaWrench,
  },
  {
    title: "Real Estate Management System",
    description:
      "Smart tools for landlords and property managers to manage tenants, leases, and payments.",
    icon: FaBuilding,
  },
  {
    title: "ERB-SYS (Enterprise Resource Backend System)",
    description:
      "Custom enterprise backend solutions tailored to specific client workflows.",
    icon: FaServer,
  },
  {
    title: "Issue Tracking & Project Management Tool Systems",
    description:
      "Helps organizations track and manage issues and projects efficiently.",
    icon: FaTasks,
  },
  {
    title: "Data Analysis Services",
    description: "Transform raw data into valuable business insights.",
    icon: FaChartBar,
  },
  {
    title: "Web Development",
    description: "Responsive, modern websites with backend integration.",
    icon: FaGlobe,
  },
  {
    title: "Network Coordinate Services",
    description:
      "Structured networking solutions for offices and institutions.",
    icon: FaNetworkWired,
  },
  {
    title: "Local AI & AI Services",
    description:
      "AI models for local use-cases, including predictive analytics and automation.",
    icon: FaRobot,
  },
  {
    title: "Network Services",
    description:
      "Complete infrastructure solutions including design, implementation, and maintenance.",
    icon: FaNetwork,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12 px-4">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                    <IconComponent className="text-blue-600 text-xl md:text-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="text-blue-500 hover:underline flex items-center text-sm md:text-base"
                >
                  Inquire Now
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
