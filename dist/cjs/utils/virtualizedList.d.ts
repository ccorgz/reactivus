import React from 'react';
interface VirtualizedListProps {
    itemCount: number;
    itemHeight: number;
    renderItem: (index: number) => React.ReactNode;
    height: number;
}
declare const VirtualizedList: React.FC<VirtualizedListProps>;
export default VirtualizedList;
