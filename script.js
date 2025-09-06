/* General Styling */
body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.game-container {
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

/* 3D Board Styling */
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  perspective: 1000px;
  margin: 20px auto;
}

.cell {
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.3s ease, background 0.3s ease;
}

.cell:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateZ(10px);
}

.cell.X {
  color: #ff6347;
  transform: rotateY(180deg);
}

.cell.O {
  color: #4682b4;
  transform: rotateY(180deg);
}

/* Reset Button Styling */
#reset {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

#reset:hover {
  background: #e5533d;
}
