import { 
  type Booking, 
  type InsertBooking,
  type ContactMessage,
  type InsertContactMessage,
  type ServiceArea,
  type InsertServiceArea
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Bookings
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBooking(id: string): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
  updateBookingStatus(id: string, status: string): Promise<Booking | undefined>;
  
  // Contact messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  
  // Service areas
  checkServiceArea(zipCode: string): Promise<ServiceArea | undefined>;
  getAllServiceAreas(): Promise<ServiceArea[]>;
  createServiceArea(area: InsertServiceArea): Promise<ServiceArea>;
}

export class MemStorage implements IStorage {
  private bookings: Map<string, Booking>;
  private contactMessages: Map<string, ContactMessage>;
  private serviceAreas: Map<string, ServiceArea>;

  constructor() {
    this.bookings = new Map();
    this.contactMessages = new Map();
    this.serviceAreas = new Map();
    
    // Seed some service areas
    this.seedServiceAreas();
  }

  private seedServiceAreas() {
    const areas = [
      { zipCode: "60601", areaName: "Downtown Chicago", isActive: true },
      { zipCode: "60614", areaName: "Lincoln Park", isActive: true },
      { zipCode: "60611", areaName: "North Suburbs", isActive: true },
      { zipCode: "60654", areaName: "West Loop", isActive: true },
      { zipCode: "60302", areaName: "Oak Park", isActive: true },
      { zipCode: "60201", areaName: "Evanston", isActive: true },
      { zipCode: "60540", areaName: "Naperville", isActive: true },
      { zipCode: "60173", areaName: "Schaumburg", isActive: true },
    ];
    
    areas.forEach(area => {
      const id = randomUUID();
      this.serviceAreas.set(id, { id, ...area });
    });
  }

  // Bookings
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const booking: Booking = {
      ...insertBooking,
      id,
      notes: insertBooking.notes || null,
      status: "pending",
      createdAt: new Date(),
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getBooking(id: string): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async updateBookingStatus(id: string, status: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (booking) {
      booking.status = status;
      this.bookings.set(id, booking);
      return booking;
    }
    return undefined;
  }

  // Contact messages
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  // Service areas
  async checkServiceArea(zipCode: string): Promise<ServiceArea | undefined> {
    return Array.from(this.serviceAreas.values()).find(
      (area) => area.zipCode === zipCode && area.isActive
    );
  }

  async getAllServiceAreas(): Promise<ServiceArea[]> {
    return Array.from(this.serviceAreas.values()).filter(area => area.isActive);
  }

  async createServiceArea(insertArea: InsertServiceArea): Promise<ServiceArea> {
    const id = randomUUID();
    const area: ServiceArea = { 
      id, 
      ...insertArea, 
      isActive: insertArea.isActive ?? true 
    };
    this.serviceAreas.set(id, area);
    return area;
  }
}

export const storage = new MemStorage();
