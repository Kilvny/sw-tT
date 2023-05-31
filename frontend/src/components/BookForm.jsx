import React from 'react'

const BookForm = ({ onChange, value }) => {
  return (
    <label htmlFor='weight' className='product_form_field'>
      <p>Weight (KG)</p>
      <input
        type="text"
        name="type.Book.weight"
        id="weight"
        placeholder="Enter weight of the product"
        onChange={onChange}
        value={value.type.Book.weight}
      />
      <span className='product_description'>Please provide weight in Kilograms</span>
    </label>  )
}

export default BookForm