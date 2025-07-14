import { useState, useEffect } from "react";
import { register } from "../hooks/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setFormData({
      username: user.username,
      email: user.email,
      password: "", // por seguridad no mostramos password
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    dispatch(register(formData)); // actualiza redux y localStorage
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h2>Perfil de Usuario</h2>
      <div className="profile-field">
        <label>Nombre de usuario:</label>
        {isEditing ? (
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        ) : (
          <span>{user.username}</span>
        )}
      </div>
      <div className="profile-field">
        <label>Email:</label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        ) : (
          <span>{user.email}</span>
        )}
      </div>
      <div className="profile-field">
        <label>Contraseña:</label>
        {isEditing ? (
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Nueva contraseña"
            autoComplete="new-password"
          />
        ) : (
          <span>{user.password ? "•".repeat(user.password.length) : "********"}</span>
        )}
      </div>
      <div className="profile-buttons">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Guardar</button>
            <button onClick={() => setIsEditing(false)}>Cancelar</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Editar Perfil</button>
        )}
      </div>
    </div>
  );
};

export default Profile;