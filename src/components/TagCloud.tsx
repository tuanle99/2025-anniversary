import React, { useRef, useEffect } from "react";
import TagCloud, { TagCloudOptions } from "TagCloud";

export default function TagCloudComponent() {
  const sphereMounted = useRef(false);

  useEffect(() => {
    const repeatingText = [
      "♥ I Love You ♥",
      "♥ Happy Anniversary ♥",
      "♥ Love You So Much ♥",
      "♥ My Love ♥",
      "♥ My Life ♥",
      "♥ 2 Years ♥",
    ];
    if (sphereMounted.current === false) {
      // Define Tags
      const myTags = [
        ...repeatingText,
        ...repeatingText,
        ...repeatingText,
        ...repeatingText,
      ];

      var options: TagCloudOptions = {
        radius: 230,

        // animation speed
        // slow, normal, fast
        maxSpeed: "fast",
        initSpeed: "fast",

        // interact with cursor move on mouse out
        keep: false,
      };
      // Render a tagCloud with custom configuration
      TagCloud(".sphere", myTags, options);
    }
    return () => (sphereMounted.current = true); // useRef
  }, []);

  return <span className="sphere"></span>;
}
