import { useState } from "react"
import { post } from "../services/auth.service"

import Select from 'react-select'


const AddProduct = () => {

    const [newProduct, setNewProduct] = useState({
        title: '',
        description: '',
        img: '',
        categories: [],
        size: ['0-3 months', '6 months', '9 months', '12 months', '18 months', '2 years', '4 years', '6 years','8 years', '10 years', '12 years', '14 years'],
        price: 0,
        // inStock: true
    })

    const categoriesOptions = [{label: 'Newborn 0-18 months', value: 'Newborn 0-18 months'}, {label: 'Boy 1-14 years', value: 'Boy 1-14 years'}, {label: 'Girl 1-14 years', value: "Girl 1-14 years"}]

    const handleCategoryChange = (e) => {

        console.log("Select change", e)


        // let newArray = [...newProduct.categories]
        // newArray.push(e.value)

        let values = e.map((element) => element.value)
        console.log("values", values)

        setNewProduct((prev) => ({...prev, categories: values}))

    
                // setNewProduct((prev) => ({...prev, categories: e}))
                
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

    const sizesOptions = [{label:'0-3 months', value: "0-3 months"}, {label:'6 months', value: '6 months'}, {label:'9 months', value: '9 months'}, {label:'12 months', value: '12 months'}, {label:'18 months', value: '18 months'}, {label:'2 years', value: '2 years'}, {label:'4 years', value: '4 years'}, {label:'6 years', value: '6 years'}, {label:'8 years', value: '8 years'}, {label:'10 years', value: '10 years'}, {label:'12 years', value: '12 years'}, {label:'14 years', value: '14 years'}]

    const handleSizeChange = (e) => {

        console.log("Select change", e)

                let values = e.map((element) => element.value)
                console.log("values", values)
    
                setNewProduct((prev) => ({...prev, size: values}))
    
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
                setNewProduct({
                    title: '',
                    description: '',
                    img: '',
                    categories: [],
                    size: ['small', 'medium'],
                    price: 0,
                })
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