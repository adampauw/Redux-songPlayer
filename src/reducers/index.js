import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Barbie Girl', duration: '3:04'},
        { title: 'Blue', duration: '2:45'},
        { title: 'I Want it That Way', duration: '4:14'},
        { title: 'Allstar', duration: '3:56'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});