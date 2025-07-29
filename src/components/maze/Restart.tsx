import { useState } from 'react';
import styles from './Instructions.module.css'; // CSS modular

const Restart = ({ onClose }: { onClose: () => void }) => {

    return (
        <div className={styles.instructionsOverlay}>
            <div className={styles.instructionsCard}>
                <div className={styles.header}>
                    <h2>Lo has Consegido ¡Felicidades! </h2>
                </div>


                <div className={styles.progressDots}>

                    <button
                        onClick={onClose}
                        className={styles.primaryButton}
                    >
                        Crear un nuevo jardin
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Restart;