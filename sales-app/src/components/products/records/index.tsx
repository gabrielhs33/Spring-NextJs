import { useState } from 'react'
import { Layout, Input, Message }  from 'components'
import { useProductService } from "app/services"
import { Product } from "app/models/products"
import { convertToBigDecimal } from 'app/util/money'
import { Alert } from 'components/common/message'
import * as yup from 'yup'
import { error } from 'console'

const valiationSchema = yup.object().shape({

    sku: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
})

export const RegisterProducts: React.FC = () =>{

    const service = useProductService()

    const [ sku, setSku ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ id, setId ] = useState<string>('')
    const [ registerDate, setRegisterDate ] = useState<string>('')
    const [ messages, setMessages ] = useState<Array<Alert>>([])

    const submit = () => {

        const product:Product = {

            id,
            sku,
            price: convertToBigDecimal(price),
            name,
            description
        }

        valiationSchema.validate(product).then(obj =>{


            if(id){
    
                service.update(product)
                .then(response => {
    
                    setMessages([{
                        type: "success",
                        text:"Success to Update Product!",
    
                    }])
                })
            }else{
    
                service.save(product).then(productResponse => {
        
                    setId(productResponse.id!)  
                    setRegisterDate(productResponse.registerDate!)
                    setMessages([{
                        type: "success",
                        text:"Success to Save Product!",
    
                    }])                    
                })
            }
        }).catch(error => {

            const field = error.path;
            const message = error.message;

            setMessages([
                {type:"danger", field, text:message}
            ])
        })
    }

    return(

        <Layout title="Products" messages={messages}>

            {id &&

                <div className="columns">

                    <Input label='Code: '
                            columnClass='is-half'
                            value={id}
                            id='inputId'
                            disabled
                    />

                    <Input label='Register Date: '
                            columnClass='is-half'
                            value = {registerDate}
                            id='inputRegisterDate'
                            disabled
                    />
                </div>

            }

            <div className="columns">

                <Input label='SKU: *'
                        columnClass='is-half'
                        onChange={setSku}
                        value = {sku}
                        id='inputSKu'
                        placeholder='Enter product SKU'
                />

                <Input label='Price: *'
                        columnClass='is-half'
                        onChange={setPrice}
                        value = {price}
                        id='inputPrice'
                        placeholder='Enter product Price'
                        currency
                        maxLength={16}
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
                        <button onClick={submit} className="button is-link">

                            { id ? "Update" : "Submit" }
                        </button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Turn Back</button>
                    </div>
                </div>
        </Layout>
    )
}

