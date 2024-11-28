import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { categorizeIngredients } from '../Util/categrizeIngredients';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Action';

const demo = [
    {
        category: "Nuts and seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Ground Beef", "Bacon strips"]
    },
];
const MenuCard = ({item}) => {
    const dispatch = useDispatch();
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const handleCheckBoxChange= (itemName) =>{
        console.log(itemName);
        if(selectedIngredients.includes(itemName)){
            setSelectedIngredients(selectedIngredients.filter((item)=>item!==itemName))
        }else{
            setSelectedIngredients([...selectedIngredients,itemName])
        }
    }
    const handleAddItemToCart=(e)=>{
        e.preventDefault();
        const reqData = {
            token:localStorage.getItem("jwt"),
            cartItem:{
            foodId:item.id,
            quantity:1,
            ingredients: selectedIngredients
            }
        }
        dispatch(addItemToCart(reqData))
        console.log(reqData)
    };

   
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex items-center justify-between '>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img className='w-[7rem] h-[7rem] object-cover' src={item.images[0]} alt={item.name}></img>
                    </div>
                    <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                        <p className='font-semibold text-xl'>{item.name.split('-')[0]}</p>
                        <p>৳ {item.price}</p>
                        <p className=''>{item.description}</p>

                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={handleAddItemToCart}>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            Object.keys(categorizeIngredients(item.ingredients)).map((category,index) =>
                                <div key={index}>
                                    <p>{category}</p>
                                    <FormGroup>
                                        {
                                            categorizeIngredients(item.ingredients)[category].map((item,index) =><FormControlLabel key={index} control={<Checkbox onChange={()=>handleCheckBoxChange(item.name)} />} label={item.name} />
                                        )
                                        }
                                    </FormGroup>
                                </div>
                            )
                        }
                    </div>
                    <div className='pt-55'>
                        <Button variant='contained' disabled={false} type='submit'>{true?"Add to Cart":"Out of Stock"}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default MenuCard;