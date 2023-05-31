import React from 'react'

const DVDForm = ({ onChange, value }) => {
    // console.log(value)
  return (
    <label htmlFor='size' className='product_form_field'>
      <p>Size (MB)</p>
      <input
        type="text"
        name="type.DVD.size"
        id="size"
        placeholder="Enter size of the product"
        onChange={onChange}
        value={value.type.DVD?.size}
      />
      <span className='product_description'>Please provide size in MB</span>
    </label>
  );
}

export default DVDForm