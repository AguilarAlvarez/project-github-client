import { useState, useEffect, useCallback } from 'react';
import styles from './maze-styles.module.css';
import Player from './Player';
import { generateMaze } from '@/utils/maze'

type Position = { x: number; y: number };
type Cell = 'P' | 'W' | 'S' | 'E';

const Maze = () => {
    const [maze, setMaze] = useState<Cell[][]>([]);
    useEffect(() => {
        const maze = generateMaze(40)
        setMaze(maze)
    }, [])

    const [playerPos, setPlayerPos] = useState<Position>({ x: 0, y: 0 });
    const [gameWon, setGameWon] = useState(false);

    // Encontrar posición inicial
    useEffect(() => {
        maze.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell === 'S') setPlayerPos({ x, y });
            });
        });
    }, [maze]);
    const resetMaze = () => {
        setMaze(generateMaze(40));
        setGameWon(false);
    };

    const movePlayer = useCallback((dx: number, dy: number) => {
        if (gameWon) return;

        const newX = playerPos.x + dx;
        const newY = playerPos.y + dy;

        if (
            newX >= 0 && newX < maze[0].length &&
            newY >= 0 && newY < maze.length &&
            maze[newY][newX] !== 'W'
        ) {
            setPlayerPos({ x: newX, y: newY });

            if (maze[newY][newX] === 'E') {
                setGameWon(true);
            }
        }
    }, [playerPos, maze, gameWon]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp': movePlayer(0, -1); break;
                case 'ArrowDown': movePlayer(0, 1); break;
                case 'ArrowLeft': movePlayer(-1, 0); break;
                case 'ArrowRight': movePlayer(1, 0); break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [movePlayer]);

    return (
        <div className={styles.mazeContainer}>
            <h2>🌿 Laberinto del Jardín</h2>

            {gameWon ? (
                <div className={styles.winMessage}>¡Encontraste la salida! 🎉</div>
            ) : (
                <div className={styles.maze}>
                    {maze.map((row, y) => (
                        <div key={y} className={styles.row}>
                            {row.map((cell, x) => (
                                <div
                                    key={x}
                                    className={`${styles.cell} ${cell === 'W' ? styles.wall :
                                        cell === 'E' ? styles.exit : 'E'
                                        }`}
                                >
                                    {playerPos.x === x && playerPos.y === y && <Player />}
                                    {cell === 'E' && !gameWon && '🌻'}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Maze;