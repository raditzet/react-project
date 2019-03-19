import React, {Component} from 'react';
import axios from 'axios'

class Cart extends Component {
    state = {
        cartLocal:[]
    }
    
    getCart = () => {
        axios.get("http://localhost:1996/carts").then(res => {
            console.log(res.data);

            this.setState({cartLocal: res.data})
            console.log(this.state.cartLocal);
            
            
        })
    }
    componentDidMount(){
        this.getCart()
    }
    onDeleteCart = (id) => {
        axios.delete("http://localhost:1996/carts/" + id).then(res=>{
            this.getCart()
        })
    }
    renderList = () => {
        return this.state.cartLocal.map((item)=>{
            return(
                <tr key={item.id}>
                <td>{item.ProductId}</td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>Rp{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                    <img className="list" src={item.src} alt={item.src} />
                </td>
                <td><button onClick={()=>{this.onDeleteCart(item.id)}} className="btn btn-danger mr-2">Delete</button></td>
                </tr>
            )
        })
    }
    render(){
        return(
            <div className='container'>
            <h1 className="display-4 text-center">Caruto</h1>
            <table className="table table-hover mb-5">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">DESC</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">QTY</th>
                    <th scope="col">PICTURE</th>
                    <th scope="col">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {this.renderList()}
            </tbody>
            </table>
            </div>
        )
    }
}

export default Cart