import { ThreeCircles } from 'react-loader-spinner';

// import "./LoadingSpinner.css"
const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center'>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingSpinner;
