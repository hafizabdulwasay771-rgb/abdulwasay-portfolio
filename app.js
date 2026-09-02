const icons = {
  leads: '↗', support: '✦', data: '⌁', mail: '✉', inventory: '▦', analytics: '◌',
};

const automationAreas = [
  ['leads', 'Lead management', 'Receive leads, analyze information, classify prospects, store structured data, and trigger the right follow-up.'],
  ['support', 'Customer support', 'Structure repetitive support workflows, route requests, process information, and maintain clear records.'],
  ['data', 'Data entry', 'Reduce repetitive copying and transferring of information between business systems.'],
  ['mail', 'Email & notifications', 'Send relevant confirmations, alerts, messages, and follow-ups when workflow conditions are met.'],
  ['inventory', 'Inventory & sales', 'Support repeatable inventory, transaction, expiry, reporting, and sales-related operations.'],
  ['analytics', 'Reporting & analytics', 'Collect, process, and organize operational data for better visibility into what is happening.'],
];

const benefits = [
  ['01', 'Save time', 'Routine data entry, email preparation, record checks, and system updates can happen once a workflow is triggered.'],
  ['02', 'Reduce manual errors', 'Structured steps reduce dependence on copying, retyping, and remembering every detail manually.'],
  ['03', 'Improve consistency', 'Each lead, request, transaction, or record can follow the same clearly defined process.'],
  ['04', 'Faster response', 'Workflows can take action as soon as a form, request, inventory update, or data change occurs.'],
  ['05', 'Reduce repetitive work', 'Predictable background tasks no longer need the same manual attention each time.'],
  ['06', 'Better visibility', 'Structured data can be organized into the databases, sheets, reports, and systems a business needs.'],
];

const solutions = [
  ['Leads sit waiting for manual review.', 'Receive and analyze the lead, classify it, notify the appropriate person, and record the data.'],
  ['Employees repeatedly enter inventory data.', 'Use validated bulk import and structured database workflows to make updates easier to review.'],
  ['Support teams handle the same request patterns.', 'Automate intake, categorization, routing, and the right repetitive workflow actions.'],
  ['Routine notifications require manual work.', 'Trigger relevant emails and notifications based on clearly defined workflow conditions.'],
];

const projects = [
  {
    number: '01', title: 'AI Real Estate Automation', category: 'AI automation / Lead qualification / CRM workflow',
    intro: 'An n8n workflow that turns property inquiries into a structured lead-handling process.',
    problem: 'Real estate teams can spend substantial time checking inquiries, reviewing lead information, deciding next steps, preparing emails, notifying salespeople, and updating records. That work can lead to missed leads, inconsistent classification, and delayed follow-up.',
    solution: 'A property inquiry is received through a webhook, assessed by AI according to predefined instructions and business rules, and used to drive the appropriate workflow actions. The AI provides structured lead assessment—it does not claim to make perfect decisions.',
    flow: ['Website / Form', 'Webhook', 'AI lead analysis', 'Classification', 'Email', 'Sales notification', 'Google Sheets', 'Analytics'],
    tech: ['n8n', 'AI model', 'Webhooks', 'Google Sheets', 'Email automation', 'APIs', 'Structured JSON'],
    before: ['Manual inquiry review', 'Manual classification', 'Manual email writing', 'Manual salesperson notification', 'Manual spreadsheet entry', 'Manual follow-up'],
    after: ['Automatic intake', 'AI-assisted qualification', 'Automatic email generation', 'Conditional notification', 'Automatic data recording', 'Structured workflow'],
    benefits: ['Reduces manual lead review', 'Speeds up initial lead processing', 'Helps keep lead classification consistent', 'Helps prevent missed follow-ups'],
    screenshot: { src: 'assets/projects/real-estate-ai-lead-qualification.png', alt: 'n8n canvas showing the Real Estate AI Lead Qualification workflow', caption: 'Actual n8n workflow: a property inquiry reaches an AI agent, is processed through decision logic, recorded in Google Sheets, and triggers customer or salesperson email actions.' },
  },
  {
    number: '02', title: 'Rx Assistant AI', category: 'AI / Pharmacy SaaS / Inventory & sales automation',
    intro: 'A multi-tenant pharmacy SaaS application backed by Supabase for more structured inventory and sales operations.',
    problem: 'Pharmacies manage inventory, stock receiving, batches, sales, expiry information, and large quantities of operational data. Manual handling can introduce incorrect quantities, duplicate records, data-entry mistakes, inconsistent batch handling, and overlooked expiry information.',
    solution: 'The system uses structured database operations and workflows for inventory, batch management, FEFO-based selling, purchase transactions, CSV inventory import, validation, sales, expiry management, alerts, analytics, reporting, and automation. FEFO means First Expire, First Out: batches with earlier expiry dates can be considered first for selling.',
    flow: ['CSV file', 'Parsing', 'Validation', 'Preview', 'Bulk processing', 'Database transaction', 'Inventory update'],
    tech: ['Supabase', 'PostgreSQL', 'React', 'CSV validation', 'Structured database operations', 'Realtime alerts'],
    before: ['Manual inventory updates', 'Manual batch checking', 'Repeated data entry', 'Unstructured imports', 'Manual expiry monitoring', 'Separate record keeping'],
    after: ['Validated inventory imports', 'Duplicate batch protection', 'FEFO-aware selling', 'Tenant-isolated data', 'Structured database operations', 'Operational visibility'],
    benefits: ['Less repetitive data entry', 'Better batch tracking', 'Easier expiry monitoring', 'More reliable inventory operations'],
    screenshot: { src: 'assets/projects/rx-assistant-expiry-management.png', alt: 'n8n canvas showing Rx Assistant AI expiry management automation', caption: 'Actual Rx Assistant AI n8n workflow for expiry management, including Supabase data operations, alert handling, and email reporting.' },
  },
  {
    number: '03', title: 'Customer Support Automation', category: 'AI automation / Customer support / Workflow automation',
    intro: 'A structured automation approach for repetitive customer support processes.',
    problem: 'Support teams often repeat the same operational tasks: receiving requests, categorizing inquiries, routing issues, recording information, escalating requests, and tracking support activity.',
    solution: 'The automation is designed to structure incoming requests, classify or route information, trigger suitable workflow actions, maintain records, and make the overall support process more consistent.',
    flow: ['Customer request', 'Webhook / input', 'AI / logic', 'Intent or category', 'Decision', 'Action', 'Response / notification', 'Record / database'],
    tech: ['Workflow automation', 'AI / logic', 'Webhooks', 'Structured records'],
    before: ['Manual request intake', 'Manual categorization', 'Manual routing', 'Repeated responses', 'Manual escalation', 'Manual activity tracking'],
    after: ['Structured input', 'Consistent categorization', 'Workflow routing', 'Triggered actions', 'Structured records', 'Repeatable operations'],
    benefits: ['Reduces repetitive handling', 'Creates consistent support processes', 'Helps route information', 'Maintains structured records'],
    screenshot: { src: 'assets/projects/customer-support-ticket-automation.png', alt: 'n8n canvas showing Customer Support Ticket Automation workflow', caption: 'Actual n8n workflow: a support request is normalized, classified by AI, routed through workflow logic, recorded in Google Sheets, and prepared for follow-up actions.' },
  },
];

const thinking = [
  ['01', 'Understand the process', 'What is currently happening?'],
  ['02', 'Find repetitive work', 'Which steps are predictable and repeated?'],
  ['03', 'Find error-prone steps', 'Where can manual work cause mistakes?'],
  ['04', 'Automate the workflow', 'Connect triggers, logic, AI, APIs, databases, and notifications.'],
  ['05', 'Monitor and improve', 'Test the workflow, validate outputs, and improve reliability.'],
];

const services = [
  ['02', 'Business Process Automation', 'Teams repeat predictable admin steps across disconnected tools.', 'Connect inputs, rules, actions, and existing systems into one reliable workflow.', 'Input → Rules → Workflow → Result'],
  ['03', 'n8n Workflow Development', 'Important handoffs break when integrations are brittle or undocumented.', 'Build maintainable workflows connecting webhooks, AI, APIs, databases, and notifications.', 'Trigger → Workflow → Integrations → Output'],
  ['04', 'Lead Qualification Automation', 'Sales teams manually review inquiries and decide which leads need attention.', 'Analyze, classify, notify the right person, and record every outcome automatically.', 'Lead → AI analysis → Score → Follow-up'],
  ['05', 'Customer Support Automation', 'Support teams repeatedly process similar requests and route them by hand.', 'Structure intake, categorization, routing, notifications, and repeatable responses.', 'Request → Classification → Routing → Response'],
  ['06', 'Data & Operations Automation', 'Operational data is copied between records, creating delays and duplicate entry.', 'Validate inputs, update databases, and create clearer reporting workflows.', 'Data → Validation → Database → Reporting'],
];
const stack = [
  ['Automation', ['n8n']], ['AI', ['LLMs / AI agents']], ['Backend / database', ['Supabase', 'PostgreSQL']], ['Frontend', ['React', 'JavaScript']], ['Infrastructure', ['Docker']], ['Integrations', ['Webhooks', 'APIs', 'Google Sheets', 'Email automation']],
];
const values = ['Less repetitive work', 'Fewer manual data-entry mistakes', 'Faster processing', 'More consistent workflows', 'Better data organization', 'Faster notifications', 'More reliable follow-up', 'Improved operational visibility'];
const developmentSteps = ['Discovery', 'Workflow mapping', 'Automation design', 'AI integration', 'API / database integration', 'Testing', 'Deployment', 'Optimization'];

const render = (target, html) => { document.querySelector(target).innerHTML = html; };

render('#automation-cards', automationAreas.map(([icon, title, text], index) => `<article class="automation-card reveal" style="--delay:${index * 40}ms"><div class="area-icon">${icons[icon]}</div><h3>${title}</h3><p>${text}</p><span class="card-index">0${index + 1}</span></article>`).join(''));
render('#solution-grid', solutions.map(([problem, solution], index) => `<article class="solution-card reveal"><span>0${index + 1}</span><div><p class="solution-label">Problem</p><h3>${problem}</h3></div><i aria-hidden="true">→</i><div><p class="solution-label solution-label-green">Automation solution</p><p>${solution}</p></div></article>`).join(''));
render('#benefits-grid', benefits.map(([number, title, text]) => `<article class="benefit-card reveal"><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join(''));
render('#thinking-grid', thinking.map(([number, title, text]) => `<article class="thinking-card reveal"><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join(''));
render('#services-grid', services.map(([number, title, problem, solution, flow], index) => `<article class="service-card reveal" style="--delay:${index * 55}ms"><div class="service-card-head"><span>${number}</span><i aria-hidden="true">↗</i></div><h3>${title}</h3><p><strong>Problem</strong> ${problem}</p><p class="service-solution"><strong>Solution</strong> ${solution}</p><div class="service-flow" aria-label="${flow}">${flow.split(' → ').map((step, i, all) => `<span>${step}</span>${i < all.length - 1 ? '<b>→</b>' : ''}`).join('')}</div></article>`).join(''));
render('#stack-grid', stack.map(([category, tools]) => `<article class="stack-card reveal"><p>${category}</p><div>${tools.map(item => `<span>${item}</span>`).join('')}</div></article>`).join(''));
render('#value-list', values.map((value, index) => `<div><span>${String(index + 1).padStart(2, '0')}</span><p>${value}</p><i>↗</i></div>`).join(''));
render('#development-steps', developmentSteps.map((step, index) => `<div class="development-step reveal"><span>${String(index + 1).padStart(2, '0')}</span><p>${step}</p></div>`).join(''));

render('#project-list', projects.map((project, index) => `
  <article class="project-card reveal">
    <button class="project-summary" type="button" aria-expanded="${index === 0}" aria-controls="project-detail-${index}">
      <span class="project-number">${project.number}</span><span class="project-title"><span>${project.category}</span><strong>${project.title}</strong><em>${project.intro}</em></span><span class="project-expand" aria-hidden="true">${index === 0 ? '−' : '+'}</span>
    </button>
    <div class="project-detail${index === 0 ? ' is-open' : ''}" id="project-detail-${index}">
      <div class="case-copy"><div><p class="case-label">The problem</p><p>${project.problem}</p></div><div><p class="case-label">The solution</p><p>${project.solution}</p></div></div>
      <div class="project-workflow"><p class="case-label">How it works</p><div class="workflow-nodes">${project.flow.map((item, i) => `<span>${item}${i < project.flow.length - 1 ? '<i>→</i>' : ''}</span>`).join('')}</div></div>
      <figure class="project-screenshot"><button type="button" class="screenshot-button" aria-label="Expand ${project.title} workflow screenshot"><img loading="lazy" src="${project.screenshot.src}" alt="${project.screenshot.alt}" /></button><figcaption>${project.screenshot.caption}<span>Click to enlarge ↗</span></figcaption></figure>
      <div class="case-bottom"><div><p class="case-label">Technology</p><div class="tag-list">${project.tech.map(item => `<span>${item}</span>`).join('')}</div><p class="case-label benefits-label">Business benefits</p><ul class="mini-benefits">${project.benefits.map(item => `<li>${item}</li>`).join('')}</ul></div><div class="before-after"><p class="case-label">Before / after</p><div><ul class="before-list"><li>Before</li>${project.before.map(item => `<li>${item}</li>`).join('')}</ul><ul class="after-list"><li>After</li>${project.after.map(item => `<li>${item}</li>`).join('')}</ul></div></div></div>
    </div>
  </article>`).join(''));

document.querySelectorAll('.project-summary').forEach(button => {
  button.addEventListener('click', () => {
    const detail = document.getElementById(button.getAttribute('aria-controls'));
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    detail.classList.toggle('is-open', !isOpen);
    button.querySelector('.project-expand').textContent = isOpen ? '+' : '−';
  });
});

const modal = document.createElement('dialog');
modal.className = 'image-modal';
modal.innerHTML = '<button class="modal-close" type="button" aria-label="Close image preview">×</button><img alt="" />';
document.body.append(modal);
const modalImage = modal.querySelector('img');
document.querySelectorAll('.screenshot-button').forEach(button => button.addEventListener('click', () => {
  const image = button.querySelector('img');
  modalImage.src = image.currentSrc || image.src;
  modalImage.alt = image.alt;
  modal.showModal();
}));
modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });

const nav = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const progress = document.querySelector('.scroll-progress span');
const updateScrollState = () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${maxScroll > 0 ? window.scrollY / maxScroll : 0})`;
};
window.addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); navLinks.classList.toggle('open', !open); });
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); navLinks.classList.remove('open'); }));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('in-view');
}), { threshold: 0.16 });
document.querySelectorAll('main > section').forEach(section => sectionObserver.observe(section));

// One shared clock positions every real-world AI card on the same fixed orbit.
const connectionMap = document.querySelector('.connection-map');
if (connectionMap) {
  const orbitItems = [...connectionMap.querySelectorAll('.orbit-item')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let orbitAngle = 0;
  let lastTime = performance.now();
  let paused = reduceMotion;
  const layoutOrbit = () => {
    const radius = Math.min(connectionMap.clientWidth, connectionMap.clientHeight) * (window.innerWidth < 621 ? .385 : .415);
    const centerY = connectionMap.clientHeight / 2;
    orbitItems.forEach((item, index) => {
      const angle = orbitAngle + (index * Math.PI * 2 / orbitItems.length) - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const depth = (Math.sin(angle) + 1) / 2;
      item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      item.style.zIndex = String(10 + Math.round(depth * 10));
      const card = item.querySelector('b');
      if (card) {
        card.style.transform = `translate(-50%, -50%) scale(${(.88 + depth * .12).toFixed(3)})`;
        card.style.opacity = (.72 + depth * .28).toFixed(3);
      }
    });
    connectionMap.style.setProperty('--orbit-center-y', `${centerY}px`);
  };
  const tick = now => {
    const elapsed = Math.min(now - lastTime, 80);
    lastTime = now;
    if (!paused && connectionMap.classList.contains('visible')) orbitAngle += elapsed * .00015;
    layoutOrbit();
    requestAnimationFrame(tick);
  };
  orbitItems.forEach(item => item.addEventListener('pointerenter', () => { paused = true; }));
  connectionMap.addEventListener('pointerleave', () => { if (!reduceMotion) paused = false; });
  window.addEventListener('resize', layoutOrbit, { passive: true });
  layoutOrbit();
  requestAnimationFrame(tick);
}

const heroVisual = document.querySelector('.hero-visual');
if (heroVisual && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroVisual.addEventListener('pointermove', event => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    heroVisual.style.setProperty('--tilt-x', `${y * -4}deg`);
    heroVisual.style.setProperty('--tilt-y', `${x * 5}deg`);
    heroVisual.style.setProperty('--move-x', `${x * 10}px`);
    heroVisual.style.setProperty('--move-y', `${y * 10}px`);
  });
  heroVisual.addEventListener('pointerleave', () => {
    heroVisual.style.setProperty('--tilt-x', '0deg'); heroVisual.style.setProperty('--tilt-y', '0deg');
    heroVisual.style.setProperty('--move-x', '0px'); heroVisual.style.setProperty('--move-y', '0px');
  });
}
