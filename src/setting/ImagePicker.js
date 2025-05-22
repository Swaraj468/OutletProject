import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { update_setting } from "../redux/actions";

const PEXELS_API_KEY = 'kkD9tOFe2O7CN6LM9c87fMGKupD3v8Kff4jMAWanD5V3DZCx5flHckw6'; // Your key

const ImagePicker = ({ sectionID, settingId, name, defaultValue }) => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const searchImages = async () => {
    try {
      const res = await axios.get('https://api.pexels.com/v1/search', {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        params: {
          query,
          per_page: 15,
        },
      });
      setImages(res.data.photos);
    } catch (err) {
      console.error('Error fetching images:', err);
    }
  };

  const handleImageClick = (url) => {
    console.log('Selected Image URL:', url);
    dispatch(update_setting(sectionID, settingId, url));
    setImages([]); // 🔁 Clear search results after selection
    setQuery('');   // Optionally clear search input too
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Generate AI Image</h2>

      <input
        type="text"
        placeholder="Search images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px', width: '250px', marginRight: '10px' }}
      />
      <button onClick={searchImages} style={{ padding: '8px 12px' }}>Search</button>

      {images.length > 0 && (
        <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src.medium}
              alt={img.alt}
              style={{ width: '100%', borderRadius: '6px', cursor: 'pointer' }}
              onClick={() => handleImageClick(img.src.original)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
