import React from 'react'
import axios from 'axios'

import SearchImages from './Searchimages'
import ImageList from './ImageList';
class App extends React.Component {
    state = {images : []}
    onSearchSubmit = (term) =>{
        axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query: term},
                headers: {
                    Authorization :'Client-ID d7a301a3830267e6cf57c54c4c222bc8df3aa48bb3995a0a709b9d361292c5fb'
                }
            }).then((res) => {
                this.setState({images :res.data.results})
                
            }).catch((err)=>{
                console.log(err)
            })
        }

    
    


render () {
    return (
        <div className='container'>
        <h1 className='display-3 text-center'>WEEBS</h1>
        <SearchImages onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
        </div>
    )
    }
}

export default App;