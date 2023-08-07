import { useState } from "react"
import { post } from "../services/auth.service"

import Select from 'react-select'


const AddProduct = () => {

    const [newProduct, setNewProduct] = useState({
        title: '',
        description: '',
        img: '',
        categories: [],
        size: ['small', 'medium'],
        price: 0,
        // inStock: true
    })

    const categoriesOptions = [{label: 'boy', value: 'boy'}, {label: 'girl', value: "girl"}]

    const handleCategoryChange = (e) => {

        console.log("Select change", e)


        // let newArray = [...newProduct.categories]
        // newArray.push(e.value)



    
                setNewProduct((prev) => ({...prev, categories: e}))
                
    }

    // const CategoriesSelect = ({ handleCategoryChange, e }) => {
    //     return (

    //         <Select
    //         // defaultValue={categoriesOptions}
    //         isMulti
    //         name="categories"
    //         options={categoriesOptions}
    //         className="basic-multi-select"
    //         classNamePrefix="select"
    //         onChange={(e) => handleCategoryChange(e)}
    //       />   
    //     )
    // }

    const sizesOptions = [{label:'small', value: "small"}, {label:'medium', value: 'medium'}]

    const handleSizeChange = (e) => {

        console.log("Select change", e)
    
                setNewProduct((prev) => ({...prev, size: e}))
    
    }

    // const SizesSelect = ({ handleSizeChange}) => {
    //     return (

    //         <Select
    //         defaultValue={sizesOptions}
    //         isMulti
    //         name="sizes"
    //         options={sizesOptions}
    //         className="basic-multi-select"
    //         classNamePrefix="select"
    //         onChange={handleSizeChange}
    //       />   
    //         )        
    // }

    const handleTextChange = (e) => {
        setNewProduct((prev) => ({...prev, [e.target.name]: e.target.value}))
        console.log("Post changing", newProduct)
    }
    
    const handleNumberChange = (e) => {
        setNewProduct((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
        console.log("Post changing", newProduct)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("New Product", newProduct)
        post('/product', newProduct)
            .then((response) => {
                console.log("new products", response.data)
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <h1> Add Product</h1>
       
            <Select
            defaultValue={sizesOptions}
            isMulti
            name="sizes"
            options={sizesOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleSizeChange}
          />

<Select
            // defaultValue={categoriesOptions}
            isMulti
            name="categories"
            options={categoriesOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => handleCategoryChange(e)}
          />   
       <form onSubmit={handleSubmit} >

            <label>Title:</label>
            <input type="text" name="title" onChange={handleTextChange}/>

            <label>Description:</label>
            <input type="text"name="desc" onChange={handleTextChange} />

            <label>Image:</label>
            <input type="text" name="img" onChange={handleTextChange} />



            <label>Price:</label>
            <input type="number" name="price" onChange={handleNumberChange}/>

            <button type="submit" >Add Product</button>

       </form>

        </div>
  )
}

// title: { type: String, required: true, unique: true},
// desc: { type: String, required: true },
// img: { type: String, required: true },
// categories: { type: Array },
// size: { type: Array },
// price: {type: Number, required: true },
// inStock: { type: Boolean, default: true },

export default AddProduct