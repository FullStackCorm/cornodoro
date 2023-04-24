import React, { useContext, useEffect, useRef } from 'react';
import ModalInput from './ModalInput';
import { FormDataContext } from '../context/FormDataContext';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ isSettingsOn, setIsSettingsOn, setCornodoro }) => {
    const { formData, setFormData } = useContext(FormDataContext);
    const modalRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        setCornodoro((prevCornodoro) => ({
            ...prevCornodoro,
            cornodoroTime: formData.cornodoroTime * 60,
            shortBreakTime: formData.shortBreakTime * 60,
            longBreakTime: formData.longBreakTime * 60
        }));
        setIsSettingsOn(false);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function handleOutsideClick(e) {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsSettingsOn(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
            {isSettingsOn && (
                <div
                    className={`block modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[20rem] md:w-[26rem] rounded-2xl text-pmd-blue-800 px-6 pt-6 pb-12`}
                    ref={modalRef}>
                    <div className='flex pb-6 border-b justify-between items-center'>
                        <h2 className='font-bold text-xl'>Settings</h2>
                        <button onClick={() => setIsSettingsOn(false)}>
                            <CloseIcon />
                        </button>
                    </div> 

                    <div>
                        <h3 className='uppercase tracking-wider font-bold text-sm py-3'>Time(minutes)</h3>

                        <form
                            className='inputs flex'
                            onSubmit={handleSubmit}>
                            <ModalInput
                                label={'cornodoro'}
                                name={'cornodoroTime'}
                                defaultValue={formData.cornodoroTime}
                                setFormData={setFormData}
                                onChange={handleInputChange}
                            />
                            <ModalInput
                                label={'short break'}
                                name={'shortBreakTime'}
                                defaultValue={formData.shortBreakTime}
                                setFormData={setFormData}
                                onChange={handleInputChange}
                            />
                            <ModalInput
                                label={'long break'}
                                name={'longBreakTime'}
                                defaultValue={formData.longBreakTime}
                                setFormData={setFormData}
                                onChange={handleInputChange}
                            />
                            <button
                                type='submit'
                                className='absolute -bottom-5 bg-pmd-gold-700 text-white font-semibold text-sm rounded-full px-8 py-3 left-1/2 -translate-x-1/2 hover:bg-pmd-gold-600 transition-all cursor-pointer'>Apply</button>
                        </form>
                    </div>       
                </div>
            )}
        </>
    );
};

export default Modal;