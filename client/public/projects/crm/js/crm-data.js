export const CRM_DATA = {
  stats: {
    totalLeads: 24,
    activeCustomers: 18,
    openEnquiries: 7,
    pendingQuotations: 5,
    confirmedBookings: 12,
    pricingRules: 8,
  },
  leads: [
    { id: 'LD-001', name: 'Ravi Kumar', company: 'Swift Logistics Pvt Ltd', email: 'ravi@swiftlog.com', phone: '+91 9876543210', source: 'Website', status: 'New', date: '2026-06-28' },
    { id: 'LD-002', name: 'Anitha Reddy', company: 'Global Trade Corp', email: 'anitha@globaltrade.com', phone: '+91 9123456780', source: 'Referral', status: 'Contacted', date: '2026-06-25' },
    { id: 'LD-003', name: 'Suresh Patel', company: 'Patel Exports', email: 'suresh@patelexports.in', phone: '+91 9988776655', source: 'Cold Call', status: 'Qualified', date: '2026-06-20' },
    { id: 'LD-004', name: 'Meena Iyer', company: 'Coastal Freight Lines', email: 'meena@coastalfreight.com', phone: '+91 9012345678', source: 'Trade Show', status: 'New', date: '2026-07-01' },
    { id: 'LD-005', name: 'Karthik Nair', company: 'Nair Shipping Co', email: 'karthik@nairship.com', phone: '+91 8765432109', source: 'LinkedIn', status: 'Contacted', date: '2026-06-18' },
  ],
  customers: [
    { id: 'CU-001', name: 'Voltuswave Industries', company: 'Voltuswave', email: 'ops@voltuswave.com', phone: '+91 8639000830', type: 'Enterprise', status: 'Active', since: '2025-03-15' },
    { id: 'CU-002', name: 'Hyderabad Cargo Movers', company: 'HCM Logistics', email: 'contact@hcmlogistics.in', phone: '+91 9440011223', type: 'SME', status: 'Active', since: '2025-08-22' },
    { id: 'CU-003', name: 'South India Exports', company: 'SIE Global', email: 'sales@sieglobal.com', phone: '+91 9556677889', type: 'Enterprise', status: 'Active', since: '2025-11-10' },
    { id: 'CU-004', name: 'TechParts India', company: 'TechParts Pvt Ltd', email: 'logistics@techparts.in', phone: '+91 8899001122', type: 'SME', status: 'Inactive', since: '2024-12-05' },
  ],
  enquiries: [
    { id: 'ENQ-101', customer: 'Voltuswave Industries', subject: 'Air freight — Hyderabad to Dubai', service: 'Air Freight', priority: 'High', status: 'Open', date: '2026-07-02' },
    { id: 'ENQ-102', customer: 'HCM Logistics', subject: 'Sea freight — Chennai to Singapore', service: 'Sea Freight', priority: 'Medium', status: 'In Progress', date: '2026-06-30' },
    { id: 'ENQ-103', customer: 'SIE Global', subject: 'Customs clearance — Mumbai port', service: 'Customs', priority: 'High', status: 'Open', date: '2026-06-29' },
    { id: 'ENQ-104', customer: 'Swift Logistics Pvt Ltd', subject: 'Road transport — Bangalore to Hyderabad', service: 'Road Freight', priority: 'Low', status: 'Open', date: '2026-07-03' },
    { id: 'ENQ-105', customer: 'Patel Exports', subject: 'Warehousing — 3 months storage', service: 'Warehousing', priority: 'Medium', status: 'Resolved', date: '2026-06-15' },
  ],
  quotations: [
    { id: 'QT-201', customer: 'Voltuswave Industries', enquiry: 'ENQ-101', amount: 185000, currency: 'INR', validUntil: '2026-07-15', status: 'Sent' },
    { id: 'QT-202', customer: 'HCM Logistics', enquiry: 'ENQ-102', amount: 420000, currency: 'INR', validUntil: '2026-07-10', status: 'Approved' },
    { id: 'QT-203', customer: 'SIE Global', enquiry: 'ENQ-103', amount: 95000, currency: 'INR', validUntil: '2026-07-08', status: 'Draft' },
    { id: 'QT-204', customer: 'Patel Exports', enquiry: 'ENQ-105', amount: 65000, currency: 'INR', validUntil: '2026-06-30', status: 'Accepted' },
    { id: 'QT-205', customer: 'Swift Logistics Pvt Ltd', enquiry: 'ENQ-104', amount: 28000, currency: 'INR', validUntil: '2026-07-20', status: 'Sent' },
  ],
  bookings: [
    { id: 'BK-301', customer: 'Voltuswave Industries', quotation: 'QT-201', origin: 'Hyderabad', destination: 'Dubai', cargo: 'Electronics', weight: '850 kg', date: '2026-07-05', status: 'Confirmed' },
    { id: 'BK-302', customer: 'HCM Logistics', quotation: 'QT-202', origin: 'Chennai', destination: 'Singapore', cargo: 'Textiles', weight: '12 MT', date: '2026-07-08', status: 'In Transit' },
    { id: 'BK-303', customer: 'Patel Exports', quotation: 'QT-204', origin: 'Mumbai', destination: 'London', cargo: 'Spices', weight: '2.5 MT', date: '2026-06-20', status: 'Delivered' },
  ],
  pricing: [
    { id: 'PR-01', service: 'Air Freight', route: 'Hyderabad → Dubai', rateType: 'Per KG', baseRate: 220, currency: 'INR', minCharge: 5000 },
    { id: 'PR-02', service: 'Sea Freight', route: 'Chennai → Singapore', rateType: 'Per CBM', baseRate: 8500, currency: 'INR', minCharge: 25000 },
    { id: 'PR-03', service: 'Road Freight', route: 'Bangalore → Hyderabad', rateType: 'Per Ton', baseRate: 4500, currency: 'INR', minCharge: 8000 },
    { id: 'PR-04', service: 'Customs Clearance', route: 'Mumbai Port', rateType: 'Flat Fee', baseRate: 15000, currency: 'INR', minCharge: 15000 },
    { id: 'PR-05', service: 'Warehousing', route: 'Hyderabad Hub', rateType: 'Per Pallet/Month', baseRate: 3500, currency: 'INR', minCharge: 3500 },
    { id: 'PR-06', service: 'Air Freight', route: 'Mumbai → London', rateType: 'Per KG', baseRate: 380, currency: 'INR', minCharge: 8000 },
    { id: 'PR-07', service: 'Sea Freight', route: 'Visakhapatnam → Colombo', rateType: 'Per CBM', baseRate: 6200, currency: 'INR', minCharge: 18000 },
    { id: 'PR-08', service: 'Express Courier', route: 'Pan India', rateType: 'Per KG', baseRate: 95, currency: 'INR', minCharge: 500 },
  ],
};

export const MODULES = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
  { id: 'leads', label: 'Leads', icon: 'users' },
  { id: 'customers', label: 'Customers', icon: 'building' },
  { id: 'enquiries', label: 'Enquiries', icon: 'inbox' },
  { id: 'quotations', label: 'Quotations', icon: 'file' },
  { id: 'booking', label: 'Booking Form', icon: 'calendar' },
  { id: 'pricing', label: 'Pricing', icon: 'tag' },
];
