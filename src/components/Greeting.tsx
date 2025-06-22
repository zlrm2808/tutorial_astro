import { useState } from 'preact/hooks';

export default function Greeting({messages}:any) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);
  const [baseColor, setBaseColor] = useState("#00ADEF");
  const hoverColor = "#32C8C8";
  
  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button 
        style={{
          background: baseColor,
          border: "none",
          padding: "6px 10px",
          borderRadius: "4px",
          color: "white",
          transition: "background-color 0.3s ease" // Transición para suavizar el cambio
        }}
        onMouseEnter={() => setBaseColor(hoverColor)} // Al entrar, cambia al color de hover
        onMouseLeave={() => setBaseColor("#00ADEF")} 
        onClick={() => setGreeting(randomMessage())}>
        Nuevo saludo
      </button>
    </div>
  );
}