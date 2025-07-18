export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="bg-blur bg-blur-1"></div>
      <div className="bg-blur bg-blur-2"></div>
      <div className="bg-blur bg-blur-3"></div>
    </div>
  );
};