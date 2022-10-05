import '../assets/style/login.css'

function login() {
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true"/>

      <div className="signup">
        <form action="">
          <label htmlFor="chk" aria-hidden="true">Registrate</label>
          <input type="text" name="txt" placeholder="Nombre de Usuario" required=""/>
          <input type="email" name="email" placeholder="Email" required=""/>
          <input type="password" name="pswd" placeholder="Contraseña" required=""/>
          <button>Sign Up</button>
        </form>
      </div>

      <div className='login'>
        <form action="">
          <label htmlFor="chk" aria-hidden="">Iniciar Sesión</label>
          <input type="email" name="email" placeholder="Email" required=""/>
          <input type="password" name="pswd" placeholder="Contraseña" required=""/>
          <button>Iniciar</button>
        </form>
      </div>

    </div>
  );
}

export default login;
