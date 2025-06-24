import './Loggin.css';

const Loggin = () => {
    return (
        <>
            <div className="container">
                <div className="caja_trasera">
                    <div className="loggin_box">
                        <h3>¿Ya tienes cuenta?</h3>
                        <p>Entonces inicia sesión.</p>
                        <button id="btn_iniciar-sesion">Iniciar sesión</button>
                    </div>
                    <div className="register_box">
                        <h3>¿No tienes una cuenta?</h3>
                        <p>Entonces créala.</p>
                        <button id="btn_registrarse">Registrarse</button>
                    </div>
                </div>
    
                <div className="loggin-register">
                    <form action="php/loggin_user_be.php" className="loggin_form">
                        <h2>Inicia sesión</h2>
                        <input type="text" name="Nombre-U_Mail" placeholder="Nombre de usuario o gmail" />
                        <input type="password" name="Contraseña" placeholder="Contraseña" />
                        <button type="submit" id="conf_in-sesion" name="Loggin_user">Inicia sesión</button>
                    </form>
    
                    <form action="php/create_user_be.php" method="post" className="register_form">
                        <h2>Crear cuenta</h2>
                        <input type="text" name="Nombre_completo" placeholder="Nombre y apellido" required />
                        <input type="text" name="Mail" placeholder="Gmail" required />
                        <input type="text" name="Nombre_usuario" placeholder="Nombre de usuario" required />
                        <input type="password" name="Password" placeholder="Contraseña" required />
                        <input type="password" name="Conf_password" placeholder="Confirme la contraseña" required />
                        <button type="submit" id="conf_crear-cuenta" name="Create_user">Crear cuenta</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Loggin;