const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/send-confirmation', async (req, res) => {
    const { nombre, email, telefono, direccion, ciudad, codigoPostal, items, total } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmación de compra - CAMEO',
        html: `
            <h1>¡Gracias por tu compra!</h1>
            <p>Hola ${nombre},</p>
            <p>Tu pedido ha sido confirmado y está siendo procesado.</p>
            
            <h2>Detalles del pedido:</h2>
            <p><strong>Número de orden:</strong> ${Date.now()}</p>
            <p><strong>Dirección de envío:</strong><br>
            ${direccion}<br>
            ${ciudad}, ${codigoPostal}</p>
            
            <h3>Resumen de compra:</h3>
            ${items.map(item => `
                <p>${item.name} - ${item.color} - Cantidad: ${item.quantity} - $${item.price}</p>
            `).join('')}
            
            <p><strong>Total:</strong> $${total}</p>
            
            <p>Te enviaremos otro correo cuando tu pedido sea despachado.</p>
            
            <p>Saludos,<br>
            Equipo CAMEO</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Correo de confirmación enviado' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Error al enviar el correo de confirmación' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 