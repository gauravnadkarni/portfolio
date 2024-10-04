import { useCallback, useEffect, useState } from "react";

const useVisibility = <T extends HTMLElement>(
  elements: Array<T>,
  offset = 0
): { collection: Record<string, boolean> | null } => {
  const [collection, setCollectionVisibility] = useState<Record<
    string,
    boolean
  > | null>(null);

  const checkAndSetVisibility = useCallback(() => {
    let itemCollection = {...collection};
    elements.forEach((element) => {
      if (element && itemCollection) {
        const top = element.getBoundingClientRect().top;
        const isVisible:boolean =
          top + offset >= 0 && top - offset <= window.innerHeight;
        if(itemCollection[element.id]!==isVisible) {
          itemCollection[element.id]=isVisible;
        }
      }
    });
    const isUpdatedRequired = Object.keys(itemCollection).find((itemKey)=>(
      collection && itemCollection[itemKey]!==collection[itemKey]
    ));
    if(!collection || isUpdatedRequired) {
      setCollectionVisibility(()=>(itemCollection));
    }
  },[collection,elements,offset]);

  useEffect(() => {
    document.addEventListener("scroll", checkAndSetVisibility, true);
    checkAndSetVisibility();
    return () =>
      document.removeEventListener("scroll", checkAndSetVisibility, true);
  }, [checkAndSetVisibility]);

  return { collection };
};

export default useVisibility;
