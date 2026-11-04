import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        alt?: string;
        ar?: boolean;
        "ar-modes"?: string;
        "ar-placement"?: "floor" | "wall";
        "ar-scale"?: "auto" | "fixed";
        autoplay?: boolean;
        "auto-rotate"?: boolean;
        "auto-rotate-delay"?: string;
        "camera-controls"?: boolean;
        "camera-orbit"?: string;
        "environment-image"?: string;
        "interaction-prompt"?: "auto" | "none";
        "animation-name"?: string;
        poster?: string;
        reveal?: "auto" | "interaction" | "manual";
        src?: string;
        "shadow-intensity"?: string;
        "touch-action"?: string;
      };
    }
  }
}

export {};
