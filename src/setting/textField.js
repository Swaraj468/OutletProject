import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update_setting } from "../redux/actions";

const TextField = ({ sectionID, settingId, name, defaultValue }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(defaultValue || "");
  const [showPopup, setShowPopup] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    dispatch(update_setting(sectionID, settingId, newValue));
  };

  const handleAiGenerate = async () => {
    if (!aiPrompt.trim()) return;
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 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",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-maverick:free",
          messages: [
            {
              role: "user",
              content: `Generate a blog description for: ${aiPrompt}. Keep it direct and without any polite or assistant-like language.`,
            },
          ],
        }),
      });

      const data = await res.json();
      const aiText = data?.choices?.[0]?.message?.content?.trim() || "";
      setValue(aiText);
      dispatch(update_setting(sectionID, settingId, aiText));
      setShowPopup(false);
      setAiPrompt("");
    } catch (error) {
      alert("Error fetching AI response. Try again.");
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: "420px", marginBottom: "1.5rem" }}>
      <label
        htmlFor={`input-${settingId}`}
        style={{ display: "block", marginBottom: 6, fontWeight: 600, color: "#333" }}
      >
        {name}
      </label>

      {/* Input + AI icon container */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          border: "1.5px solid #ccc",
          borderRadius: 8,
          paddingRight: 40,
          transition: "border-color 0.2s ease",
          backgroundColor: "#fff",
        }}
        onFocus={() => {}}
      >
        <input
          id={`input-${settingId}`}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter text"
          style={{
            flexGrow: 1,
            border: "none",
            outline: "none",
            fontSize: "1rem",
            padding: "12px 14px",
            borderRadius: 8,
          }}
        />

        {/* AI Icon inside input */}
        <button
          onClick={() => setShowPopup((prev) => !prev)}
          title="Generate with AI"
          style={{
            position: "absolute",
            right: 6,
            width: 30,
            height: 30,
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#0078D7",
            color: "white",
            fontSize: 18,
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 8px rgba(0,120,215,0.6)",
            userSelect: "none",
          }}
          aria-label="Open AI generator"
          type="button"
        >
          🤖
        </button>
      </div>

      {/* AI Popup below input */}
      {showPopup && (
        <div
          style={{
            marginTop: 8,
            background: "white",
            borderRadius: 8,
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
            padding: 16,
            width: "100%",
            boxSizing: "border-box",
            fontFamily: "Arial, sans-serif",
            zIndex: 20,
            position: "relative",
          }}
        >
          <input
            type="text"
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            placeholder="Ask AI..."
            style={{
              width: "100%",
              padding: "12px 14px",
              fontSize: "1rem",
              borderRadius: 6,
              border: "1.5px solid #0078D7",
              marginBottom: 12,
              outline: "none",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAiGenerate();
              }
            }}
            autoFocus
          />
          <button
            onClick={handleAiGenerate}
            style={{
              width: "100%",
              backgroundColor: "#0078D7",
              color: "white",
              border: "none",
              borderRadius: 6,
              padding: "12px",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005ea2")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0078D7")}
          >
            Generate
          </button>
        </div>
      )}
    </div>
  );
};

export default TextField;
