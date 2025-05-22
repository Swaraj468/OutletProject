import React, { useState } from "react";
import { usePopover } from "./PopoverContext";
import sectionArray from "../../redux/sectionArray";
import { useDispatch } from "react-redux";
import { add_at_end } from "../../redux/actions";

const Popover = () => {
  const { popover, closePopover } = usePopover();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedParent, setSelectedParent] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  if (!popover.show) return null;

  const groupedSections = sectionArray.reduce((acc, section) => {
    const parentName = section.parent || "Other";
    if (!acc[parentName]) acc[parentName] = [];
    acc[parentName].push(section);
    return acc;
  }, {});

  const filteredParents = Object.keys(groupedSections).filter((parentName) =>
    parentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredChildren = selectedParent
    ? groupedSections[selectedParent].filter((section) =>
        section.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleAddElement = (element) => {
    closePopover();

    const inputData = {
      id: element.id,
      designID: element.id,
      name: element.name,
      settings:
        element.array?.map((item) => ({
          ...item,
          id: Date.now() + Math.floor(Math.random() * 1000),
        })) || [],
      type: element.type,
      childrenAllowed: false,
      uID: Date.now(),
    };

    dispatch(add_at_end(inputData));
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: popover.position.y,
          left: popover.position.x,
          backgroundColor: "white",
          border: "1px solid #ccc",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          borderRadius: "4px",
          padding: "10px",
          zIndex: 1000,
          minWidth: "220px",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "5px",
            boxSizing: "border-box",
          }}
        />

        {!selectedParent && (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {filteredParents.length === 0 && (
              <li style={{ padding: "8px" }}>No parents found</li>
            )}
            {filteredParents.map((parentName) => (
              <li
                key={parentName}
                onClick={() => setSelectedParent(parentName)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
              >
                {parentName}
              </li>
            ))}
          </ul>
        )}

        {selectedParent && (
          <>
            <button
              onClick={() => setSelectedParent(null)}
              style={{
                marginBottom: "10px",
                padding: "5px 10px",
                cursor: "pointer",
                backgroundColor: "#eee",
                border: "none",
                borderRadius: "4px",
              }}
            >
              ← Back to Parents
            </button>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                maxHeight: "250px",
                overflowY: "auto",
              }}
            >
              {filteredChildren.length === 0 && (
                <li style={{ padding: "8px" }}>No elements found</li>
              )}
              {filteredChildren.map((section) => (
                <li
                  key={section.id}
                  onClick={() => handleAddElement(section)}
                  onMouseMove={(e) => {
                    if (section.demoImage) {
                      setHoveredImage(section.demoImage);
                      setCursorPos({ x: e.clientX + 20, y: e.clientY + 20 });
                    }
                  }}
                  onMouseLeave={() => setHoveredImage(null)}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {section.demoImage && (
                    <img
                      src={section.demoImage}
                      alt={section.name}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                  )}
                  <span>{section.name}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        <button
          onClick={closePopover}
          style={{
            marginTop: "10px",
            padding: "6px 12px",
            cursor: "pointer",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%",
          }}
        >
          Close
        </button>
      </div>

      {/* Floating preview image near cursor */}
      {hoveredImage && (
        <img
          src={hoveredImage}
          alt="Preview"
          style={{
            position: "fixed",
            top: cursorPos.y,
            left: cursorPos.x,
            width: "200px",
            height: "auto",
            border: "1px solid #ccc",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            zIndex: 2000,
            pointerEvents: "none",
            backgroundColor: "white",
          }}
        />
      )}
    </>
  );
};

export default Popover;