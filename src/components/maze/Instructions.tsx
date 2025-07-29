import { useState } from 'react';
import styles from './Instructions.module.css'; // CSS modular

const Instructions = ({ onClose }: { onClose: () => void }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            title: "🌱 Bienvenido a PlantLabyrinth",
            content: "Guía a tu caracol a través del jardin para ayudarlo a cruzar.",
            icon: "🐌"
        },
        {
            title: "🕹️ Controles",
            content: "Usa las teclas de flecha (↑ ↓ ← →)",
            icon: "🎮"
        },
        {
            title: "🏁 Objetivo",
            content: "Muevete por el jardin hasta encontrar la salida en la parte superior",
            icon: "⏱️"
        },
    ];

    return (
        <div className={styles.instructionsOverlay}>
            <div className={styles.instructionsCard}>
                <div className={styles.header}>
                    <h2>{steps[currentStep].title}</h2>
                    <span className={styles.icon}>{steps[currentStep].icon}</span>
                </div>

                <p className={styles.content}>{steps[currentStep].content}</p>

                <div className={styles.progressDots}>
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentStep ? styles.activeDot : ''}`}
                            onClick={() => setCurrentStep(index)}
                            aria-label={`Ir al paso ${index + 1}`}
                        />
                    ))}
                </div>

                <div className={styles.buttons}>
                    {currentStep > 0 && (
                        <button
                            onClick={() => setCurrentStep(p => p - 1)}
                            className={styles.secondaryButton}
                        >
                            Anterior
                        </button>
                    )}

                    {currentStep < steps.length - 1 ? (
                        <button
                            onClick={() => setCurrentStep(p => p + 1)}
                            className={styles.primaryButton}
                        >
                            Siguiente
                        </button>
                    ) : (
                        <button
                            onClick={onClose}
                            className={styles.primaryButton}
                        >
                            ¡Entendido! Empezar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Instructions;