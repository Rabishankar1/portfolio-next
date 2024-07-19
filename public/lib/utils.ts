"use client";
import { useState, useEffect } from "react";
import { InViewHookResponse, useInView } from "react-intersection-observer";

export const useHash = () => {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
};

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    window.location.hash = `#${id}`;
  }
};

export const asImageSrc = (imagePath: any, options = {}) => {
  const { fit, w, h, exp }: any = options;

  // Example base URL, replace with your actual image service or path
  const baseUrl = "";

  // Construct query parameters
  const params = new URLSearchParams();
  if (fit) params.append("fit", fit);
  if (w) params.append("w", w);
  if (h) params.append("h", h);
  if (exp) params.append("exp", exp);

  // Construct the full URL
  return `${baseUrl}${imagePath}?${params.toString()}`;
};

export const handleRedirectToSection = (section: string) => {
  const element = document.getElementById(section);
  window.history.pushState(null, "", `#${section}`);
  element?.scrollIntoView({ behavior: "smooth" });
};