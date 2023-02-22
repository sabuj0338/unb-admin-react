import React from "react";

export default React.createContext({
    isLoading: true,
    setIsLoading: (isLoading:boolean) => {},
});