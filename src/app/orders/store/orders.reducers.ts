import {myOrder} from "../myorder.model";
import * as OrdersActions from './orders.actions';
import {Product} from "../../products/product.model";


export interface State {
  orderItem: myOrder;
  ordersList: myOrder[];
  orderSaved: boolean;
  orderToSave: boolean;
}

const initialState: State = {
  orderItem :  new myOrder(1 , 1 , 0 , Date.now() , [] ) ,
  ordersList : [],
  orderSaved: false,
  orderToSave: false
};

export function ordersReducer(state = initialState, action: OrdersActions.OrdersActions){
    switch(action.type) {
      case OrdersActions.ADD_PRODUCT:
        const ordToAdd = state.orderItem;
        const indToADD = findById(ordToAdd , (<Product>action.payload)._id );
        if (indToADD !== -1) {
          ordToAdd.products[indToADD].quantity += 1;
        }
        else {
          ordToAdd.products.push({product: action.payload, quantity: 1});
        }
        ordToAdd.total += (<Product>action.payload).price;
        return {
          ...state,
          orderItem: ordToAdd
        };
      case OrdersActions.REMOVE_PRODUCT:
        const ordToRem = state.orderItem;
        const indToRem = findById(ordToRem , (<Product>action.payload)._id );
        if (indToRem !== -1) {
          if (ordToRem.products[indToRem].quantity === 1) {
            ordToRem.products.splice(indToRem, 1);
          } else {
            ordToRem.products[indToRem].quantity -= 1;
          }
          ordToRem.total -= (<Product>action.payload).price;
        }
        return {
          ...state,
          orderItem: ordToRem
        };
      case OrdersActions.SET_PERSONS:
        const ordTmp = state.orderItem;
        if (!( (ordTmp.persons === 1) && (action.payload === -1))) {
          ordTmp.persons += action.payload;
        }
        return {
          ...state,
          orderItem: ordTmp
        };
      case OrdersActions.CANCEL_ORDER:
        return{
          ...state,
          orderItem :  new myOrder(1 , 1 , 0 , Date.now() , [] )
        };
      case OrdersActions.SET_ORDERS_LIST:
        return{
          ...state,
          ordersList: action.payload
        };
      case OrdersActions.SET_ORDER_SAVED:
        return{
          ...state,
          orderSaved: action.payload
        };
      case OrdersActions.SET_ORDER_TO_SAVE:
        return{
          ...state,
          orderToSave: action.payload
        };
      default :
        return state;
    }


}

function findById(ord: myOrder , id: string) : number {
  const ind = ord.products.findIndex((p) => {
    return p.product._id === id;
  });
  return ind;
}
