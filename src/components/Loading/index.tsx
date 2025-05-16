import Lottie from "react-lottie";
import loading from "../../assets/loading.json";

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
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
