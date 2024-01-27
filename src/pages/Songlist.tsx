import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/MyContex";
export const Songlist: React.FC = React.memo((): JSX.Element => {
  const {songs}=useContext(MyContext)
    return (
      <div className="Error">

        <h1>Post</h1>
        <table border={3}>
        <thead>
            <tr>
                <td>SongName</td>
                <td>ArtisName</td>
                <td>Tracknumber</td>
               
               
            </tr>
        </thead>
        <tbody>
            {songs.map((elm)=>
            <tr key={elm.trackNumber}>
             <td>{elm.songName}</td>
             <td>{elm.artistName}</td>
             <td>{elm.trackNumber}</td>
             {/* <td><button onClick={()=>delete(elm.trackNumber)}>Delete</button></td> */}
             
                      </tr>)

            }
        </tbody>
     </table>
      </div>
    );
  });