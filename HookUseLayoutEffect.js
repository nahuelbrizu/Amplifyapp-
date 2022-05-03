import React, {useLayoutEffect, useState} from "react";

function HookUseLayoutEffect() {

    useLayoutEffect(() => {
        fetch("https://restcountries-v1.p.rapidapi.com/alpha/").then(res => res.json()).then(data=>{
            console.log(data)
        })
        }
    )
}
export default HookUseLayoutEffect;