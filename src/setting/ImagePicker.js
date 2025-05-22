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
          per_page: 25,
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
    <div style={{ padding: '40px', fontFamily: 'Segoe UI, sans-serif', maxWidth: '960px', margin: 'auto' }}>
  <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#333' }}>Generate AI Image</h2>

  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
    <input
      type="text"
      placeholder="Type a prompt to search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{
        padding: '10px 16px',
        width: '100%',
        maxWidth: '400px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontSize: '16px',
        marginRight: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    /><br/>
    <button
      onClick={searchImages}
      style={{
        textAlign:'center',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
      onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
    >
      Search
    </button>
  </div>

  {images.length > 0 && (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
        gap: '12px'
      }}
    >
      {images.map((img) => (
        <div key={img.id} style={{ overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <img
            src={img.src.medium}
            alt={img.alt}
            style={{
              width: '100%',
              height: 'auto',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              display: 'block'
            }}
            onClick={() => handleImageClick(img.src.original)}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
      ))}
    </div>
  )}
</div>
  );
};

export default ImagePicker;
