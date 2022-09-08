import { useState } from 'react';

import Modal from '../Modal/Modal';
import Backdrop from '../Modal/Backdrop';

function Todo(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    function deleteHandler() {

        setIsModalOpen(true);

        console.log(props.title)
    }

    return (
        <div className="card todo-component">
            <h2 className="">{props.title}</h2>
            <div className="actions">
                <span className="">A span</span>
                <div className="">
                    <button type="button" className="btn" onClick={deleteHandler}>Delete</button>
                </div>
            </div>

            { isModalOpen  && <Modal /> }
            { isModalOpen  && <Backdrop /> }            
        </div>
    );
}

export default Todo;
