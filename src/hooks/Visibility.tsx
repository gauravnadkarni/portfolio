import { useEffect, useState } from "react";

const useVisibility = <T extends HTMLElement>(
  elements: Array<T>,
  offset = 0
): { collection: Record<string, boolean> | null } => {
  const [collection, setCollectionVisibility] = useState<Record<
    string,
    boolean
  > | null>(null);

  const checkAndSetVisibility = () => {
    const itemCollection = { ...collection };
    elements.forEach((element) => {
      if (element) {
        const top = element.getBoundingClientRect().top;
        itemCollection[element.id] =
          top + offset >= 0 && top - offset <= window.innerHeight;
      }
    });
    setCollectionVisibility(itemCollection);
  };

  useEffect(() => {
    document.addEventListener("scroll", checkAndSetVisibility, true);
    checkAndSetVisibility();
    return () =>
      document.removeEventListener("scroll", checkAndSetVisibility, true);
  }, [elements]);

  return { collection };
};

export default useVisibility;
