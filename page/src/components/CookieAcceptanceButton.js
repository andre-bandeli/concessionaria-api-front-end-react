import React, { useState, useEffect } from 'react';
import './cookie.css'
const CookieAcceptanceButton = () => {
  const [accepted, setAccepted] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 100);
  }, []);

  const handleClick = () => {
    setAccepted(true);
    // Armazene o estado de aceitação dos cookies aqui (por exemplo, usando "localStorage")
  };

  return (
    <>
      {showButton && !accepted && (
        <div className='cookie_button'>
            <div className='container_cookie'>
                <h2>
                    Este site utiliza Cookies!
                </h2>
                <h3>
                    Nós, da WebMotors, entendemos a importância de uma experiência de 
                    navegação rápida e eficiente para nossos usuários. Para garantir isso, utilizamos o 
                    cache de dados em nossos servidores e na aplicação. Cache de dados é uma forma de armazenar informações 
                    temporariamente em um dispositivo, como 
                    um navegador ou um servidor, para que elas possam ser acessadas rapidamente em uma visita posterior.
                </h3>
            <button onClick={handleClick} className="accept">Aceito cookies</button>
            <button onClick={handleClick} className="decline">Não Aceito cookies</button>
            </div>
        </div>
      )}
    </>
  );
};

export default CookieAcceptanceButton;