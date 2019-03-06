import React from 'react'
import PropTypes from 'prop-types'

const CareTakerList = ({items, onRemove}) =>
    items.length === 0? <p className="alert alert-info">No hay cuidadores.</p> :
    <table className="table table-striped table-hover">
        <thead className="thead-dark">
            <tr>
                <th>Pais</th>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Correo Electrónico</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, index) =>
                <tr key={index}>
                    <td>{item.country}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                        <button className="btn btn-secondary btn-sm" onClick={e => onRemove(index)}>Borrar</button>
                    </td>
                </tr>
            )}
        </tbody>
    </table>

CareTakerList.propTypes = {
    items: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default  CareTakerList
