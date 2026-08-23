import { RESUME } from './resume-data.js';

const ICONS = {
  phone: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  email: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/><path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  location: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/></svg>`,
  github: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77 5.44 5.44 0 003.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  linkedin: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2"/></svg>`,
};

const renderContactItem = ({ icon, label, href }) => {
  const content = href
    ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
    : `<span>${label}</span>`;
  return `<li>${ICONS[icon]}${content}</li>`;
};

const renderExperience = ({ role, company, location, duration, highlights }) => `
  <article class="entry">
    <div class="entry-header">
      <h3 class="entry-role">${role}</h3>
      <time class="entry-duration">${duration}</time>
    </div>
    <p class="entry-company">${company} · ${location}</p>
    <ul class="entry-list">
      ${highlights.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  </article>
`;

const renderProject = ({ name, tech, points }) => `
  <article class="entry">
    <h3 class="entry-role">${name}</h3>
    <p class="entry-tech">${tech}</p>
    <ul class="entry-list">
      ${points.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  </article>
`;

const renderSkillGroup = ([category, items]) => `
  <div class="skill-group">
    <h3 class="skill-group-title">${category}</h3>
    <div class="skill-tags">
      ${items.map((skill) => `<span class="skill-tag">${skill}</span>`).join('')}
    </div>
  </div>
`;

const renderEducation = ({ degree, school, years, score }) => `
  <div class="edu-entry">
    <p class="edu-degree">${degree}</p>
    <p class="edu-school">${school}</p>
    <p class="edu-meta">${years} · ${score}</p>
  </div>
`;

const renderCertification = ({ name, provider, date, duration, credentialId }) => `
  <div class="cert-entry">
    <p class="cert-name">${name}</p>
    <p class="cert-provider">${provider}</p>
    <p class="cert-meta">${date}${duration ? ` · ${duration}` : ''}</p>
    ${credentialId ? `<p class="cert-id">ID: ${credentialId}</p>` : ''}
  </div>
`;

const populateResume = () => {
  const { name, title, contact, experience, projects, skills, education, languages, certifications } = RESUME;

  document.getElementById('resume-name').textContent = name;
  document.getElementById('resume-title').textContent = title;

  const contactItems = [
    { icon: 'phone', label: contact.phone },
    { icon: 'email', label: contact.email, href: `mailto:${contact.email}` },
    { icon: 'location', label: contact.location },
    { icon: 'github', label: contact.github.label, href: contact.github.url },
    { icon: 'linkedin', label: contact.linkedin.label, href: contact.linkedin.url },
  ];

  document.getElementById('resume-contact').innerHTML = contactItems.map(renderContactItem).join('');
  document.getElementById('experience-list').innerHTML = experience.map(renderExperience).join('');
  document.getElementById('projects-list').innerHTML = projects.map(renderProject).join('');
  document.getElementById('skills-list').innerHTML = Object.entries(skills).map(renderSkillGroup).join('');
  document.getElementById('education-list').innerHTML = education.map(renderEducation).join('');
  document.getElementById('languages-list').innerHTML = languages
    .map((lang) => `<li>${lang}</li>`)
    .join('');

  if (certifications?.length) {
    document.getElementById('certifications-list').innerHTML = certifications
      .map(renderCertification)
      .join('');
  }
};

const showToast = (message) => {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
};

const setupActions = () => {
  document.getElementById('print-btn')?.addEventListener('click', () => window.print());

  document.getElementById('copy-email-btn')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(RESUME.contact.email);
      showToast('Email copied to clipboard!');
    } catch {
      showToast('Could not copy email — please copy manually.');
    }
  });
};

const observeEntries = () => {
  if (window.matchMedia('print').matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) target.classList.add('visible');
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -20px 0px' },
  );

  document.querySelectorAll('.entry, .skill-group, .edu-entry, .cert-entry').forEach((el) => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', () => {
  populateResume();
  setupActions();
  observeEntries();
});
