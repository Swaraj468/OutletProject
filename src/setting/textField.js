import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update_setting } from "../redux/actions";

const TextField = ({ sectionID, settingId, name, defaultValue }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(defaultValue || ""); // Ensure controlled input

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue); // Update local state
        dispatch(update_setting(sectionID, settingId, newValue));
    };

    return (
        <>
            <div className="my-4">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
                {name}
            </label>
            <input 
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Enter text"
                className="w-full px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            />
        </div>
        </>
    );
};

export default TextField;
