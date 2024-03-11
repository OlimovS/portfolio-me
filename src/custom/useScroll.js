import { useEffect, useState } from "react";

export default function useScroll() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    function handleScroll(e) {
      console.log(e);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return [scroll];
}
