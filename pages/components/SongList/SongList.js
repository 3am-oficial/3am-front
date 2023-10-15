import React from 'react';

const SongList = ({ songs }) => {
    return (
        <ul>
            {songs.map((song, index) => (
                <li key={index}>
                    {song}
                    <audio src={`/assets/music/${song}`} controls />

                </li>
            ))}
        </ul>
    );

};

export default SongList;
