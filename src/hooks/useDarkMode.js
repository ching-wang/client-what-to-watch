import { useEffect } from "react";
import useMediaQuery from "react-use-media-query-hook";

export function useDarkMode() {
  let darkModeEnabled = localStorage.darkModeEnabled;
  const darkModePreference = useMediaQuery("(prefers-color-scheme: dark)");
  if (typeof darkModeEnabled === "undefined") {
    darkModeEnabled = darkModePreference;
  }

  const setEnabledState = enabled => (darkModeEnabled = enabled);

  useEffect(() => {
    if (darkModeEnabled) {
      window.document.body.classList.add("dark-mode");
    } else {
      window.document.body.classList.remove("dark-mode");
    }
  }, [darkModeEnabled]);

  return [darkModeEnabled, setEnabledState];
}
