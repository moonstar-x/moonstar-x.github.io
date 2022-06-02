const NAVBAR: Record<string, string> = {
  'navbar.projects': 'Proyectos',
  'navbar.about': 'Acerca',
  'navbar.contact': 'Contacto'
};

const FEATURE: Record<string, string> = {
  'feature.title': 'Hola, soy Christian, futuro ingeniero en software con una pasión por la programación.'
};

const ALL: Record<string, string> = {
  ...NAVBAR,
  ...FEATURE
};

export default ALL;
