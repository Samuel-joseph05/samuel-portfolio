export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Space Nebula Effects */}
      <div className="space-nebula space-nebula-1"></div>
      <div className="space-nebula space-nebula-2"></div>
      <div className="space-nebula space-nebula-3"></div>
      <div className="space-nebula space-nebula-4"></div>
      
      {/* Deep Space Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-blue-900/20"></div>
      
      {/* Distant Galaxy Effect */}
      <div className="galaxy-spiral"></div>
    </div>
  );
};