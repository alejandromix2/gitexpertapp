import { useState } from 'react'
import AddCategory  from "./components/AddCategory";
import GifGrid  from "./components/GifGrid"

const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch' ])
    console.log(categories)

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)){
            console.log("Ya existe, intenta con otro")
            return
        }


        setCategories([...categories, newCategory])
    }

    
  return (
    <> 
        {/* Titulo */}
        <h1> Gif Expert App </h1>
        {/* Input */}
        <AddCategory 
            onNewCategory={onAddCategory}
        />

        { categories.map(category => (
                
            <GifGrid 
                key={category}
                category={category}
            />  
            ))
        }
    </>
  )
}

export default GifExpertApp