/*
type    : Register
payload : {nama: 'Alvin, uang: 700000}
*/


export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

export const selectMember = (song) => {
    return {
        type: 'MEMBER_SELECTED',
        payload: song
    }
}