import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure nodemailer with placeholder settings (should use env variables in production)
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || "user@example.com",
      pass: process.env.EMAIL_PASS || "password",
    },
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate contact form data
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({
          message: "Datos de formulario inválidos",
          errors: result.error.errors,
        });
      }
      
      // Save contact message to storage
      const contactMessage = await storage.createContactMessage(result.data);
      
      // Send email notification (disabled for demo but would work with valid SMTP settings)
      /* 
      await transporter.sendMail({
        from: '"Portfolio Contact" <no-reply@example.com>',
        to: "your-email@example.com",
        subject: `Nuevo mensaje de contacto: ${result.data.subject}`,
        text: `
          Nombre: ${result.data.name}
          Email: ${result.data.email}
          Mensaje: ${result.data.message}
        `,
        html: `
          <p><strong>Nombre:</strong> ${result.data.name}</p>
          <p><strong>Email:</strong> ${result.data.email}</p>
          <p><strong>Mensaje:</strong> ${result.data.message}</p>
        `,
      });
      */
      
      return res.status(201).json({
        message: "Mensaje de contacto enviado correctamente",
        contactId: contactMessage.id,
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        message: "Error al procesar el formulario de contacto",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
