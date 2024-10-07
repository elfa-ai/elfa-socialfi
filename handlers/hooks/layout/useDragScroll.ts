import * as React from "react";

export const useDragScroll = () => {
  const [node, setNode] = React.useState<HTMLElement>();

  const ref = React.useCallback((nodeEle: any) => {
    setNode(nodeEle);
  }, []);

  const handleMouseDown = React.useCallback(
    (e: React.MouseEvent) => {
      if (!node) {
        return;
      }
      const startPos = {
        left: node.scrollLeft,
        top: node.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };

      const handleMouseMove = (e: React.MouseEvent) => {
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;
        node.scrollTop = startPos.top - dy;
        node.scrollLeft = startPos.left - dx;
        updateCursor(node);
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove as any);
        document.removeEventListener("mouseup", handleMouseUp);
        resetCursor(node);
      };

      document.addEventListener("mousemove", handleMouseMove as any);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [node],
  );

  const handleTouchStart = React.useCallback(
    (e: React.TouchEvent) => {
      if (!node) {
        return;
      }
      const touch = e.touches[0];
      const startPos = {
        left: node.scrollLeft,
        top: node.scrollTop,
        x: touch.clientX,
        y: touch.clientY,
      };

      const handleTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        const dx = touch.clientX - startPos.x;
        const dy = touch.clientY - startPos.y;
        node.scrollTop = startPos.top - dy;
        node.scrollLeft = startPos.left - dx;
        updateCursor(node);
      };

      const handleTouchEnd = () => {
        document.removeEventListener("touchmove", handleTouchMove as any);
        document.removeEventListener("touchend", handleTouchEnd);
        resetCursor(node);
      };

      document.addEventListener("touchmove", handleTouchMove as any);
      document.addEventListener("touchend", handleTouchEnd);
    },
    [node],
  );

  const updateCursor = (ele: HTMLElement) => {
    ele.style.cursor = "grabbing";
    ele.style.userSelect = "none";
  };

  const resetCursor = (ele: HTMLElement) => {
    ele.style.cursor = "grab";
    ele.style.removeProperty("user-select");
  };

  React.useEffect(() => {
    if (!node) {
      return;
    }
    node.addEventListener("mousedown", handleMouseDown as any);
    node.addEventListener("touchstart", handleTouchStart as any);
    return () => {
      node.removeEventListener("mousedown", handleMouseDown as any);
      node.removeEventListener("touchstart", handleTouchStart as any);
    };
  }, [node]);

  return [ref];
};

// import { useState, useEffect, useCallback } from 'react';

// export const useDragScroll = () => {
//   const [node, setNode] = useState<HTMLElement>();

//   const ref = useCallback((nodeEle: HTMLElement) => {
//     setNode(nodeEle);
//   }, []);

//   const handleMouseDown = useCallback(
//     (e: React.MouseEvent) => {
//       if (!node) {
//         return;
//       }
//       const startPos = {
//         left: node.scrollLeft,
//         top: node.scrollTop,
//         x: e.clientX,
//         y: e.clientY
//       };

//       const handleMouseMove = (e: React.MouseEvent) => {
//         const dx = e.clientX - startPos.x;
//         const dy = e.clientY - startPos.y;
//         node.scrollTop = startPos.top - dy;
//         node.scrollLeft = startPos.left - dx;
//         updateCursor(node);
//       };

//       const handleMouseUp = () => {
//         document.removeEventListener('mousemove', handleMouseMove as any);
//         document.removeEventListener('mouseup', handleMouseUp);
//         resetCursor(node);
//       };

//       document.addEventListener('mousemove', handleMouseMove as any);
//       document.addEventListener('mouseup', handleMouseUp);
//     },
//     [node]
//   );

//   const handleTouchStart = useCallback(
//     (e: React.TouchEvent) => {
//       if (!node) {
//         return;
//       }
//       const touch = e.touches[0];
//       const startPos = {
//         left: node.scrollLeft,
//         top: node.scrollTop,
//         x: touch.clientX,
//         y: touch.clientY
//       };

//       const handleTouchMove = (e: React.TouchEvent) => {
//         const touch = e.touches[0];
//         const dx = touch.clientX - startPos.x;
//         const dy = touch.clientY - startPos.y;
//         node.scrollTop = startPos.top - dy;
//         node.scrollLeft = startPos.left - dx;
//         updateCursor(node);
//       };

//       const handleTouchEnd = () => {
//         document.removeEventListener('touchmove', handleTouchMove as any);
//         document.removeEventListener('touchend', handleTouchEnd);
//         resetCursor(node);
//       };

//       document.addEventListener('touchmove', handleTouchMove as any);
//       document.addEventListener('touchend', handleTouchEnd);
//     },
//     [node]
//   );

//   const updateCursor = (ele: HTMLElement) => {
//     ele.style.cursor = 'grabbing';
//     ele.style.userSelect = 'none';
//   };

//   const resetCursor = (ele: HTMLElement) => {
//     ele.style.cursor = 'grab';
//     ele.style.removeProperty('user-select');
//   };

//   useEffect(() => {
//     if (!node) {
//       return;
//     }
//     node.addEventListener('mousedown', handleMouseDown as any);
//     node.addEventListener('touchstart', handleTouchStart as any);
//     return () => {
//       node.removeEventListener('mousedown', handleMouseDown as any);
//       node.removeEventListener('touchstart', handleTouchStart as any);
//     };
//   }, [node]);

//   return ref;
// };
