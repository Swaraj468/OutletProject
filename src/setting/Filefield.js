import React from "react";
import { useDispatch } from "react-redux";
import { update_setting } from "../redux/actions";

const FileField = ({ sectionID, settingId, name }) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(update_setting(sectionID, settingId, file));
        }
    };

    return (
        <div className="my-4">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
                {name}
            </label>
            <input 
                type="file"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            />
        </div>
    );
};

export default FileField;
