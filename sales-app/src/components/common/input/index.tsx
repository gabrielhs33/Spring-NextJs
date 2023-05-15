import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

    id: string;
    onChange?: (value: any) => void;
    label:string;
    columnClass?: string,   
}

export const Input:React.FC<InputProps> = ({
    onChange,
    label,
    columnClass,
    id,
    ...inputprops
}: InputProps) => {

    return(

        <div className= {`field column ${columnClass}`}>
        <label className="label" htmlFor="inputSku">{label}</label>
        <div className="control">
            <input className="input" 
                    id={id} {...inputprops}
                     onChange={event => {
                        if(onChange){
                            onChange(event.target.value)
                        }
                    }}
                    />
        </div>
    </div>
    )
}