import React, { useState,useEffect } from "react";
import {useLocation } from "react-router-dom";


export const usePath = () => {

    const [screen, setScreen] = useState('');
    const {pathname} = useLocation();

    useEffect(() => {
      const pathId = (urlPath) => setScreen(`${urlPath.slice(1)}`);
      pathId(pathname);
    }, [pathname]);

    return screen;

}