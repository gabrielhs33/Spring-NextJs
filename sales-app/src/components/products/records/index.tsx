import { useState } from 'react'
import { Layout, Input }  from 'components'
import { useProductService } from "app/services"
import { Product } from "app/models/products"

export const RegisterProducts: React.FC = () =>{

    const service = useProductService()

    const [ sku, setSku ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')

    const submit = () => {

        const product:Product = {

            sku,
            price: parseFloat(price),
            name,
            description
        }
        service.save(product).then(productResponse => console.log(productResponse))
    }

    return(

        <Layout title="Products">

            <div className="columns">

                <Input label='SKU: *'
                        columnClass='is-half'
                        onChange={setSku}
                        value = {sku}
                        id='inputSKu'
                        placeholder='Enter product SKU'
                />

                <Input label='Price: '
                        columnClass='is-half'
                        onChange={setPrice}
                        value = {price}
                        id='inputPrice'
                        placeholder='Enter product Price'
                />
                </div>

                <div className='columns'>

                    <Input label='Name: '
                            columnClass='is-full'
                            onChange={setName}
                            value = {name}
                            id='inputName'
                            placeholder='Enter product Name'
                    />
                </div>

                <div className='columns'>
                    <div className="field column is-full">
                        <label className='label' htmlFor="inputDesc">Description: *</label>
                        <div className='control'>
                            <textarea className='textarea'
                                        id = "inputDesc" value={description}
                                        onChange={ event => setDescription(event.target.value)}
                                        placeholder='Enter product Description'
                            />    
                        </div>
                    </div>
                </div>

                <div className="field is-grouped">
                <div className="control">
                    <button onClick={submit} className="button is-link">Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Turn Back</button>
                </div>
            </div>
        </Layout>
    )
}

