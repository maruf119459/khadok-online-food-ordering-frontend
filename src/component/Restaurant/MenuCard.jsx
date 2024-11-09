import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

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
const MenuCard = () => {
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
                        <img className='w-[7rem] h-[7rem] object-cover' src="https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285_960_720.png" alt='pizza'></img>
                    </div>
                    <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                        <p className='font-semibold text-xl'>Pizza</p>
                        <p>৳ 499</p>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore excepturi necessitatibus unde nihil sapiente!</p>

                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            demo.map((item) =>
                                <div>
                                    <p>{item.category}</p>
                                    <FormGroup>
                                        {
                                            item.ingredients.map((item) =><FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)} />} label={item} />
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