import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

class ProductItem extends Component {

    onClickCart = (i) => {
        const nilai = parseInt(this.angka.value)
        axios.get("http://localhost:1996/products/" + i, {
            params: {
                id : i
            }
        }).then(res=> {
            console.log(res.data);
            axios.post("http://localhost:1996/carts",{
                ProductId: res.data.id,
                username: this.props.username,
                quantity: nilai,
                name: res.data.name,
                desc: res.data.desc,
                price: res.data.price,
                src: res.data.src,
            })
            
        })
    }

    render () {
        const {item} = this.props
        return (
            <div className="card col-3 m-3" style={{ width: "18rem" }} key={item.id}>
                <img src={item.src} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.desc}</p>
                    <p className="card-text">Rp.{item.price}</p>
                    <input className="form-control" ref={input => (this.angka = input)} type="number" />
                    <Link to={"/detailproduct/" + item.id}><button className="btn btn-secondary btn-block btn-sm my-2">Detail</button></Link>
                    <button onClick={()=>{this.onClickCart(item.id)}} className="btn btn-primary btn-block btn-sm my-2">Add to Cart</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        username: state.auth.username
    }
}

export default connect(mapStateToProps) (ProductItem)