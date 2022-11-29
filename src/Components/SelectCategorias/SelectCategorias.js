import React from 'react';

const SelectCategorias = () => {
  return (
    <div className="productos-page py-1 d-flex justify-content-center">
                  <select
                    className="form-select w-75 mt-0"
                    aria-label="Default select example"
                    required
                  >
                    <option value="Aceite, aderezos y vinagre">Categoría 1</option>
                    <option value="Endulzantes">Categoría 2</option>
                    <option value="Salsas">Categoría 3</option>

                  </select>
                  </div>
  );
};

export default SelectCategorias;