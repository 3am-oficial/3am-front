import React from 'react';
import { SongList } from '../components';

const MusicPlayer = ({ songs }) => {
    return (
        <div>
            <h1>Reproductor de Música</h1>
            <SongList songs={songs} />
        </div>
    );
};

export async function getServerSideProps(context) {
    const token = context.req.headers.token;

    if (!token) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false,
            },
        };
    }
s
    const songs = ['song1.mp3', 'song2.mp3', 'song.mp4'];

    return {
        props: {
            songs,
        },
    };
}

export default MusicPlayer;
