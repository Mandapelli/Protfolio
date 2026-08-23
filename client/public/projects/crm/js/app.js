import { CRM_DATA, MODULES } from './crm-data.js';

const ICONS = {
  grid: '▦', users: '👥', building: '🏢', inbox: '📥',
  file: '📄', calendar: '📅', tag: '💰',
};

const STORAGE_KEY = 'crm_demo_data';

const loadState = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : structuredClone(CRM_DATA);
  } catch {
    return structuredClone(CRM_DATA);
  }
};

const saveState = (state) => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

let state = loadState();
let currentModule = 'dashboard';
let searchQuery = '';

const $ = (sel) => document.querySelector(sel);
const formatCurrency = (amount, currency = 'INR') =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount);

const showToast = (msg) => {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
};

const badge = (text) => {
  const cls = text.toLowerCase().replace(/\s+/g, '-');
  return `<span class="badge badge-${cls}">${text}</span>`;
};

const filterRows = (rows, fields) => {
  if (!searchQuery) return rows;
  const q = searchQuery.toLowerCase();
  return rows.filter((row) =>
    fields.some((f) => String(row[f] ?? '').toLowerCase().includes(q)),
  );
};

/* ===== Renderers ===== */

const renderDashboard = () => {
  const { stats } = state;
  return `
    <div class="stats-grid">
      <div class="stat-card"><p class="stat-label">Total Leads</p><p class="stat-value">${state.leads.length}</p></div>
      <div class="stat-card"><p class="stat-label">Customers</p><p class="stat-value">${state.customers.length}</p></div>
      <div class="stat-card"><p class="stat-label">Open Enquiries</p><p class="stat-value">${state.enquiries.filter((e) => e.status === 'Open').length}</p></div>
      <div class="stat-card"><p class="stat-label">Quotations</p><p class="stat-value">${state.quotations.length}</p></div>
      <div class="stat-card"><p class="stat-label">Bookings</p><p class="stat-value">${state.bookings.length}</p></div>
      <div class="stat-card"><p class="stat-label">Pricing Rules</p><p class="stat-value">${state.pricing.length}</p></div>
    </div>
    <div class="card">
      <div class="card-header"><h3 class="card-title">Sales Pipeline</h3></div>
      <div class="card-body" style="padding:1.25rem">
        <div class="pipeline">
          <div class="pipeline-step"><div class="step-num">1</div><h4>Leads</h4><p>Capture & qualify prospects</p></div>
          <div class="pipeline-step"><div class="step-num">2</div><h4>Customers</h4><p>Convert leads to accounts</p></div>
          <div class="pipeline-step"><div class="step-num">3</div><h4>Enquiries</h4><p>Service requests & RFQs</p></div>
          <div class="pipeline-step"><div class="step-num">4</div><h4>Quotations</h4><p>Dynamic pricing & quotes</p></div>
          <div class="pipeline-step"><div class="step-num">5</div><h4>Booking</h4><p>Confirm shipments</p></div>
          <div class="pipeline-step"><div class="step-num">6</div><h4>Pricing</h4><p>Rate cards & tariffs</p></div>
        </div>
      </div>
    </div>
    <div class="card" style="margin-top:1rem">
      <div class="card-header"><h3 class="card-title">Recent Activity</h3></div>
      <div class="card-body">
        <table class="table">
          <thead><tr><th>Type</th><th>ID</th><th>Details</th><th>Status</th></tr></thead>
          <tbody>
            ${[
              ...state.leads.slice(0, 2).map((l) => ({ type: 'Lead', id: l.id, detail: `${l.name} — ${l.company}`, status: l.status })),
              ...state.enquiries.slice(0, 2).map((e) => ({ type: 'Enquiry', id: e.id, detail: e.subject, status: e.status })),
              ...state.bookings.slice(0, 2).map((b) => ({ type: 'Booking', id: b.id, detail: `${b.origin} → ${b.destination}`, status: b.status })),
            ].map((r) => `<tr><td>${r.type}</td><td>${r.id}</td><td>${r.detail}</td><td>${badge(r.status)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
};

const renderLeads = () => {
  const rows = filterRows(state.leads, ['id', 'name', 'company', 'email', 'source', 'status']);
  if (!rows.length) return '<div class="empty-state">No leads found.</div>';
  return `
    <div class="card">
      <div class="card-header"><h3 class="card-title">Leads (${rows.length})</h3></div>
      <div class="card-body">
        <table class="table">
          <thead><tr><th>ID</th><th>Name</th><th>Company</th><th>Email</th><th>Phone</th><th>Source</th><th>Status</th><th>Date</th><th>Action</th></tr></thead>
          <tbody>
            ${rows.map((l) => `
              <tr>
                <td>${l.id}</td><td>${l.name}</td><td>${l.company}</td>
                <td>${l.email}</td><td>${l.phone}</td><td>${l.source}</td>
                <td>${badge(l.status)}</td><td>${l.date}</td>
                <td>${l.status !== 'Qualified' ? `<button class="btn btn-sm btn-success convert-lead" data-id="${l.id}">Convert</button>` : '—'}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
};

const renderCustomers = () => {
  const rows = filterRows(state.customers, ['id', 'name', 'company', 'email', 'type', 'status']);
  if (!rows.length) return '<div class="empty-state">No customers found.</div>';
  return `
    <div class="card">
      <div class="card-header"><h3 class="card-title">Customers (${rows.length})</h3></div>
      <div class="card-body">
        <table class="table">
          <thead><tr><th>ID</th><th>Name</th><th>Company</th><th>Email</th><th>Phone</th><th>Type</th><th>Status</th><th>Since</th></tr></thead>
          <tbody>
            ${rows.map((c) => `
              <tr>
                <td>${c.id}</td><td>${c.name}</td><td>${c.company}</td>
                <td>${c.email}</td><td>${c.phone}</td><td>${c.type}</td>
                <td>${badge(c.status)}</td><td>${c.since}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
};

const renderEnquiries = () => {
  const rows = filterRows(state.enquiries, ['id', 'customer', 'subject', 'service', 'status']);
  if (!rows.length) return '<div class="empty-state">No enquiries found.</div>';
  return `
    <div class="card">
      <div class="card-header"><h3 class="card-title">Enquiries (${rows.length})</h3></div>
      <div class="card-body">
        <table class="table">
          <thead><tr><th>ID</th><th>Customer</th><th>Subject</th><th>Service</th><th>Priority</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            ${rows.map((e) => `
              <tr>
                <td>${e.id}</td><td>${e.customer}</td><td>${e.subject}</td>
                <td>${e.service}</td><td>${badge(e.priority)}</td>
                <td>${badge(e.status)}</td><td>${e.date}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
};

const renderQuotations = () => {
  const rows = filterRows(state.quotations, ['id', 'customer', 'enquiry', 'status']);
  if (!rows.length) return '<div class="empty-state">No quotations found.</div>';
  return `
    <div class="card">
      <div class="card-header"><h3 class="card-title">Quotations (${rows.length})</h3></div>
      <div class="card-body">
        <table class="table">
          <thead><tr><th>ID</th><th>Customer</th><th>Enquiry</th><th>Amount</th><th>Valid Until</th><th>Status</th></tr></thead>
          <tbody>
            ${rows.map((q) => `
              <tr>
                <td>${q.id}</td><td>${q.customer}</td><td>${q.enquiry}</td>
                <td><strong>${formatCurrency(q.amount, q.currency)}</strong></td>
                <td>${q.validUntil}</td><td>${badge(q.status)}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
};

const renderBookingForm = () => `
  <div class="card">
    <div class="card-header"><h3 class="card-title">New Booking</h3></div>
    <form id="booking-form">
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label" for="bk-customer">Customer</label>
          <select id="bk-customer" class="form-select" required>
            <option value="">Select customer</option>
            ${state.customers.map((c) => `<option value="${c.company}">${c.company}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="bk-quotation">Quotation Ref</label>
          <select id="bk-quotation" class="form-select">
            <option value="">Select quotation</option>
            ${state.quotations.filter((q) => q.status === 'Approved' || q.status === 'Accepted').map((q) => `<option value="${q.id}">${q.id} — ${formatCurrency(q.amount)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="bk-origin">Origin</label>
          <input id="bk-origin" class="form-input" type="text" placeholder="e.g. Hyderabad" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="bk-destination">Destination</label>
          <input id="bk-destination" class="form-input" type="text" placeholder="e.g. Dubai" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="bk-cargo">Cargo Type</label>
          <input id="bk-cargo" class="form-input" type="text" placeholder="e.g. Electronics" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="bk-weight">Weight</label>
          <input id="bk-weight" class="form-input" type="text" placeholder="e.g. 500 kg" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="bk-date">Booking Date</label>
          <input id="bk-date" class="form-input" type="date" required />
        </div>
        <div class="form-group full">
          <label class="form-label" for="bk-notes">Notes</label>
          <textarea id="bk-notes" class="form-textarea" placeholder="Special instructions..."></textarea>
        </div>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Create Booking</button>
        <button type="reset" class="btn btn-outline">Clear Form</button>
      </div>
    </form>
  </div>
  <div class="card" style="margin-top:1rem">
    <div class="card-header"><h3 class="card-title">Recent Bookings</h3></div>
    <div class="card-body">
      <table class="table">
        <thead><tr><th>ID</th><th>Customer</th><th>Route</th><th>Cargo</th><th>Weight</th><th>Date</th><th>Status</th></tr></thead>
        <tbody>
          ${state.bookings.map((b) => `
            <tr>
              <td>${b.id}</td><td>${b.customer}</td>
              <td>${b.origin} → ${b.destination}</td>
              <td>${b.cargo}</td><td>${b.weight}</td>
              <td>${b.date}</td><td>${badge(b.status)}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>`;

const renderPricing = () => {
  const rows = filterRows(state.pricing, ['service', 'route', 'rateType']);
  return `
    <div class="pricing-grid">
      ${rows.map((p) => `
        <div class="pricing-card">
          <p class="pricing-service">${p.service}</p>
          <p class="pricing-route">${p.route}</p>
          <p class="pricing-rate">${formatCurrency(p.baseRate)} <span>/ ${p.rateType}</span></p>
          <p class="pricing-meta">Min charge: ${formatCurrency(p.minCharge)} · ID: ${p.id}</p>
        </div>`).join('')}
    </div>`;
};

const MODULE_META = {
  dashboard: { title: 'Dashboard', subtitle: 'Overview of your sales pipeline', add: false },
  leads: { title: 'Leads', subtitle: 'Manage and convert sales leads', add: true },
  customers: { title: 'Customers', subtitle: 'Active customer accounts', add: true },
  enquiries: { title: 'Enquiries', subtitle: 'Customer service requests & RFQs', add: true },
  quotations: { title: 'Quotations', subtitle: 'Price quotes and proposals', add: true },
  booking: { title: 'Booking Form', subtitle: 'Create and manage shipment bookings', add: false },
  pricing: { title: 'Pricing', subtitle: 'Rate cards and tariff management', add: true },
};

const RENDERERS = {
  dashboard: renderDashboard,
  leads: renderLeads,
  customers: renderCustomers,
  enquiries: renderEnquiries,
  quotations: renderQuotations,
  booking: renderBookingForm,
  pricing: renderPricing,
};

const ADD_FORMS = {
  leads: [
    { id: 'name', label: 'Name', type: 'text', required: true },
    { id: 'company', label: 'Company', type: 'text', required: true },
    { id: 'email', label: 'Email', type: 'email', required: true },
    { id: 'phone', label: 'Phone', type: 'tel' },
    { id: 'source', label: 'Source', type: 'select', options: ['Website', 'Referral', 'Cold Call', 'Trade Show', 'LinkedIn'] },
  ],
  customers: [
    { id: 'name', label: 'Contact Name', type: 'text', required: true },
    { id: 'company', label: 'Company', type: 'text', required: true },
    { id: 'email', label: 'Email', type: 'email', required: true },
    { id: 'phone', label: 'Phone', type: 'tel' },
    { id: 'type', label: 'Type', type: 'select', options: ['Enterprise', 'SME'] },
  ],
  enquiries: [
    { id: 'customer', label: 'Customer', type: 'select', options: () => state.customers.map((c) => c.company) },
    { id: 'subject', label: 'Subject', type: 'text', required: true },
    { id: 'service', label: 'Service', type: 'select', options: ['Air Freight', 'Sea Freight', 'Road Freight', 'Customs', 'Warehousing'] },
    { id: 'priority', label: 'Priority', type: 'select', options: ['High', 'Medium', 'Low'] },
  ],
  quotations: [
    { id: 'customer', label: 'Customer', type: 'select', options: () => state.customers.map((c) => c.company) },
    { id: 'enquiry', label: 'Enquiry ID', type: 'text', required: true },
    { id: 'amount', label: 'Amount (INR)', type: 'number', required: true },
    { id: 'validUntil', label: 'Valid Until', type: 'date', required: true },
  ],
  pricing: [
    { id: 'service', label: 'Service', type: 'text', required: true },
    { id: 'route', label: 'Route', type: 'text', required: true },
    { id: 'rateType', label: 'Rate Type', type: 'text', required: true },
    { id: 'baseRate', label: 'Base Rate', type: 'number', required: true },
    { id: 'minCharge', label: 'Min Charge', type: 'number', required: true },
  ],
};

const render = () => {
  const meta = MODULE_META[currentModule];
  $('#page-title').textContent = meta.title;
  $('#page-subtitle').textContent = meta.subtitle;
  $('#add-btn').hidden = !meta.add;
  $('#content').innerHTML = RENDERERS[currentModule]();
  bindModuleEvents();
};

const bindModuleEvents = () => {
  document.querySelectorAll('.convert-lead').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lead = state.leads.find((l) => l.id === btn.dataset.id);
      if (!lead) return;
      const custId = `CU-${String(state.customers.length + 1).padStart(3, '0')}`;
      state.customers.push({
        id: custId, name: lead.name, company: lead.company,
        email: lead.email, phone: lead.phone, type: 'SME',
        status: 'Active', since: new Date().toISOString().slice(0, 10),
      });
      lead.status = 'Qualified';
      saveState(state);
      showToast(`${lead.name} converted to customer ${custId}`);
      render();
    });
  });

  const bookingForm = $('#booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = `BK-${300 + state.bookings.length + 1}`;
      state.bookings.unshift({
        id,
        customer: $('#bk-customer').value,
        quotation: $('#bk-quotation').value || '—',
        origin: $('#bk-origin').value,
        destination: $('#bk-destination').value,
        cargo: $('#bk-cargo').value,
        weight: $('#bk-weight').value,
        date: $('#bk-date').value,
        status: 'Confirmed',
      });
      saveState(state);
      showToast(`Booking ${id} created successfully!`);
      render();
    });
  }
};

const openModal = () => {
  const fields = ADD_FORMS[currentModule];
  if (!fields) return;

  const container = $('#modal-fields');
  container.innerHTML = fields.map((f) => {
    const opts = typeof f.options === 'function' ? f.options() : f.options;
    if (f.type === 'select') {
      return `<div class="form-group"><label class="form-label" for="mf-${f.id}">${f.label}</label>
        <select id="mf-${f.id}" class="form-select" ${f.required ? 'required' : ''}>
          <option value="">Select...</option>
          ${opts.map((o) => `<option value="${o}">${o}</option>`).join('')}
        </select></div>`;
    }
    return `<div class="form-group"><label class="form-label" for="mf-${f.id}">${f.label}</label>
      <input id="mf-${f.id}" class="form-input" type="${f.type}" ${f.required ? 'required' : ''} /></div>`;
  }).join('');

  $('#modal-title').textContent = `Add ${MODULE_META[currentModule].title.replace(/s$/, '')}`;
  $('#modal').showModal();
};

const saveModal = () => {
  const fields = ADD_FORMS[currentModule];
  if (!fields) return;

  const data = {};
  for (const f of fields) {
    data[f.id] = $(`#mf-${f.id}`).value;
    if (f.required && !data[f.id]) return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const counters = {
    leads: () => ({ ...data, id: `LD-${String(state.leads.length + 1).padStart(3, '0')}`, status: 'New', date: today }),
    customers: () => ({ ...data, id: `CU-${String(state.customers.length + 1).padStart(3, '0')}`, status: 'Active', since: today }),
    enquiries: () => ({ ...data, id: `ENQ-${100 + state.enquiries.length + 1}`, status: 'Open', date: today }),
    quotations: () => ({ ...data, id: `QT-${200 + state.quotations.length + 1}`, currency: 'INR', amount: Number(data.amount), status: 'Draft' }),
    pricing: () => ({ ...data, id: `PR-${String(state.pricing.length + 1).padStart(2, '0')}`, currency: 'INR', baseRate: Number(data.baseRate), minCharge: Number(data.minCharge) }),
  };

  const key = currentModule === 'pricing' ? 'pricing' : currentModule;
  state[key].unshift(counters[currentModule]());
  saveState(state);
  showToast('Record saved successfully!');
  $('#modal').close();
  render();
};

const initNav = () => {
  $('#nav').innerHTML = MODULES.map((m) => `
    <button class="nav-item${m.id === currentModule ? ' active' : ''}" data-module="${m.id}">
      <span class="nav-icon">${ICONS[m.icon]}</span>${m.label}
    </button>`).join('');

  $('#nav').addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-item');
    if (!btn) return;
    currentModule = btn.dataset.module;
    searchQuery = '';
    $('#global-search').value = '';
    document.querySelectorAll('.nav-item').forEach((el) => el.classList.toggle('active', el.dataset.module === currentModule));
    render();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  render();

  $('#global-search').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (currentModule !== 'dashboard' && currentModule !== 'booking') render();
  });

  $('#add-btn').addEventListener('click', openModal);
  $('#modal-form').addEventListener('submit', (e) => { e.preventDefault(); saveModal(); });
  $('#modal-close').addEventListener('click', () => $('#modal').close());
  $('#modal-cancel').addEventListener('click', () => $('#modal').close());
});
