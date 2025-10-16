import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking endpoints
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      res.status(201).json({ success: true, booking });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      res.status(500).json({ 
        success: false, 
        message: "Error creating booking: " + error.message 
      });
    }
  });

  app.get("/api/bookings", async (_req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json({ success: true, bookings });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: "Error fetching bookings: " + error.message 
      });
    }
  });

  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const booking = await storage.getBooking(req.params.id);
      if (!booking) {
        return res.status(404).json({ 
          success: false, 
          message: "Booking not found" 
        });
      }
      res.json({ success: true, booking });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: "Error fetching booking: " + error.message 
      });
    }
  });

  app.patch("/api/bookings/:id/status", async (req, res) => {
    try {
      const { status } = req.body;
      if (!status) {
        return res.status(400).json({ 
          success: false, 
          message: "Status is required" 
        });
      }
      const booking = await storage.updateBookingStatus(req.params.id, status);
      if (!booking) {
        return res.status(404).json({ 
          success: false, 
          message: "Booking not found" 
        });
      }
      res.json({ success: true, booking });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: "Error updating booking: " + error.message 
      });
    }
  });

  // Contact message endpoints
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ success: true, message });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      res.status(500).json({ 
        success: false, 
        message: "Error sending message: " + error.message 
      });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json({ success: true, messages });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: "Error fetching messages: " + error.message 
      });
    }
  });

  // Service area endpoints
  app.get("/api/service-areas/check/:zipCode", async (req, res) => {
    try {
      const area = await storage.checkServiceArea(req.params.zipCode);
      res.json({ 
        success: true, 
        available: !!area,
        area: area || null
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: "Error checking service area: " + error.message 
      });
    }
  });

  app.get("/api/service-areas", async (_req, res) => {
    try {
      const areas = await storage.getAllServiceAreas();
      res.json({ success: true, areas });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: "Error fetching service areas: " + error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
