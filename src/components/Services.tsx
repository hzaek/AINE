const services = [
  {
    title: 'Garage Management System',
    description: 'Manage workshop operations, inventory, and billing efficiently.',
  },
  {
    title: 'Real Estate Management System',
    description: 'Smart tools for landlords and property managers to manage tenants, leases, and payments.',
  },
  {
    title: 'ERB-SYS (Enterprise Resource Backend System)',
    description: 'Custom enterprise backend solutions tailored to specific client workflows.',
  },
  {
    title: 'Operation Organization Management System',
    description: 'Helps organizations streamline internal operations and staff management.',
  },
  {
    title: 'Data Analysis Services',
    description: 'Transform raw data into valuable business insights.',
  },
  {
    title: 'Web Development',
    description: 'Responsive, modern websites with backend integration.',
  },
  {
    title: 'Network Coordinate Services',
    description: 'Structured networking solutions for offices and institutions.',
  },
  {
    title: 'Local AI & AI Services',
    description: 'AI models for local use-cases, including predictive analytics and automation.',
  },
  {
    title: 'Network Services',
    description: 'Complete infrastructure solutions including design, implementation, and maintenance.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#contact" className="text-blue-500 hover:underline">Inquire Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;