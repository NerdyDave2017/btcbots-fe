import { useState } from "react";
const useLoading = () => {
  const [loadingState, setLoadingState] = useState({
    isLoading: false,
    loadingCount: 0,
  });

  const startLoading = () => {
    setLoadingState((prevState) => ({
      isLoading: true,
      loadingCount: prevState.loadingCount + 1,
    }));
  };

  const stopLoading = () => {
    setLoadingState((prevState) => ({
      isLoading: prevState.loadingCount - 1 > 0,
      loadingCount: Math.max(prevState.loadingCount - 1, 0),
    }));
  };

  return { loading: loadingState.isLoading, startLoading, stopLoading };
};

export default useLoading;
