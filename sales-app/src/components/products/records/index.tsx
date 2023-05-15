import { useState } from 'react'
import { Layout }  from 'components'

export const RegisterProducts: React.FC = () =>{

    const [ sku, setSku ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')

    const submit = () => {

        const product = {

            sku,
            price,
            name,
            description
        }
        console.log(product)
    }

    return(

        <Layout title="Products">

            <div className="columns">
                <div className="field is-half column">
                    <label className="label" htmlFor="inputSku">SKU: *</label>
                    <div className="control">
                        <input className="input" 
                                id="inputSku" value={sku} onChange={event => setSku(event.target.value)}
                                placeholder="Enter product SKU"/>
                    </div>
                </div>
                <div className="field is-half column">
                    <label className="label" htmlFor="inputPrice">Price: </label>
                    <div className="control">
                        <input className="input" 
                                id="inputPrice" value={price} onChange={event => setPrice(event.target.value)}
                                placeholder="Enter product Price"/>
                    </div>
                </div>
            </div>
         
            <div className="field column is-full">
                <label className="label" htmlFor="inputSku">Name: </label>
                <div className="control">
                    <input className="input" 
                            id="inputName" value={name} onChange={event => setName(event.target.value)}
                            placeholder="Enter product Name"/>
                </div>
            </div>

            <div className="field column is-full">
                <label className="label" htmlFor="inputSku">Description: </label>
                <div className="control">
                    <textarea className="textarea" 
                            id="inputDesc" value={description} onChange={event => setDescription(event.target.value)}
                            placeholder="Enter product Description"/>
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

