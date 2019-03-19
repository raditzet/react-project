import React from 'react'

import SongList from './SongList'
import SongDetail from './SongDetail'
import MemberDetail from './MemberDetail'


const App = () => {
    return(
        <div class='container'>
            <SongList/>
            <SongDetail/>
            <MemberDetail/>
        </div>
    )
}


export default App;