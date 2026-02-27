const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-6 text-center">
    <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
    {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
  </div>
);

export default SectionTitle;
