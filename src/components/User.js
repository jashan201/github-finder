import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayTable from './DisplayTable';

const Profile = () => {
  const { username } = useParams();
  const [data, setData] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await fetch(`https://api.github.com/users/${username}`);
        if (!profile.ok) {
          throw new Error('User not found');
        }
        const profileJson = await profile.json();

        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();

        setData(profileJson);
        setRepositories(repoJson);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className='profile-section'>
      {error ? (
        <p className='error'>User not found</p>
      ) : (
        <DisplayTable data={data} repositories={repositories} />
      )}    
    </div>
  );
};

export default Profile;