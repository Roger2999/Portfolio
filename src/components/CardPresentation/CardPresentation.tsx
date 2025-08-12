import "./CardPresentation.css"
export const CardPresentation = () => {
  return (
    <div className="card-container">

    <div className="card-presentacion">
      <div className="imagen-perfil">
        <img src="src\assets\avatar.svg" alt="Tu nombre" />
      </div>
      <div className="informacion">
        <h2>Tu nombre</h2>
        <p>Tu profesión / descripción</p>
        <p>Tu ubicación</p>
        <div className="redes-sociales">
          <a href="tu-linkedin" target="_blank">
            Linkedin
            
          </a>
          <a href="tu-github" target="_blank">
              GitHub
            
          </a>
          <a href="tu-twitter" target="_blank">
              Twitter
            
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

