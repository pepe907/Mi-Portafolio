import { useState } from 'react'
import './App.css'

const proyectos = [
  {
    nombre: 'Sistema de Biblioteca',
    descripcion:
      'Aplicación desarrollada en Java para gestionar libros, préstamos y devoluciones mediante programación orientada a objetos.',
    tecnologias: ['Java', 'POO', 'ArrayList'],
    enlace:
      'https://github.com/pepe907/Proyectos_java/tree/main/src/Biblioteca',
  },
  {
    nombre: 'Gestor-de-Biblioteca',
    descripcion:
      'Aplicación para administrar libros mediante operaciones CRUD y estructuras de datos en Spring boot y postgreSQL',
    tecnologias: ['Spring boot', 'PostgreSQL'],
    enlace:
      'https://github.com/pepe907/Gestor-de-biblioteca/tree/main/src/main/java/com/Gestor_biblioteca/biblioteca',
  },
  {
    nombre: 'Cuenta Bancaria',
    descripcion:
      'Proyecto desarrollado en Java para trabajar con cuentas bancarias y aplicar conceptos de programación orientada a objetos.',
    tecnologias: ['Java', 'POO'],
    enlace:
      'https://github.com/pepe907/Proyectos_java/tree/main/src/CuentaBancaria',
  },
  {
    nombre: 'Sistema de Inventario',
    descripcion:
      'Proyecto orientado a la gestión de productos y operaciones básicas de inventario.',
    tecnologias: ['Java', 'POO'],
    enlace:
      'https://github.com/pepe907/Proyectos_java/tree/main/src/Sistema_De_Inventario',
  },
  {
    nombre: 'Veterinaria',
    descripcion:
      'Sistema desarrollado en Java para practicar programación orientada a objetos y organización de clases.',
    tecnologias: ['Java', 'POO'],
    enlace:
      'https://github.com/pepe907/Proyectos_java/tree/main/src/Veterinaria',
  },
]

function App() {
  const [mostrarAviso, setMostrarAviso] = useState(false)

  return (
    <div className="portafolio">
      <header className="navbar">
        <a href="#inicio" className="logo">
          Agustín
        </a>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>


      <main>
        <section id="inicio" className="presentacion">
          <p className="saludo">
            Hola, soy
          </p>
          <h1>
            Agustín Enrique Cabezas Yanguma
          </h1>
          <h2>
            Estudiante de Análisis y Desarrollo de Software
          </h2>
          <p className="descripcion">
            En formación en desarrollo backend, con conocimientos en
            Java, Spring Boot, SQL, PostgreSQL y desarrollo de
            aplicaciones web.
          </p>

          <div className="botones-inicio">
            <a
              href="#proyectos"
              className="boton boton-principal"
            >
              Ver proyectos
            </a>

            <a
              href="https://github.com/pepe907"
              target="_blank"
              rel="noopener noreferrer"
              className="boton boton-secundario"
            >
              GitHub
            </a>

            <a
              href="/CV-Agustin-Cabezas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="boton boton-secundario"
            >
              Ver CV
            </a>
          </div>
        </section>

        <section
          id="sobre-mi"
          className="seccion sobre-mi"
        >
          <div className="titulo-seccion">
            <span>01</span>
            <h2>
              Sobre mí
            </h2>
          </div>

          <div className="sobre-mi-contenido">
            <div>
              <p>
                Soy estudiante de Análisis y Desarrollo de Software,
                con formación en programación y enfoque en desarrollo
                backend.
              </p>
              <p>
                Actualmente estoy fortaleciendo mis conocimientos en
                Java, Spring Boot, SQL y desarrollo de aplicaciones
                web.
              </p>
              <p>
                Me interesa seguir desarrollando proyectos prácticos
                que me permitan mejorar mis habilidades y adquirir
                experiencia en el desarrollo de software.
              </p>
            </div>

            <div className="sobre-mi-datos">
              <div>
                <strong>Enfoque</strong>
                <span>Backend</span>
              </div>
              <div>
                <strong>Lenguaje principal</strong>
                <span>Java</span>
              </div>
              <div>
                <strong>Base de datos</strong>
                <span>PostgreSQL</span>
              </div>
              <div>
                <strong>Formación</strong>
                <span>SENA - ADSO</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="tecnologias"
          className="seccion tecnologias"
        >
          <div className="titulo-seccion">
            <span>02</span>
            <h2>
              Tecnologías
            </h2>
          </div>

          <div className="tecnologias-grid">
            <article className="tecnologia">
              <div className="tecnologia-numero">
                01
              </div>
              <h3>
                Java
              </h3>
              <p>
                Programación orientada a objetos, estructuras de datos
                y desarrollo de aplicaciones.
              </p>
            </article>

            <article className="tecnologia">
              <div className="tecnologia-numero">
                02
              </div>
              <h3>
                Spring Boot
              </h3>
              <p>
                Desarrollo de aplicaciones backend y APIs REST.
              </p>
            </article>

            <article className="tecnologia">
              <div className="tecnologia-numero">
                03
              </div>
              <h3>
                PostgreSQL
              </h3>
              <p>
                Diseño, relaciones, consultas y manejo de bases de
                datos relacionales.
              </p>
            </article>

            <article className="tecnologia">
              <div className="tecnologia-numero">
                04
              </div>
              <h3>
                React
              </h3>
              <p>
                Desarrollo de interfaces web mediante componentes.
              </p>
            </article>

            <article className="tecnologia">
              <div className="tecnologia-numero">
                05
              </div>
              <h3>
                Git & GitHub
              </h3>
              <p>
                Control de versiones y administración de proyectos.
              </p>
            </article>

            <article className="tecnologia">
              <div className="tecnologia-numero">
                06
              </div>
              <h3>
                SQL
              </h3>
              <p>
                Consultas, relaciones y operaciones sobre bases de
                datos.
              </p>
            </article>
          </div>
        </section>

        <section
          id="proyectos"
          className="seccion proyectos"
        >
          <div className="titulo-seccion">
            <span>03</span>
            <h2>
              Proyectos
            </h2>
          </div>

          <p className="introduccion-proyectos">
            Algunos de los proyectos que he desarrollado durante mi
            proceso de formación.
          </p>

          <article className="proyecto proyecto-destacado">
            <div className="proyecto-visual">
              <div className="visual-contenido">
                <span className="visual-etiqueta">
                  Proyecto principal
                </span>
                <h3>
                  Natymoon
                </h3>
                <p>
                  Ecommerce
                </p>
              </div>
            </div>

            <div className="proyecto-info">
              <span className="proyecto-numero">
                01 / PROYECTO PRINCIPAL
              </span>
              <h3>
                Natymoon
              </h3>
              <p>
                Proyecto de comercio electrónico desarrollado como
                aplicación web para la gestión y venta de productos.
              </p>
              <p>
                El proyecto integra un backend desarrollado con
                Spring Boot, una base de datos PostgreSQL y un
                frontend desarrollado con React.
              </p>

              <div className="tecnologias-proyecto">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>React</span>
              </div>

              <div className="botones-proyecto">
                <button
                  type="button"
                  onClick={() => setMostrarAviso(true)}
                  className="boton-proyecto boton-proyecto-principal"
                >
                  Ver código
                </button>
                <a
                  href="#contacto"
                  className="boton-proyecto boton-proyecto-secundario"
                >
                  Más información
                </a>
              </div>
            </div>
          </article>

          <div className="proyectos-grid">
            {proyectos.map((proyecto, index) => (
              <article
                className="proyecto-card"
                key={proyecto.nombre}
              >
                <div className="proyecto-card-numero">
                  {String(index + 2).padStart(2, '0')}
                </div>
                <h3>
                  {proyecto.nombre}
                </h3>
                <p>
                  {proyecto.descripcion}
                </p>

                <div className="tecnologias-proyecto">
                  {proyecto.tecnologias.map((tecnologia) => (

                    <span key={tecnologia}>
                      {tecnologia}
                    </span>

                  ))}
                </div>

                <a
                  href={proyecto.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-proyecto"
                >
                  Ver código →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="seccion cv">
          <div className="titulo-seccion">
            <span>04</span>
            <h2>
              Curriculum Vitae
            </h2>
          </div>

          <div className="cv-contenido">
            <div>
              <h3>
                Mi hoja de vida
              </h3>
              <p>
                Consulta mi formación académica, conocimientos,
                proyectos y certificaciones.
              </p>

            </div>
            <a
              href="/CV-Agustin-Cabezas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="boton boton-principal"
            >
              Ver CV
            </a>
          </div>
        </section>

        <section
          id="contacto"
          className="contacto"
        >
          <span className="contacto-numero">
            05
          </span>
          <h2>
            ¿Quieres conocer mis proyectos?
          </h2>
          <p>
            Puedes encontrar mi código y proyectos en GitHub.
          </p>

          <div className="contacto-botones">
            <a
              href="https://github.com/pepe907"
              target="_blank"
              rel="noopener noreferrer"
              className="boton boton-contacto"
            >
              Visitar GitHub
            </a>

            <a
              href="/CV-Agustin-Cabezas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="boton boton-contacto-secundario"
            >
              Ver CV
            </a>
          </div>
        </section>
      </main>

      {mostrarAviso && (
        <div
          className="notificacion-overlay"
          onClick={() => setMostrarAviso(false)}
        >
          <div
            className="notificacion"
            onClick={(evento) => evento.stopPropagation()}
          >
            <button
              type="button"
              className="notificacion-cerrar"
              onClick={() => setMostrarAviso(false)}
              aria-label="Cerrar notificación"
            >
              ×
            </button>

            <div className="notificacion-icono">
              🔒
            </div>

            <span className="notificacion-etiqueta">
              Natymoon
            </span>

            <h3>
              Código temporalmente no disponible
            </h3>

            <p>
              Este proyecto se encuentra actualmente en desarrollo
              y preparación para su presentación.
            </p>

            <p>
              El código fuente estará disponible próximamente.
            </p>

            <button
              type="button"
              className="boton boton-principal notificacion-boton"
              onClick={() => setMostrarAviso(false)}
            >
              Entendido
            </button>

          </div>

        </div>

      )}

      <footer>

        <p>
          © 2026 Agustín Enrique Cabezas Yanguma
        </p>

        <a
          href="https://github.com/pepe907"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

      </footer>

    </div>
  )
}

export default App