import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { categorizeIngredients } from '../Util/categrizeIngredients';

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
    const handleCheckBoxChange= (value) =>{
        console.log(value);
    }
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
                        <p className='font-semibold text-xl'>{item.name}</p>
                        <p>৳ {item.price}</p>
                        <p className=''>{item.description}</p>

                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            Object.keys(categorizeIngredients(item.ingredients)).map((category,index) =>
                                <div key={index}>
                                    <p>{category}</p>
                                    <FormGroup>
                                        {
                                            categorizeIngredients(item.ingredients)[category].map((item,index) =><FormControlLabel key={index} control={<Checkbox onChange={()=>handleCheckBoxChange(item)} />} label={item.name} />
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