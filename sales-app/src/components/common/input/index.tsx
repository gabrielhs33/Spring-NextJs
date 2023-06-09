import { InputHTMLAttributes } from 'react'
import { formatMoney } from 'app/util/money'


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

    id: string;
    onChange?: (value: any) => void;
    label:string;
    columnClass?: string;
    currency?: boolean;  
    error?: string;
}

export const Input:React.FC<InputProps> = ({
    onChange,
    label,
    columnClass,
    id,
    currency,
    error,
    ...inputprops
}: InputProps) => {

    const onInputChange = (event:any) => {

    
        let value = event.target.value;

        if(value && currency){

            value=formatMoney(value);
        }

        if(onChange){
            onChange(value);
        }
        
    }

    return(

        <div className= {`field column ${columnClass}`}>
        <label className="label" htmlFor="inputSku">{label}</label>
        <div className="control">
            <input className="input" 
                    id={id} {...inputprops}
                     onChange={ onInputChange}
                    />
                    {
                        error &&
                        <p className="help is-danger">{ error }</p>
                    }
        </div>
    </div>
    )
}