import { MenuItem, TextField } from "@mui/material";
import { useState } from "react"

interface SelectorProps{
    allowedValues:string[],
    selectedValue: string
}
export const SelectorDropDown = (props:SelectorProps)=>{
    const [selectedValue,setSelectedValue] = useState(props.selectedValue);
    return(
        <>
        <TextField select id="standard-basic" label={selectedValue} variant="standard">
            {props.allowedValues.map((val)=>(
                <MenuItem>
                    {val}
                </MenuItem>
            ))}
        </TextField>
        </>
    )
}


export {}