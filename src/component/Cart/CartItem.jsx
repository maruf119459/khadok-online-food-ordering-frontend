import { Chip, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, updateCartItem } from '../State/Cart/Action';
const CartItem = ({item}) => {
    console.log(item)
    const { auth } = useSelector(store => store);
    const [quantity,setQuantity] = useState(item.quantity)
    const dispatch = useDispatch();
    const jwt=localStorage.getItem("jwt");
    
    useEffect(()=>{
        if(quantity===0){
            dispatch(removeCartItem({cartItemId:item.id, jwt:auth.jwt || jwt}))
        }
        const data={cartItemId:item.id, quantity:quantity}
        dispatch(updateCartItem({data,jwt}))
    },[quantity,dispatch,item.id,jwt,auth.jwt])
   

   
    return (
        <div className='px-5'>
            <div className='lg:flex items-center lg:space-x-5'>
                <div>
                    <img className='w-[5rem] h-[5rem] object-cover ' src={item?.food?.images[0]} alt='food-img'></img>
                </div>

            </div>
            <div className='flex items-center justify-between lg:w-[70%]'>
                <div className='space-y-1 lg:space-y-3 w-full'>
                    <p>{item?.food?.name}</p>
                    <div className='flex justify-center items-center'>
                        <div className='flex items-center space-x-1'>
                            <IconButton onClick={()=>setQuantity(quantity-1)}>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <div className='w-5 h-5 text-xs flex items-center'>
                                {item.quantity}
                            </div>
                            <IconButton onClick={()=>setQuantity(quantity+1)}>
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </div>
                        
                    </div>
                </div>
                <div>
                <p>৳ {item?.totalPrice}</p>
                </div>

            </div>
            <div className='pt-3 space-x-2'>
                {
                    item?.ingredients?.map((ingredients,index)=><Chip key={index} label={ingredients}/>)
                }
            </div>
        </div>
    );
};

export default CartItem;