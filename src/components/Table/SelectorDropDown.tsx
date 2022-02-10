import { MenuItem, TextField } from "@mui/material";
import { useState } from "react"

interface SelectorProps{
    allowedValues:string[],
    selectedValue: string,
    for: string,
    useValue: Function
}
export const SelectorDropDown = (props:SelectorProps)=>{
    const [textValue,setTextValue] = useState(props.selectedValue);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTextValue(e.target.value);
        props.useValue(e.target.value);
    }
    return(
        <div>
        <TextField select onChange={handleChange} 
        value={textValue} 
        id={props.for+"selector"} 
        label={"select "+props.for} 
        variant="standard"
        style={{width:"100%"}}
        >
            {props.allowedValues.map((val,i)=>(
                <MenuItem key={i} value={val}>
                    {val}
                </MenuItem>
            ))}
        </TextField>
        </div>
    )
}


export {}