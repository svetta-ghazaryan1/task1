import React, { useContext } from "react";
import { MyContext } from "../context/MyContex";




export const Songlist: React.FC = React.memo((): JSX.Element => {
    const {addallbutton}=useContext(MyContext)

    return(
        <div>
            <button onClick={()=>addallbutton()}>Addallbutton</button>
        </div>
    )
})