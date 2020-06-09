import React, { Component } from 'react'
import { MdDelete } from 'react-icons/md';
import { MdEdit  } from 'react-icons/md';
 
export default class TodoItem extends Component {
    render() {
        const {title,handleDelete, handleEdit} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex 
            justify-content-between my-3">
                <h6>{title}</h6>
                <div className="todo-icon">
                  <MdEdit color='white' size='1rem' className="text-success" onClick={handleEdit}/>
                  <MdDelete color='white' size='1rem' className="text-danger" onClick={handleDelete}/>
                </div>
            </li>
        )
    }
}
