const GlassCard = ({ children, className = "" }) => (
  <div
    className={`card bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16 mx-auto ${className}`}
  >
    {children}
  </div>
);

export default GlassCard;
