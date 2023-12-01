import { useState, useEffect, useRef } from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener("mouseenter", handleMouseEnter);      
      ref.current.addEventListener("mouseleave", handleMouseLeave);
    }
  },[hovered])

  return {
    hovered,
    ref
  }
}