
import React from "react";
import { Song } from "../type";

interface Data{
    songs:Song[],
    addallbutton:Function
}
export const MyContext=React.createContext<Data>({}as Data)