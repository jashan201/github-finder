import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = e => {
    setUserName(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      navigate(`/profile/${userName}`);
    }
  };

  return (
      <div className="search-section">
        <input
          type="text"
          className="prompt"
          placeholder="Search username"
          value={userName}
          onChange={onChangeHandler}
          onKeyPress={handleKeyPress}
        />
      </div>
  );
};

export default SearchPage;