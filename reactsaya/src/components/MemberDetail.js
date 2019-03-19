import React from 'react'
import { connect } from 'react-redux'

class MemberDetail extends React.Component {
    render() {
        if (this.props.yangDiSelect == null){
            return (
                <div className='container'>
                <h1 className='display-4'>Member</h1>
                </div>
            )
        }
        return(
            <div className='container border-danger p-3 mt-5 bg-dark rounded'>
            <div>
                <h1 className='text-light display-4'>Artist</h1>
                </div>
            <div>
                <h1 className='text-light display-4'>Personel</h1>
                </div>    
                <div>
                    <h1 className='display-5 text-warning'>Artist :
                    {this.props.yangDiSelect.artist}
                    </h1>
                </div>
                <div>
                <h1 className='display-5 text-warning'>Personel : 
                {this.props.yangDiSelect.personnel}
                </h1>
                
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {yangDiSelect: state.selectedMember}
}
export default connect(mapStateToProps)(MemberDetail)