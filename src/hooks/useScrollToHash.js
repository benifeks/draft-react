import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
};

export default useScrollToHash;
