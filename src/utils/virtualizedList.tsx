import React, { useRef, useState, useEffect, useCallback } from 'react';

interface VirtualizedListProps {
  itemCount: number;
  itemHeight: number;
  renderItem: (index: number) => React.ReactNode;
  height: number;
}

const VirtualizedList: React.FC<VirtualizedListProps> = ({ itemCount, itemHeight, renderItem, height }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    if (listRef.current) {
      setScrollTop(listRef.current.scrollTop);
    }
  }, []);

  const totalHeight = itemCount * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const visibleItemCount = Math.ceil(height / itemHeight);
  const endIndex = Math.min(itemCount, startIndex + visibleItemCount);

  useEffect(() => {
    const currentList = listRef.current;
    if (currentList) {
      currentList.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentList) {
        currentList.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div
      ref={listRef}
      style={{
        height,
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {Array.from({ length: endIndex - startIndex }, (_, index) => {
          const itemIndex = startIndex + index;
          return (
            <div
              key={itemIndex}
              style={{
                position: 'absolute',
                top: itemIndex * itemHeight,
                height: itemHeight,
              }}
            >
              {renderItem(itemIndex)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualizedList;