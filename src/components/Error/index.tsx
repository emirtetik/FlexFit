import Lottie from "react-lottie";
import error from "../../assets/error.json";

export const Error = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
     <div className="flex items-center justify-center p-4 w-full pointer-events-none">
        <Lottie options={defaultOptions} height={128} width={128} />
    </div>
  );
};
