import { PuffLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <PuffLoader color="#4f46e5" size={60} speedMultiplier={1.2} />
    </div>
  );
};

export default Loader;
