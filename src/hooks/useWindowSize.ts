import * as React from 'react';

export const useWindowSize = () => {
  //const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    // width: isSSR ? 1200 : window.innerWidth,
    // height: isSSR ? 800 : window.innerHeight,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
};


// // Define general type for useWindowSize hook, which includes width and height
// interface Size {
//   width: number | undefined;
//   height: number | undefined;
// }

// // Hook
// function useWindowSize2(): Size {

//   const [windowSize, setWindowSize] = React.useState<Size>({
//     width: undefined,
//     height: undefined,
//   });
//   React.useEffect(() => {
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     // Add event listener
//     window.addEventListener("resize", handleResize);
//     // Call handler right away so state gets updated with initial window size
//     handleResize();
//     // Remove event listener on cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // Empty array ensures that effect is only run on mount
//   return windowSize;
// }