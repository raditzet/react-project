import React from 'react'

const ImageList = (props) => {
    console.log(props);

    const arrImages = props.images.map((img)=>{
        return (
            <div className="d-flex justify-content-center align-content-center">
            <img className="m-3" src={img.urls.regular} style={{maxWidth: "700px"}}/>
            </div>
        )
    })
    return(
        <div>
            {arrImages}
        </div>
    )
}

export default ImageList;