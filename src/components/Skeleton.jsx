import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => (
<ContentLoader 
    speed={2}
    width={230}
    height={260}
    viewBox="0 0 230 260"
    backgroundColor="#e6e6e6"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="1" rx="10" ry="10" width="220" height="115" /> 
    <rect x="0" y="129" rx="5" ry="5" width="220" height="20" /> 
    <rect x="0" y="160" rx="5" ry="5" width="220" height="50" />
  </ContentLoader>
);
