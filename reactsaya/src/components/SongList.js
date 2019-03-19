import React, { Component } from 'react'
import { connect } from 'react-redux'

import {selectSong} from '../actions'
import {selectMember} from '../actions'

class SongList extends Component {

    renderList = () => {
        return this.props.songs.map((song) => {
            return (
                <div className='d-flex justify-content-between border-bottom mb-1' key={song.title}> 
                    <div>{song.title}</div>
                    <button className='btn btn-outline-primary my-2'
                        onClick={()=>{this.props.selectSong(song)}}
                    >Select</button>
                    <button className='btn btn-outline-primary my-2'
                        onClick={()=>{this.props.selectMember(song)}}>Member</button>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {songs: state.songs}
}

export default connect(mapStateToProps, {selectSong, selectMember})(SongList)