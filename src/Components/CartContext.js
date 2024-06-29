import { Save } from "@mui/icons-material";
import React,{Component,createContext} from "react";
export const CartContext=createContext();

class CartContextProvider extends Component{

    constructor(props){
        super(props);
        let existingCart = localStorage.getItem('myCart')!= undefined ? JSON.parse(localStorage.getItem('myCart')) :[];
        let cardAmount=existingCart.length;
        this.state={ 
            item:existingCart,
            size:cardAmount,
            increment: (value)=>{
            let itemList=this.state.item;
            itemList.push(value);

            this.setState( {item:itemList});
            this.setState({size:this.item.length});

            this.state.SaveToLocalCache();
            },

            SaveToLocalCache:()=>{
                 localStorage.setItem('myCart'.JSON.stringify(this.state.item));
            }
        }
        
    
}
    render() {
        return(
            <CartContext.Provider values={{...this.state,...this.increment}}>
            {this.props.childern}
            </CartContext.Provider>
         );
    }
}
export default CartContextProvider;