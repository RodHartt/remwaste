"use client";

const ContainerBox = ({ children, className = "" }) => {
  return (
    <div className={`bg-blue-200 dark:bg-gray-800 rounded-xl ml-2 mr-2 p-6 ${className}`}>
      {children}
    </div>
  );
};

export default ContainerBox;
