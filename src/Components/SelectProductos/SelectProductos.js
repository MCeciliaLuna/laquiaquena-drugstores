import React from 'react';

const SelectProductos = () => {
  return (
    <div className="productos-page py-1 d-flex justify-content-center">
                  <select
                    className="form-select w-75 mt-5"
                    aria-label="Default select example"
                    required
                  >
                    <option value="Categoría 1">Categoría 1</option>
                    <option value="Categoría 2">Categoría 2</option>
                    <option value="Categoría 3">Categoría 3</option>
                    <option value="Categoría 4">Categoría 4</option>
                  </select>
                  </div>
  );
};

export default SelectProductos;