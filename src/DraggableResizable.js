import React, { useState, useRef, useEffect } from 'react';
import { Resizable } from 'react-resizable';
import Draggable from 'react-draggable';
import 'react-resizable/css/styles.css';
import './main.css'; // Imported CSS

const DraggableResizableBox = () => {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [position, setPosition] = useState({ top: 0, left: 0, right: 0, bottom: 0 });

    const parentRef = useRef(null);
    const boxRef = useRef(null);

    const updatePosition = () => {
        if (parentRef.current && boxRef.current) {
            const parentRect = parentRef.current.getBoundingClientRect();
            const boxRect = boxRef.current.getBoundingClientRect();

            setPosition({
                top: boxRect.top - parentRect.top,
                left: boxRect.left - parentRect.left,
                right: parentRect.right - boxRect.right,
                bottom: parentRect.bottom - boxRect.bottom
            });
        }
    };

    const onResize = (e, { size }) => {
        setWidth(size.width);
        setHeight(size.height);
        updatePosition();
    };

    useEffect(() => {
        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, []);

    return (
        <div ref={parentRef} className="parent-container">
            <Draggable
                handle=".draggable-handle"
                cancel=".react-resizable-handle"
                bounds="parent"
                onDrag={updatePosition}
            >
                <div ref={boxRef} className="draggable-box" style={{ width, height }}>
                    <Resizable
                        width={width}
                        height={height}
                        onResize={onResize}
                        minConstraints={[100, 100]}
                        maxConstraints={[400, 400]}
                        resizeHandles={['se']}
                    >
                        <div className="draggable-handle">
                            <img
                                width="100%"
                                height="100%"
                                draggable="false"
                                src="https://techbreak.com.br/wp-content/uploads/2023/10/bing-image-creator-2-min.jpg"
                                alt="Draggable Content"
                            />
                        </div>
                    </Resizable>
                </div>
            </Draggable>

            {/* Position Info */}
            <div className="position-info">
                <p>Top: {position.top.toFixed(2)}px</p>
                <p>Left: {position.left.toFixed(2)}px</p>
                <p>Right: {position.right.toFixed(2)}px</p>
                <p>Bottom: {position.bottom.toFixed(2)}px</p>
            </div>
        </div>
    );
};

export default DraggableResizableBox;
