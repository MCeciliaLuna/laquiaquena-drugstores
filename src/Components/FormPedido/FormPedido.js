import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./FormPedido.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import jsPDF from 'jspdf';

const FormPedido = () => {
  const producto = JSON.parse(sessionStorage.getItem("pedido"));

  for (let i = 0; i < producto.length; i++) {
    if (producto[i].precio) {
      console.log(producto[i].precio);
    }
  }

  for (let i = 0; i < producto.length; i++) {
    if (producto[i].nombre) {
      console.log(producto[i].nombre);
    }
  }

  let total = 0;

  const precios = producto.forEach((p) => (total += p.precio));

  const { register, handleSubmit } = useForm();
  const [sendPedido, setSendPedido] = useState();

  const generarPDF = (data) => {
  const pdf = new jsPDF();
  pdf.text(20, 20, `Nombre: ${data.apellido} ${data.nombre}`);
  pdf.text(20, 30, `Pedido: ${data.pedido}`);
  pdf.text(20, 190, `Total: ${data.precio}`);
  pdf.text(20, 200, `Drugstore: ${data.drugstore}`);
  pdf.text(20, 220, `Pago: ${data.pago}`);
  pdf.save('PEDIDO-QUIAQUEÑA.pdf');
}

  const enviarPedido = async (data) => {
    await axios
      .post("https://laquiaquenadrugstoresbe.onrender.com/crearpedido", data)
      .then((resp) => {
        setSendPedido(resp.data);
        generarPDF(data);
      });
    alert(
      "El pedido ha sido 𝗘𝗡𝗩𝗜𝗔𝗗𝗢 𝗘𝗫𝗜𝗧𝗢𝗦𝗔𝗠𝗘𝗡𝗧𝗘 🤩💚. Si pagaste, informanos y 𝗲𝗻𝘃𝗶𝗮𝗻𝗼𝘀 𝗲𝗹 𝗰𝗼𝗺𝗽𝗿𝗼𝗯𝗮𝗻𝘁𝗲 vía 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 💵"
    );
    window.location.href = "/postpedido"
    sessionStorage.clear('pedido')
  };

  const pedidoString = JSON.stringify(producto).replace(
    /[[\]'"{}nombre:precio ]+/g,
    ""
  );
  const pedido = pedidoString.replace(/, /g, "");
  const pedidoReplace = pedido.replace(/(\w+),(\d+)/g, " $1 $ $2\n");
  const pedidoSinComas = pedidoReplace.replace(/,/g, "");

  const horaJs = new Date();
  const horaString = horaJs.toString();
  const hora = horaString.substr(4, 17);

  const [copied, setCopied] = useState(false);
  const copiedCbu = (event) => {
    setCopied(true);
    event.preventDefault();
  };

  const [showBlock, setShowBlock] = useState(false);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "ENVIO") {
      setShowBlock(true);
    } else {
      setShowBlock(false);
    }
  };

  const resetearPedido = () => {
    if (window.confirm('¿Estás segur@ que querés borrar todo tu pedido?')) {
      sessionStorage.clear('pedido')
      window.location.href = "/productos"
    }
  }


  return (
    <form onSubmit={handleSubmit(enviarPedido)}>
      <div className="m-3">
        <div className="height-pedidos">
          <div className="d-flex justify-content-center">
            <div className="w-100 mx-4 form-width">
              <div className="d-flex justify-content-center celular">
                <textarea
                  className="input-pedido text-mipedido text-center form-control mb-1 w-50"
                  {...register("pedido", { required: true })}
                  value={pedidoSinComas}
                  rows="5"
                />
                <div className="ms-2 align-items-center">
                  <label className="text-center w-100 text-light mt-1 fs-4">
                    Total:
                  </label>
                  <div className="d-flex justify-content-center align-items-center">
                    <p className="d-flex text-light mb-0 me-2 fs-4">$</p>
                    <input
                      type="text"
                      className="text-mipedido text-center form-control w-50 fs-2"
                      {...register("precio", { required: true })}
                      value={total}
                    />
                  </div>
                </div>
              </div>
                  <div className="w-100 d-flex justify-content-center align-items-center">
                  <button className="btn mt-4 mb-2 text-light" onClick={resetearPedido}>Borrar todo</button>
                  </div>
              <hr className="text-light" />

              <input
                type="text"
                className="d-none"
                value={hora}
                {...register("datetime", { required: true })}
              />
              <div className="d-flex justify-content-around align-items-center form-datospersonales">
                <div className="d-flex justify-content-evenly inputs-datospersonales">
                  <div className="d-block">
                    <div className="d-flex align-items-center">
                      <label className="text-end mx-2 text-light w-25">
                        APELLIDO:
                      </label>
                      <input
                        type="text"
                        className="text-mipedido form-control mb-1 w-75"
                        paceholder="Nombre y apellido"
                        {...register("apellido", { required: true })}
                        required
                      />
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <label className="text-end text-light mx-2 w-25">
                        NOMBRE:
                      </label>
                      <input
                        type="text"
                        className="text-mipedido form-control mb-1 w-75"
                        paceholder="Nombre y apellido"
                        {...register("nombre", { required: true })}
                        required
                      />{" "}
                    </div>
                  </div>
                </div>

                <div className="d-block justify-content-evenly inputs-datospersonales">
                  <div className="d-flex align-items-center">
                    <label className="text-end me-2 text-light mt-0 mb-2 p-0 w-75">
                      WHATSAPP O TELÉFONO
                      <br />
                      (con código de área sin 0)
                    </label>
                    <input
                      type="number"
                      className="text-mipedido form-control d-block mb-1 w-75"
                      paceholder="381 6333444"
                      {...register("telefono", { required: true })}
                      required
                    />
                  </div>
                  <div className="d-flex align-items-center mt-1">
                  <label className="text-end me-2 text-light mt-0 p-0 w-75">
                      DRUGSTORE CERCANO:
                    </label>
                  <select className="form-select" aria-label="Default select example" {...register("drugstore", { required: true })} >
  <option value="Mendoza 2498" selected>Mendoza 2498</option>
  <option value="Lavalle 1901">Lavalle 1901</option>
  <option value="Belgrano 1991">Belgrano 1991</option>
</select>
                </div>
                </div>
                </div>
                <div className="d-flex justify-content-center input-retiro">
                <select className="form-select input-retiro mt-3 w-50" aria-label="Default select example"  onChange={handleSelectChange}>
  <option selected>RETIRO DEL LOCAL</option>
  <option value="ENVIO">ENVÍO</option>
</select>
</div>

              {showBlock && (
                <div className="d-flex justify-content-center mt-5">
                  <input className="d-none" {...register("entrega")} value="ENVIO" />
                  <div className="w-50 input-retiro">
                    <label className="text-end text-light me-2">
                      DIRECCIÓN:
                    </label>
                    <input
                      type="text"
                      className="form-control d-block mb-1 me-2"
                      paceholder="Dirección"
                      {...register("direccion", { required: true })}
                      required
                    />
                    <label className="text-end text-light ms-2 me-2">
                      Indicaciones:
                    </label>
                    <input
                      type="text"
                      className="form-control d-block mb-1"
                      paceholder="aclaraciones"
                      {...register("aclaracion", { required: true })}
                      required
                    />
                  </div>
                </div>
              )}

              <label className="text-center w-100 text-light mb-0 mt-3">
                PAGO:
              </label>
              <div className="d-flex justify-content-center align-items-center d-block mb-2">
                <CopyToClipboard text="21938729084940013">
                  <div className="d-flex align-items-center">
                    <button
                      className="m-1 btn text-light d-flex align-items-center"
                      onClick={copiedCbu}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-credit-card-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                      </svg>
                      Pagá transfiriendo a nuestro CBU
                    </button>
                  </div>
                </CopyToClipboard>
                <p className="mb-0">
                  {copied && (
                    <span className="text-light text-center fs-6 px-1 d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-clipboard-check-fill mx-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                      </svg>
                      CBU copiado al portapapeles
                    </span>
                  )}
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <select
                  class="form-select select-pago" aria-label="Default select example"
                  {...register("pago", { required: true })}
                  required
                >
                  <option className="p-0" value="NO PAGADO">
                    No pagado
                  </option>
                  <option className="p-0" value="PAGADO">
                    Pagado por transferencia
                  </option>
                </select>
              </div>
              <div className="w-100 text-center mt-3">
                <button type="submit" className="btn text-light">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormPedido;
