import React from 'react'


class SearchImages extends React.Component{
   
   state = {term:''}
   onSubmitForm = (event)=>{
       event.preventDefault()
       
       
       this.props.onSubmit(this.state.term);
   }

   render(){
       return(
          <div> <form onSubmit={this.onSubmitForm} className='form-group mt-5'>
            <input onChange={(event)=>{this.setState({term: event.target.value})}} type='text' className='form-control' placeholder='Type what????'/>
           </form>
       </div>
       )
   }
}
    export default SearchImages;