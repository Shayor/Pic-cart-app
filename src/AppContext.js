import React, { useState , useEffect} from "react"
 const Context = React.createContext();
 
 
 function AppContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setcartItems] = useState ([])
    useEffect(()=>{
        // fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        fetch("resourses/images.json")
        .then(r=>r.json())
        .then(data=>{
            setAllPhotos(data);
        })
    },[])

    function toggleFavorite(id){
        setAllPhotos(prevState=>{
            const toggled = prevState.map(photo=>{
                if(photo.id===id){
                    return{
                        ...photo,
                        isFavorite: !photo.isFavorite
                    }
                }
                
                return photo
            })
            return toggled
        })
        // console.log("Yeah", id)
    }
    function addCartItems(img){
        setcartItems(prevState=>prevState.concat(img));
    }
    function removeCartItems(id){
        setcartItems(prevState=>prevState.filter(data => data.id !== id))
    }
    function emptyCart(){
        setcartItems([])
    }
    return(
        <Context.Provider value={{allPhotos,toggleFavorite,cartItems,addCartItems,removeCartItems,emptyCart}}>
            {children}
        </Context.Provider>
    )
 }

 export {AppContextProvider, Context}