import { Children } from "react";

export function Link(props){
    return(
        <div {...props}>{Children}</div>
    )
}