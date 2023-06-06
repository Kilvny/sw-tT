import React from 'react'

const DVDForm = ({ onChange, value }) => {
  return (
    <label htmlFor='size' className='product_form_field'>
      <p>Size (MB)</p>
      <input
        type="text"
        name="size"
        id="size"
        placeholder="Enter size of the product"
        onChange={onChange}
        value={value.type?.size}
      />
      <span className='product_description'>Please provide size in MB</span>
    </label>
  );
}

export default DVDForm