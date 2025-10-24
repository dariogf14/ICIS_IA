// src/datos/proyectos.js
const proyectos = [
  {
    id: 'proj-001',
    titulo: 'Migración a la Nube',
    descripcion: 'Mover todos los servicios del servidor local a una plataforma en la nube antes de fin de mes.',
    estado: 'En Progreso',
    responsables: [{ id: 'u1', nombre: 'Carlos' }, { id: 'u2', nombre: 'Beatriz' }],
    prioridad: 'Alta'
  },
  {
    id: 'proj-002',
    titulo: 'Diseño de Landing Page',
    descripcion: 'Crear los mockups y el prototipo visual para la nueva campaña de marketing.',
    estado: 'Pendiente',
    responsables: [{ id: 'u3', nombre: 'Ana' }],
    prioridad: 'Media'
  },
  {
    id: 'proj-003',
    titulo: 'Optimización SEO',
    descripcion: 'Mejorar el posicionamiento en buscadores de la página principal.',
    estado: 'Completado',
    responsables: [{ id: 'u4', nombre: 'Elena' }, { id: 'u2', nombre: 'Beatriz' }],
    prioridad: 'Baja'
  },
  {
    id: 'proj-004',
    titulo: 'Desarrollo API REST',
    descripcion: 'Crear los endpoints para la nueva aplicación móvil.',
    estado: 'En Progreso',
    responsables: [{ id: 'u5', nombre: 'David' }],
    prioridad: 'Alta'
  },
  {
    id: 'proj-005',
    titulo: 'Integración de Pagos',
    descripcion: 'Adicionar pasarela de pagos y pruebas de seguridad.',
    estado: 'Pendiente',
    responsables: [{ id: 'u6', nombre: 'Gabriela' }],
    prioridad: 'Alta'
  },
  {
    id: 'proj-006',
    titulo: 'Campaña Emailing',
    descripcion: 'Diseñar y enviar secuencia de correos para la nueva promoción.',
    estado: 'Pendiente',
    responsables: [{ id: 'u7', nombre: 'Héctor' }],
    prioridad: 'Media'
  },
  {
    id: 'proj-007',
    titulo: 'Test de Usabilidad',
    descripcion: 'Realizar tests con usuarios y recopilar feedback UX.',
    estado: 'En Progreso',
    responsables: [{ id: 'u8', nombre: 'Isabel' }, { id: 'u3', nombre: 'Ana' }],
    prioridad: 'Media'
  },
  {
    id: 'proj-008',
    titulo: 'Refactor Frontend',
    descripcion: 'Refactorizar componentes y optimizar carga de assets.',
    estado: 'Pendiente',
    responsables: [{ id: 'u5', nombre: 'David' }],
    prioridad: 'Baja'
  },
  {
    id: 'proj-009',
    titulo: 'Monitorización',
    descripcion: 'Configurar alertas y dashboards de rendimiento.',
    estado: 'Completado',
    responsables: [{ id: 'u1', nombre: 'Carlos' }],
    prioridad: 'Media'
  },
  {
    id: 'proj-010',
    titulo: 'Automatización CI/CD',
    descripcion: 'Configurar pipeline de despliegue automático para producción.',
    estado: 'En Progreso',
    responsables: [{ id: 'u4', nombre: 'Elena' }, { id: 'u6', nombre: 'Gabriela' }],
    prioridad: 'Alta'
  }
];

export default proyectos;