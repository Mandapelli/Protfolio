-- ============================================================
-- CRM Module — MySQL Schema
-- Freight Forwarding ERP — Sales & Operations Hub
-- Execute after creating your database:
--   CREATE DATABASE mounika_portfolio;
--   USE mounika_portfolio;
-- ============================================================

-- ----------------------------------------------------------
-- 1. LEADS
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS leads (
  id            VARCHAR(36)   NOT NULL,
  name          VARCHAR(100)  NOT NULL,
  company       VARCHAR(150)  NOT NULL,
  email         VARCHAR(255)  NOT NULL,
  phone         VARCHAR(20)   NULL,
  source        VARCHAR(50)   NOT NULL DEFAULT 'Website',
  status        ENUM('New', 'Contacted', 'Qualified', 'Lost') NOT NULL DEFAULT 'New',
  assigned_to   VARCHAR(100)  NULL,
  notes         TEXT          NULL,
  created_at    DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at    DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  INDEX idx_leads_status (status),
  INDEX idx_leads_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- 2. CUSTOMERS
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS customers (
  id            VARCHAR(36)   NOT NULL,
  lead_id       VARCHAR(36)   NULL,
  name          VARCHAR(100)  NOT NULL,
  company       VARCHAR(150)  NOT NULL,
  email         VARCHAR(255)  NOT NULL,
  phone         VARCHAR(20)   NULL,
  address       TEXT          NULL,
  customer_type ENUM('Enterprise', 'SME') NOT NULL DEFAULT 'SME',
  status        ENUM('Active', 'Inactive') NOT NULL DEFAULT 'Active',
  created_at    DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at    DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  INDEX idx_customers_lead (lead_id),
  INDEX idx_customers_status (status),
  CONSTRAINT fk_customers_lead FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- 3. ENQUIRIES
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS enquiries (
  id            VARCHAR(36)   NOT NULL,
  customer_id   VARCHAR(36)   NOT NULL,
  subject       VARCHAR(255)  NOT NULL,
  description   TEXT          NULL,
  service_type  ENUM('Air Freight', 'Sea Freight', 'Road Freight', 'Customs', 'Warehousing') NOT NULL,
  priority      ENUM('High', 'Medium', 'Low') NOT NULL DEFAULT 'Medium',
  status        ENUM('Open', 'In Progress', 'Resolved', 'Closed') NOT NULL DEFAULT 'Open',
  created_at    DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at    DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  INDEX idx_enquiries_customer (customer_id),
  INDEX idx_enquiries_status (status),
  CONSTRAINT fk_enquiries_customer FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- 4. PRICING (Rate Cards)
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS pricing (
  id              VARCHAR(36)   NOT NULL,
  service_type    VARCHAR(100)  NOT NULL,
  origin_zone     VARCHAR(100)  NOT NULL,
  destination_zone VARCHAR(100) NOT NULL,
  route_label     VARCHAR(200)  NOT NULL,
  rate_type       VARCHAR(50)   NOT NULL,
  base_rate       DECIMAL(12,2) NOT NULL,
  min_charge      DECIMAL(12,2) NOT NULL DEFAULT 0,
  currency        VARCHAR(3)    NOT NULL DEFAULT 'INR',
  effective_from  DATE          NOT NULL,
  effective_to    DATE          NULL,
  is_active       TINYINT(1)    NOT NULL DEFAULT 1,
  created_at      DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at      DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  INDEX idx_pricing_service (service_type),
  INDEX idx_pricing_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- 5. QUOTATIONS
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS quotations (
  id            VARCHAR(36)   NOT NULL,
  enquiry_id    VARCHAR(36)   NULL,
  customer_id   VARCHAR(36)   NOT NULL,
  quote_number  VARCHAR(50)   NOT NULL,
  amount        DECIMAL(14,2) NOT NULL,
  currency      VARCHAR(3)    NOT NULL DEFAULT 'INR',
  valid_until   DATE          NOT NULL,
  status        ENUM('Draft', 'Sent', 'Approved', 'Accepted', 'Rejected', 'Expired') NOT NULL DEFAULT 'Draft',
  line_items    JSON          NULL,
  notes         TEXT          NULL,
  created_at    DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at    DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_quote_number (quote_number),
  INDEX idx_quotations_customer (customer_id),
  INDEX idx_quotations_enquiry (enquiry_id),
  INDEX idx_quotations_status (status),
  CONSTRAINT fk_quotations_customer FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
  CONSTRAINT fk_quotations_enquiry FOREIGN KEY (enquiry_id) REFERENCES enquiries(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- 6. BOOKINGS
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS bookings (
  id              VARCHAR(36)   NOT NULL,
  customer_id     VARCHAR(36)   NOT NULL,
  quotation_id    VARCHAR(36)   NULL,
  booking_number  VARCHAR(50)   NOT NULL,
  origin          VARCHAR(100)  NOT NULL,
  destination     VARCHAR(100)  NOT NULL,
  cargo_type      VARCHAR(100)  NOT NULL,
  weight          VARCHAR(50)   NOT NULL,
  booking_date    DATE          NOT NULL,
  status          ENUM('Pending', 'Confirmed', 'In Transit', 'Delivered', 'Cancelled') NOT NULL DEFAULT 'Pending',
  notes           TEXT          NULL,
  created_at      DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at      DATETIME(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_booking_number (booking_number),
  INDEX idx_bookings_customer (customer_id),
  INDEX idx_bookings_status (status),
  CONSTRAINT fk_bookings_customer FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
  CONSTRAINT fk_bookings_quotation FOREIGN KEY (quotation_id) REFERENCES quotations(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- SAMPLE DATA (optional)
-- ----------------------------------------------------------
INSERT INTO leads (id, name, company, email, phone, source, status) VALUES
  ('LD-001', 'Ravi Kumar', 'Swift Logistics Pvt Ltd', 'ravi@swiftlog.com', '+91 9876543210', 'Website', 'New'),
  ('LD-002', 'Anitha Reddy', 'Global Trade Corp', 'anitha@globaltrade.com', '+91 9123456780', 'Referral', 'Contacted')
ON DUPLICATE KEY UPDATE name = VALUES(name);

INSERT INTO customers (id, name, company, email, phone, customer_type, status) VALUES
  ('CU-001', 'Voltuswave Industries', 'Voltuswave', 'ops@voltuswave.com', '+91 8639000830', 'Enterprise', 'Active')
ON DUPLICATE KEY UPDATE name = VALUES(name);

INSERT INTO pricing (id, service_type, origin_zone, destination_zone, route_label, rate_type, base_rate, min_charge, effective_from) VALUES
  ('PR-01', 'Air Freight', 'Hyderabad', 'Dubai', 'Hyderabad → Dubai', 'Per KG', 220.00, 5000.00, '2025-01-01'),
  ('PR-02', 'Sea Freight', 'Chennai', 'Singapore', 'Chennai → Singapore', 'Per CBM', 8500.00, 25000.00, '2025-01-01')
ON DUPLICATE KEY UPDATE base_rate = VALUES(base_rate);
