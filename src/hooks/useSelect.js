import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    //State del custom hook
    const [state, actualizarState] = useState('');

    const SelectNoticias = () => {
        return (
            <select className="browser-default">
                <option value="">Seleccione</option>
            </select>
        );
    }

    return [state, SelectNoticias];
}
 
export default useSelect;