export const supportedLocales = ['en', 'es'] as const;

export type Locale = (typeof supportedLocales)[number];

export interface SiteCopy {
	seo: {
		title: string;
		description: string;
	};
	skipLabel: string;
	header: {
		brandLabel: string;
		primaryNavLabel: string;
		mobileNavLabel: string;
		openNavigation: string;
		menu: string;
		home: string;
		about: string;
		portfolio: string;
		contact: string;
		talk: string;
	};
	hero: {
		greeting: string;
		creativeLead: string;
		creativeRole: string;
		locationLead: string;
		city: string;
		disciplinesLabel: string;
		disciplines: string[];
		projectCta: string;
		talkCta: string;
		portraitAlt: string;
	};
	marquee: {
		ariaLabel: string;
		items: string[];
	};
	about: {
		eyebrow: [string, string];
		titleLines: [string, string, string];
		lead: string;
		body: string;
		statsLabel: string;
		stats: Array<{ value: string; label: string; featured?: boolean }>;
	};
	portfolio: {
		title: string;
		subtitle: string;
		imagePlaceholder: string;
		viewProject: string;
		discussProject: string;
		projects: Array<{
			title: string;
			category: string;
			description: string;
		}>;
	};
	footer: {
		availability: string;
		titleLines: [string, string];
		rights: string;
		backToTop: string;
	};
}

export const translations: Record<Locale, SiteCopy> = {
	en: {
		seo: {
			title: 'Wona — Creative Designer Portfolio',
			description: 'Editorial portfolio for a product designer and art director.',
		},
		skipLabel: 'Skip to content',
		header: {
			brandLabel: 'Wona, back to top',
			primaryNavLabel: 'Primary navigation',
			mobileNavLabel: 'Mobile navigation',
			openNavigation: 'Open navigation',
			menu: 'Menu',
			home: 'Home',
			about: 'About',
			portfolio: 'Portfolio',
			contact: 'Contact',
			talk: "Let's talk",
		},
		hero: {
			greeting: "Hi, I'm Juan.",
			creativeLead: 'A creative',
			creativeRole: 'designer',
			locationLead: 'Based in',
			city: 'London',
			disciplinesLabel: 'Design, development, phone and Webflow',
			disciplines: ['Design', 'Development', 'Webflow'],
			projectCta: 'My projects',
			talkCta: "Let's talk",
			portraitAlt: 'Portrait of Juan Barthhold',
		},
		marquee: {
			ariaLabel: 'Creative services',
			items: ['Branding', 'Development', 'Strategy', 'Product Design', 'Motion Graphic', 'Art Direction', 'Design'],
		},
		about: {
			eyebrow: ['Juan', 'Barthhold'],
			titleLines: ['Digital product', 'designer.'],
			lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			statsLabel: 'Career statistics',
			stats: [
				{ value: '2', label: 'Years of experience' },
				{ value: '+ 3', label: 'Projects completed', featured: true },
			],
		},
		portfolio: {
			title: 'Portfolio',
			subtitle: 'Recognitions & accomplishments',
			imagePlaceholder: 'Project image placeholder',
			viewProject: 'View project',
			discussProject: 'Discuss a project like',
			projects: [
				{ title: 'Brand identity and digital experience', category: 'Art Direction', description: 'A focused identity system built around typography, contrast and a direct editorial rhythm.' },
				{ title: 'Digital product for modern teams', category: 'Product Design', description: 'A clear product experience that balances everyday usability with a distinctive visual voice.' },
				{ title: 'Campaign built to move', category: 'Motion Graphic', description: 'A flexible campaign toolkit connecting still imagery, bold type and motion across every format.' },
			],
		},
		footer: {
			availability: 'Available for selected projects',
			titleLines: ["Let's create", 'something good.'],
			rights: 'All rights reserved.',
			backToTop: 'Back to top ↑',
		},
	},
	es: {
		seo: {
			title: 'Wona — Portfolio de diseñador creativo',
			description: 'Portfolio editorial de un diseñador de producto y director de arte.',
		},
		skipLabel: 'Saltar al contenido',
		header: {
			brandLabel: 'Wona, volver al inicio',
			primaryNavLabel: 'Navegación principal',
			mobileNavLabel: 'Navegación móvil',
			openNavigation: 'Abrir navegación',
			menu: 'Menú',
			home: 'Inicio',
			about: 'Sobre mí',
			portfolio: 'Portfolio',
			contact: 'Contacto',
			talk: 'Hablemos',
		},
		hero: {
			greeting: 'Hola, soy Juan.',
			creativeLead: 'Developer',
			creativeRole: 'DAM',
			locationLead: 'Con base en',
			city: 'Bilbao',
			disciplinesLabel: 'Diseño, desarrollo, Movíl y Webflow',
			disciplines: ['Diseño', 'Desarrollo', 'Webflow'],
			projectCta: 'Mis proyectos',
			talkCta: 'Hablemos',
			portraitAlt: 'Retrato de Juan Barthhold',
		},
		marquee: {
			ariaLabel: 'Servicios creativos',
			items: ['Branding', 'Desarrollo', 'Estrategia', 'Diseño de producto', 'Gráfica en movimiento', 'Dirección de arte', 'Diseño'],
		},
		about: {
			eyebrow: ['Juan', 'Barthhold'],
			titleLines: ['Diseñador de', 'productos digitales.'],
			lead: 'Transformo ideas complejas en productos claros, útiles y visualmente memorables.',
			body: 'Trabajo entre diseño de producto, dirección de arte y desarrollo para crear experiencias consistentes de principio a fin.',
			statsLabel: 'Estadísticas profesionales',
			stats: [
				{ value: '2', label: 'Años de experiencia' },
				{ value: '+ 3', label: 'Proyectos completados', featured: true },
			],
		},
		portfolio: {
			title: 'Portfolio',
			subtitle: 'Proyectos seleccionados',
			imagePlaceholder: 'Imagen provisional del proyecto',
			viewProject: 'Ver proyecto',
			discussProject: 'Hablar sobre un proyecto como',
			projects: [
				{ title: 'Identidad de marca y experiencia digital', category: 'Dirección de arte', description: 'Un sistema de identidad centrado en la tipografía, el contraste y un ritmo editorial directo.' },
				{ title: 'Producto digital para equipos modernos', category: 'Diseño de producto', description: 'Una experiencia clara que equilibra la utilidad diaria con una voz visual propia.' },
				{ title: 'Una campaña creada para moverse', category: 'Gráfica en movimiento', description: 'Un sistema flexible que conecta imagen, tipografía y movimiento en todos los formatos.' },
			],
		},
		footer: {
			availability: 'Disponible para proyectos seleccionados',
			titleLines: ['Creemos algo', 'realmente bueno.'],
			rights: 'Todos los derechos reservados.',
			backToTop: 'Volver arriba ↑',
		},
	},
};

export function getTranslation(locale: Locale): SiteCopy {
	return translations[locale];
}
