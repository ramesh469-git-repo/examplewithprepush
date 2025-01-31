import PageNotFound from "../pageNotFound";
import React from "react";
import { redirect } from "react-router-dom";
export default class publicApiService {
    static getDashboardDetails = async()=>{
        try{
        const response =await fetch('http://universities.hipolabs.com/search?country=United+Kingdom');
        //const response = await fetch('http://localhost:3000/api/places');
        const resData = await response.json();
        return resData;
        }
        catch(error){
            console.log(error);
        }
        
        
    }
}