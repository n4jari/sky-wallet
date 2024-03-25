const SkeletonComponent = ({ style }: { style: string }) => {
  return (
    <div className="animate-pulse">
      <div className={`${style} bg-gray-200 rounded-md dark:bg-gray-700`}></div>
    </div>
  );
};

export default SkeletonComponent;
