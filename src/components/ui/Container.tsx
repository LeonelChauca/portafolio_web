const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
      {children}
    </div>
  );
};

export default Container;
