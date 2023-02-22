import { useContext, useEffect } from "react";

export default function SplashScreen () {
    // const {auth, setAuth, setIsLoading, isLoading} = useContext(AuthContext);

    // console.log('initializing splash screen')
    const checkAuthentication = async () => {
    }

    useEffect(() => {
        const ac = new AbortController();
        // if(auth.isLoggedIn === false) {
        //     checkAuthentication();
        // }
        return () => ac.abort();
    }, []);

    return null;

    // if(auth.isLoggedIn === false && auth.user === null) {
    //     return <Redirect to="/signin"/>;
    // } 
    // else if(auth.isLoggedIn === true && auth.user !== null) {
    //     return <Redirect to="/"/>;
    // } else {
    //     // console.log('use effect is working on context splash screen');
    //     return <LoadingIndication/>;
    // }
    
}