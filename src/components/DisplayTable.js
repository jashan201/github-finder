import React from 'react';

const DisplayTable = ({ data, repositories }) => {
  return (
    <div className='profile'>
      <h2>{data.name}</h2>
      {!data.avatar_url ? ("") : (<img className='circular image' src={data.avatar_url} alt={data.avatar_url} />)}<p className='bio'>{data.bio}</p>
      <h3>Repositories</h3>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <div className='repo'>
              <section>
              <a href={repo.html_url} className='header' target='_blank' rel='noopener noreferrer'>{repo.name}</a>
              <p>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
              </section>
              <p className='description'>{repo.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTable;