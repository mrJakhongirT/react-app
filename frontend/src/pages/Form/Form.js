import React from 'react';
import "./form.scss";
import formImg from "./formImage/form.svg";
function Form(props) {
    return (
        <div className='formClass'>
            <div className={"formHeader"}>
                <p>Предложи свой букет</p>
            </div>
            <div className=" formInputs  d-flex justify-content-center align-items-center gap-3">
                <div className='leftForm'>
                    <input  className='form-control ' type="text" placeholder='Имя' />
                    <input className='form-control my-3' type="text" placeholder='Телефон' />
                    <textarea className='form-control' cols="30" rows="10" placeholder='Ваша идея'></textarea>
                    
                </div>
               
                <div className='rigthForm'>
                    <img src={formImg} alt="pictu" width={370} height={592} />
                </div>
            </div>

            <div className={"formBtn"}>
                <button>Отправить</button>
            </div>
        </div>
    );
}

export default Form;