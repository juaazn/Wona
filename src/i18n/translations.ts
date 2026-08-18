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
			image?: string;
			imageAlt?: string;
			imageFit?: 'cover' | 'contain';
			url?: string;
		}>;
	};
	contactModal: {
		eyebrow: string;
		title: string;
		description: string;
		whatsapp: string;
		email: string;
		close: string;
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
			creativeLead: 'Digital product',
			creativeRole: 'designer',
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
				{
					title: 'Clinical session management platform',
					category: 'Digital Product',
					description: 'A clear digital experience for managing patient sessions, clinical follow-up and planning from a single workspace.',
					image: '/images/proyecto-seguimiento-clinico.png',
					imageAlt: 'Clinical session management dashboard with session list and planning calendar',
					url: 'https://app.vrainhax.com',
				},
				{
					title: 'Post: memories from a study trip',
					category: 'Web Development',
					description: 'A small social network created as an educational activity where students could share and preserve memories from their study trip.',
					image: '/images/proyecto-post-red-social.png',
					imageAlt: 'Post social network login screen on a mobile device',
					imageFit: 'contain',
					url: 'https://post-bay-six.vercel.app/',
				},
				{
					title: 'Iris: a diary of student stories',
					category: 'Digital Storytelling',
					description: "A digital diary created for a university to share its students' stories, experiences and perspectives through an intimate editorial format.",
					image: '/images/proyecto-iris.png',
					imageAlt: 'Iris digital diary homepage presenting a collection of student stories',
					url: 'https://iris-blond-five.vercel.app/',
				},
			],
		},
		contactModal: {
			eyebrow: 'Contact',
			title: "Let's talk.",
			description: 'Choose the channel that works best for you and tell me about your project.',
			whatsapp: 'WhatsApp Business',
			email: 'Email',
			close: 'Close contact window',
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
			creativeLead: 'Diseñador de',
			creativeRole: 'productos digitales',
			disciplinesLabel: 'Diseño, desarrollo, Movíl y Webflow',
			disciplines: ['Diseño', 'Desarrollo', 'Webflow'],
			projectCta: 'Mis proyectos',
			talkCta: 'Hablemos',
			portraitAlt: 'Retrato de Juan Barthhold',
		},
		marquee: {
			ariaLabel: 'Servicios creativos',
			items: ['Branding', 'Desarrollo', 'Estrategia', 'Diseño de producto', 'Gráfica en movimiento', 'Experiencia de usuario', 'Diseño'],
		},
		about: {
			eyebrow: ['Juan', 'Barthhold'],
			titleLines: ['Diseñador de', 'productos digitales.'],
			lead: 'Transformo ideas complejas en productos claros, útiles y visualmente memorables.',
			body: 'Trabajo entre diseño de producto, experiencia de usuario y desarrollo para crear experiencias consistentes de principio a fin.',
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
				{
					title: 'Plataforma de gestión clínica',
					category: 'Producto digital',
					description: 'Una experiencia clara para gestionar sesiones de pacientes, seguimiento clínico y planificación desde un único espacio.',
					image: '/images/proyecto-seguimiento-clinico.png',
					imageAlt: 'Panel de gestión clínica con listado de sesiones y calendario de planificación',
					url: 'https://app.vrainhax.com',
				},
				{
					title: 'Post: recuerdos de un viaje de estudios',
					category: 'Desarrollo web',
					description: 'Una mini red social creada como actividad didáctica para que los estudiantes compartieran y conservaran los recuerdos de su viaje de estudios.',
					image: '/images/proyecto-post-red-social.png',
					imageAlt: 'Pantalla de acceso móvil de la red social Post',
					imageFit: 'contain',
					url: 'https://post-bay-six.vercel.app/',
				},
				{
					title: 'Iris: un diario de historias estudiantiles',
					category: 'Narrativa digital',
					description: 'Un diario digital creado para una universidad con el objetivo de contar las historias, experiencias y perspectivas de sus estudiantes mediante un formato editorial cercano.',
					image: '/images/proyecto-iris.png',
					imageAlt: 'Página principal del diario digital Iris con una colección de historias estudiantiles',
					url: 'https://iris-blond-five.vercel.app/',
				},
			],
		},
		contactModal: {
			eyebrow: 'Contacto',
			title: 'Hablemos.',
			description: 'Elige el canal que te resulte más cómodo y cuéntame sobre tu proyecto.',
			whatsapp: 'WhatsApp Business',
			email: 'Correo electrónico',
			close: 'Cerrar ventana de contacto',
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
