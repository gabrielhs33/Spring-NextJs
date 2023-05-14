import { Layout }  from 'components'

export const RegisterProducts: React.FC = () =>{

    return(

        <Layout title="Products">

            <div className="field">
                <label className="label" htmlFor="inputSku">SKU: *</label>
                <div className="control">
                    <input className="input" 
                            id="inputSku"
                            placeholder="Enter product SKU"/>
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="inputPrice">Price: </label>
                <div className="control">
                    <input className="input" 
                            id="inputPrice"
                            placeholder="Enter product Price"/>
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="inputSku">Name: </label>
                <div className="control">
                    <input className="input" 
                            id="inputName"
                            placeholder="Enter product Name"/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="inputSku">Description: </label>
                <div className="control">
                    <textarea className="textarea" 
                            id="inputDesc"
                            placeholder="Enter product Description"/>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Turn Back</button>
                </div>
            </div>
        </Layout>
    )
}