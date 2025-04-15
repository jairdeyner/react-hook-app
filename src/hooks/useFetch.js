import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  });

  useEffect(() => {
    setLoadingState();

    getFetch(url);
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      errorMessage: null,
    });
  };

  const getFetch = async (url) => {
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        errorMessage: null,
      });
      return;
    }

    const response = await fetch(url);

    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        errorMessage: {
          code: response.status,
          message: response.statusText,
        },
      });

      return;
    }

    const data = await response.json();

    setState({
      data,
      isLoading: false,
      hasError: false,
      errorMessage: null,
    });

    // Manejo del cache
    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
