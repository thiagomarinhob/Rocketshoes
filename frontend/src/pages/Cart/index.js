import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
        <ProductTable>
            <thead>
                <tr>
                    <th />
                    <th>PRODUTO</th>
                    <th>QTD</th>
                    <th>SUBTOTAL</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img
                        src="https://static.netshoes.com.br/produtos/tenis-nike-flyby-mid-masculino/26/HZM-3021-026/HZM-3021-026_zoom2.jpg?ts=1579804073&ims=326x"
                        alt=""
                        />
                    </td>
                    <td>
                        <strong>TÊnis massa</strong>
                        <span>R$000,00</span>
                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#7159c1" />
                            </button>
                            <input type="number" readOnly value={1}/>
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1" />
                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>R$259.80</strong>
                    </td>
                    <td>
                        <button type="button">
                            <MdDelete size={20} color="#7159c1" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </ProductTable>

        <footer>
            <button type="submit">Finalizar Pedido</button>
            <Total>
                <span>TOTAL</span>
                <strong>R$000,00</strong>
            </Total>
        </footer>
    </Container>
  );
}
