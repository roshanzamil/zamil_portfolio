import type { SVGProps } from "react";

export const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    {...props}
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NodejsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
        <path fill="#8CC84B" d="M128 0v128h92.21L128 0z" />
        <path fill="#68A063" d="M128 0L35.79 0L128 128V0z" />
        <path fill="#3B7D3D" d="M128 256V128H35.79L128 256z" />
        <path fill="#43853D" d="M128 256l92.21-128H128v128z" />
    </svg>
);


export const JavaScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="#F7DF1E" d="M0 0h256v256H0V0z"/>
    <path d="M72.13 198.89c2.31 3.96 5.86 6.35 10.55 6.35c4.41 0 7.42-1.63 7.42-7.85v-52.91h15.24v53.4c0 12.3-8.82 17.58-19.1 17.58c-9.92 0-16.14-4.83-18.78-10.9L72.13 198.89zM128.87 198.07c3.48 4.7 8.1 7.29 13.9 7.29c6.32 0 10.21-2.88 10.21-6.93c0-4.7-3.96-6.64-10.9-9.38l-4.42-1.76c-10.38-4.29-17.27-9.51-17.27-21.37c0-10.2 7.7-16.7 18.29-16.7c8.66 0 14.42 3.63 18.14 9.66l-13.48 7.84c-2.31-3.63-4.57-5.15-7.42-5.15c-2.85 0-4.85 1.5-4.85 4.14c0 3.32 1.94 4.7 8.09 7.42l4.42 1.76c12.75 5.29 19.82 10.23 19.82 22.4c0 12.74-9.38 18.6-21.75 18.6c-11.2 0-18.57-5.58-22.3-11.72L128.87 198.07z"/>
  </svg>
);

export const HtmlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="#E34F26" d="M30 0h196l-18 205L128 226l-80-21L30 0z"/>
    <path fill="#EF652A" d="M128 22h98l-15 170-83 23V22z"/>
    <path fill="#EBEBEB" d="M128 124H82l-3-33h49v-22H43l4 45h81v22zm0 80l-50-13-3-36h22l2 20 29 8v-25h-50V91h100l-9 101z"/>
    <path fill="#fff" d="M128 124v22h46l-4 45h-42v25l29-8 2-20h22l-3 36-50 13v-80h50l-4-33H79v22h49z"/>
  </svg>
);

export const CssIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="#1572B6" d="M30 0h196l-18 205L128 226l-80-21L30 0z"/>
    <path fill="#33A9DC" d="M128 22h98l-15 170-83 23V22z"/>
    <path fill="#EBEBEB" d="M128 124H82l-3-33h49v-22H43l4 45h81v22zm0 80l-50-13-3-36h22l2 20 29 8v-25h-50V91h100l-9 101z"/>
    <path fill="#fff" d="M128 124v22h46l-4 45h-42v25l29-8 2-20h22l-3 36-50 13v-80h50l-4-33H79v22h49z"/>
  </svg>
);

export const TypeScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="#3178C6" d="M0 0h256v256H0V0z"/>
    <path fill="#fff" d="M117.47 167.22h32.48v-17.29H132.8V95.45h21.1v-17.3h-46.7v17.3h20.27v54.48h-15.32v17.29h.02zM195.66 121.73c0-6.1-1.63-11.4-4.88-15.91c-3.25-4.51-7.85-6.76-13.8-6.76c-5.48 0-10.03 2.05-13.65 6.16c-3.62 4.11-5.43 9.38-5.43 15.82v15.9c0 6.45 1.81 11.77 5.43 15.96c3.62 4.2 8.17 6.3 13.65 6.3c5.95 0 10.55-2.25 13.8-6.75c3.25-4.5 4.88-9.82 4.88-16.01v-14.71h.03zm-14.93 25.13c-2.1 2.22-4.78 3.33-8.04 3.33c-3.25 0-5.93-1.11-8.04-3.33c-2.1-2.22-3.15-5.22-3.15-8.99v-15.9c0-3.77 1.05-6.75 3.15-8.94c2.1-2.18 4.79-3.28 8.04-3.28c3.26 0 5.94 1.1 8.04 3.28c2.1 2.19 3.15 5.17 3.15 8.94v15.9c0 3.77-1.05 6.77-3.15 8.99z"/>
  </svg>
);
