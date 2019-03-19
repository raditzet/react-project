import React from 'react'
import { connect } from 'react-redux'


class SongDetail extends React.Component {
    render() {
       
            if (this.props.yangDiSelect == null) {
                return <div className='lead mt-5 display-3'><h1>Select Song</h1></div>
            }
            return(
                <div className='mt-5'>
                <h1 className='display-3 pb-2'>Detail</h1>
                <p className='lead'>Artist : {this.props.yangDiSelect.artist}</p>
                <p className='lead'>Title : {this.props.yangDiSelect.title}</p>
                <p className='lead'>Duration : {this.props.yangDiSelect.duration}</p>
                </div>
                )
    }
}

const mapStateToProps = (state) => {
    return { yangDiSelect : state.selectedSong }
}
export default connect(mapStateToProps)(SongDetail);