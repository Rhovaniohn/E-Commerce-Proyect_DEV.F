import React from 'react'
import { itemsArray } from '../services/useItems'


const AllItems = () => {

    
    console.log(itemsArray)


    return (
        <section className='p-5'>
            <form className='mb-4'>
                <input type='text' className='form-control' placeholder='Busca tu producto' />
            </form>
                <div className='card py5'>
                    <h4 class='text-center mb-5'><strong>Product listing</strong></h4>
                        <div class='d-flex flex-wrap'>
                            {
                                itemsArray.map((item,index) => (
                                    <div key={index} className='col-mb' >
                                        <div class='bg-image hover-zoom ripple shadow-1-strong rounded' >
                                            <img className='img-fluid' src={item.image} width='200' height='200'/>
                                            <p className='text'>{item.product_name}</p>
                                        </div>                
                                    </div>
                                ))
                            }
                        </div>          
                </div>
        </section>
    )
}


export default AllItems
