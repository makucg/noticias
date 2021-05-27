import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = () => {

    const [categoria, SelectNoticias] = useSelect();

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Busca noticias por categoría</h2>

                    <SelectNoticias />

                    <input
                        type="submit"
                        className={`${styles['btn-blok']} btn-large amber darken-2`}
                        value="Buscar"
                    />
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;