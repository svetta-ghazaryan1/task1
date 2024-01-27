import React from "react";
import { useForm } from "react-hook-form";



export const MusicUploadForm: React.FC = React.memo((): JSX.Element => {
    const{register,handleSubmit}=useForm<File>();

return( 

    <div> 
        

    <form action="" onSubmit={handleSubmit(save)}>
                             

                <input type="text"  {...register("file")} placeholder="File" />

                
                
              <button>save</button>
            </form>
            </div>
)

})
