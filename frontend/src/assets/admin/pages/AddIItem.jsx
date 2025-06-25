import React from 'react';
import Title from '../../../components/Title';

const AddItem = () => {
  const [form, setForm] = React.useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    subCategory: "",
    sizes: [],
    bestseller: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, multiple, options } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (multiple) {
      const selected = Array.from(options)
        .filter((opt) => opt.selected)
        .map((opt) => opt.value);
      setForm((prev) => ({
        ...prev,
        [name]: selected,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    console.log(form);
  };

  return (
    <>
      <section className='py-5 '>

      <Title text1={'ADD'} text2={'ITEMS'} />
      <div className="max-w-xl mx-auto py-5 ">
      
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description:</label>
            <textarea
              name="description"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Price:</label>
            <input
              type="number"
              name="price"
              min="0"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Image URL:</label>
            <input
              type="text"
              name="image"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={form.image}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Category:</label>
            <select
              name="category"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={form.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Sub Category:</label>
            <select
              name="subCategory"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={form.subCategory}
              onChange={handleChange}
            >
              <option value="">Select Sub Category</option>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Footwear">Footwear</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Sizes:</label>
            <div className="flex gap-4 flex-wrap">
              {["S", "M", "L", "XL"].map((size) => (
                <label key={size} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="sizes"
                    value={size}
                    checked={form.sizes.includes(size)}
                    onChange={(e) => {
                      const { checked, value } = e.target;
                      setForm((prev) => {
                        let newSizes;
                        if (checked) {
                          newSizes = [...prev.sizes, value];
                        } else {
                          newSizes = prev.sizes.filter((s) => s !== value);
                        }
                        return { ...prev, sizes: newSizes };
                      });
                    }}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="bestseller"
              className="w-4 h-4"
              checked={form.bestseller}
              onChange={handleChange}
            />
            <label className="text-sm font-medium">Mark as Bestseller</label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add Item
          </button>
        </form>
        </div>
      </section>
    </>
  );
};

export default AddItem;
