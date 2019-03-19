import {combineReducers} from 'redux'
//import {selectMember} from '../actions';

// pada aplikasi baru berjalan pertama kali, semua reducer akan dijalankan
// ini hanya bertugas memberikan nilai awal berupa list lagu
const songsReducer = () => {
    return [
        {title: 'Have Faith In Me', artist: 'A Day To Remember', duration: '3:15', personnel: ['Jeremy Mckinnon', 'Neil Westfall', 'Kevin Skaff', 'Alex Shelnutt', 'Joshua Woodard']},
        {title: 'Oil and Water', artist: 'Incubus', duration: '3:10', personnel: ['Brandon Boyd, Mike Einziger, Jose Pasillas, Chris Kilmore, Ben Kenney']},
        {title: 'Moonlight Equilibrium', artist: 'Black Dahlia Murder', duration: '3:20', personnel: ['Dono', 'Kasino', 'Indro']},
        {title: 'Mr.Brightside', artist: 'The Killers', duration: '3:05', personnel: ['paijo']},
        {title: 'Killing In The Name', artist: 'Rage Against The Machine', duration: '3:15', personnel: [' sutikno']},
    ]
}


// reducer tidak boleh return undefined
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    
    return selectedSong
}

const selectedMemberReducer = (selectedMember = null, action) => {
    if(action.type === 'MEMBER_SELECTED'){
        return action.payload
    }
    
    return selectedMember
}




export default combineReducers ({
    // key : reducer
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    selectedMember: selectedMemberReducer
})