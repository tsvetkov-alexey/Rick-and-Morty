import React from "react";
import ContentLoader from "react-content-loader";

export const CharacterSkeleton = () => (
<ContentLoader 
    speed={2}
    width={230}
    height={310}
    viewBox="0 0 230 260"
    backgroundColor="#e6e6e6"
    foregroundColor="#ecebeb"
  >
    <rect x="15" y="0" rx="10" ry="10" width="200" height="200" /> 
    <rect x="33" y="208" rx="5" ry="5" width="160" height="20" /> 
    <rect x="2" y="235" rx="5" ry="5" width="228" height="20" />
  </ContentLoader>
)
