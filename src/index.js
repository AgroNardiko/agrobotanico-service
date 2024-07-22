import services from './data/services.yaml';
import contact from './data/contact.yaml';

document.addEventListener('DOMContentLoaded', () => {
  // Exemplo de como preencher a página de serviços
  const servicesContainer = document.querySelector('.container');
  services.services.forEach(service => {
    const serviceElement = document.createElement('div');
    serviceElement.innerHTML = `
      <h2>${service.name}</h2>
      <p>${service.description}</p>
      <ul>
        ${service.details.map(detail => `<li>${detail}</li>`).join('')}
      </ul>
    `;
    servicesContainer.appendChild(serviceElement);
  });

  // Exemplo de como preencher a página de contato
  if (document.location.pathname.endsWith('contact.html')) {
    const contactContainer = document.querySelector('.container');
    contactContainer.innerHTML = `
      <h2>Contato</h2>
      <p>Endereço: ${contact.contact.address}</p>
      <p>Telefone: ${contact.contact.phone}</p>
      <p>Email: ${contact.contact.email}</p>
      <p>Horário de Funcionamento: ${contact.contact.hours}</p>
    `;
  }
});
