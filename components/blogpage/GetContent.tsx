"use client";
import parse from "html-react-parser";
import img from "next/image";
import React from "react";

function GetContent({ content = "" }: { content: string }) {
  const options = {
    replace: (domNode: any) => {
      if (domNode.name === "img" && domNode.attribs && domNode.attribs.src) {
        const { src, alt, width, height } = domNode.attribs;
        return (
          <img
            src={src}
            alt={alt}
            width={1152}
            height={560}
            className="rounded-sm object-cover"
          />
        );
      }
    },
  };
  return <>{parse(content, options)}</>;
}
export default GetContent;
