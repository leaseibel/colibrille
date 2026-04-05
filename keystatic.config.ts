import { config, fields, collection, singleton } from '@keystatic/core'

const isGithub = process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND === 'github'

const storage = isGithub
  ? { kind: 'github' as const, repo: 'leaseibel/colibrille' as const }
  : { kind: 'local' as const }

export default config({
  storage,

  ui: {
    brand: { name: 'Colibrille' },
    navigation: {
      'Informations générales': ['settings'],
      'Landing page': ['heroContent', 'testimonials', 'landingPrestations'],
      'Nos Prestations': ['prestations'],
      'Nos Tarifs': ['tarifsContent'],
      'À Propos': ['aproposContent', 'certifications'],
      'FAQ': ['faq'],
      'Pages annexes': ['mentionsLegales', 'rgpd', 'cgvCgu', 'planDuSite'],
    }
  },

  singletons: {

    // ─── PARAMÈTRES GLOBAUX ───────────────────────────────
    settings: singleton({
      label: 'Informations générales',
      path: 'content/settings/',
      format: { data: 'json' },
      schema: {
        phone: fields.text({
          label: 'Numéro de téléphone',
          defaultValue: '06 11 48 98 61',
          description: 'Affiché dans le header, footer et ContactCTA'
        }),
        email: fields.text({
          label: 'Email',
          defaultValue: 'atelier.colibrille.17@gmail.com',
        }),
        address: fields.text({
          label: 'Adresse postale',
          defaultValue: '2 rue Le Verrier, 17440 Aytré',
        }),
        siret: fields.text({
          label: 'SIRET',
          defaultValue: '100 817 677 844 48',
        }),
        logoWithBaseline: fields.image({
          label: 'Logo avec baseline',
          directory: 'public/assets/logo',
          publicPath: '/assets/logo/',
        }),
        logoWithoutBaseline: fields.image({
          label: 'Logo sans baseline',
          directory: 'public/assets/logo',
          publicPath: '/assets/logo/',
        }),
        hoursWeek: fields.text({
          label: 'Lun - Ven',
          defaultValue: '08h30 / 18h30',
        }),
        hoursSat: fields.text({
          label: 'Samedi',
          defaultValue: '09h00 / 12h30',
        }),
        hoursSun: fields.text({
          label: 'Dimanche',
          defaultValue: 'Fermé',
        }),
        instagram: fields.url({
          label: 'Lien Instagram',
          defaultValue: 'https://www.instagram.com/ateliercolibrille?igsh=YW55dXppZmZqazAx',
        }),
        facebook: fields.url({
          label: 'Lien Facebook',
          defaultValue: 'https://www.facebook.com/people/Atelier-Colibrille/61574280063226/',
        }),
        google: fields.url({
          label: 'Lien Google Reviews',
          defaultValue: 'https://share.google/a8l0b7AVYfWwomhUj',
        }),
        googleMapsUrl: fields.url({
          label: 'Lien Google Maps',
          description: 'URL complète vers Google Maps (utilisée sur l\'adresse et la carte)',
          defaultValue: 'https://www.google.com/maps/place/Colibrille/@46.1302288,-1.1000299,17z/...',
        }),
        googleMapsEmbed: fields.text({
          label: 'Google Maps embed src',
          description: 'Le src de l\'iframe Google Maps (page À propos)',
          defaultValue: 'https://www.google.com/maps/embed?pb=...',
        }),
      }
    }),

    // ─── LANDING PAGE ─────────────────────────────────────
    heroContent: singleton({
      label: 'Hero de la landing',
      path: 'content/landing/hero/',
      format: { data: 'json' },
      schema: {
        subtitle: fields.text({
          label: 'Sous-titre',
          defaultValue: 'Votre nouveau centre d\'esthétique automobile sur Aytré (17).',
        }),
      }
    }),

    tarifsContent: singleton({
      label: 'Nos Tarifs — Card "Pourquoi nous rencontrer"',
      path: 'content/tarifs/',
      format: { data: 'json' },
      schema: {
        photo: fields.image({
          label: 'Photo (Corentin)',
          directory: 'public/assets/images/tarifs',
          publicPath: '/assets/images/tarifs/',
        }),
        content: fields.document({
          label: 'Contenu de la card',
          formatting: true,
          description: 'Texte de la section "Pourquoi nous avons besoin de vous rencontrer"',
        }),
      }
    }),

    aproposContent: singleton({
      label: 'À Propos — Card bio',
      path: 'content/apropos/',
      format: { data: 'json' },
      schema: {
        photo: fields.image({
          label: 'Photo (portrait)',
          directory: 'public/assets/images/a-propos',
          publicPath: '/assets/images/a-propos/',
        }),
        content: fields.document({
          label: 'Texte bio',
          formatting: true,
        }),
        directionsTitle: fields.text({
          label: 'Titre des indications',
          defaultValue: 'Pour vous rendre à notre local d\'esthétique automobile, rien de plus simple !',
        }),
        directionsCar: fields.document({
          label: 'En voiture (liste à puces)',
          formatting: { listTypes: { unordered: true } },
        }),
        directionsTransport: fields.text({
          label: 'En transports en commun',
          multiline: true,
          defaultValue: 'Vous pouvez également utiliser le réseau de bus Yelo...',
        }),
        directionsExtra: fields.text({
          label: 'Informations complémentaires',
          multiline: true,
          defaultValue: 'Nous sommes situés sur la parcelle...',
        }),
      }
    }),

    mentionsLegales: singleton({
      label: 'Mentions Légales',
      path: 'content/pages/mentions-legales/',
      format: { data: 'json' },
      schema: {
        content: fields.document({
          label: 'Contenu',
          formatting: true,
          dividers: true,
          links: true,
        }),
      }
    }),

    rgpd: singleton({
      label: 'Politique de confidentialité (RGPD)',
      path: 'content/pages/rgpd/',
      format: { data: 'json' },
      schema: {
        content: fields.document({
          label: 'Contenu',
          formatting: true,
          dividers: true,
          links: true,
        }),
      }
    }),

    cgvCgu: singleton({
      label: 'CGV / CGU',
      path: 'content/pages/cgv-cgu/',
      format: { data: 'json' },
      schema: {
        content: fields.document({
          label: 'Contenu',
          formatting: true,
          dividers: true,
          links: true,
        }),
      }
    }),

    planDuSite: singleton({
      label: 'Plan du site',
      path: 'content/pages/plan-du-site/',
      format: { data: 'json' },
      schema: {
        content: fields.document({
          label: 'Contenu',
          formatting: true,
          links: true,
        }),
      }
    }),
  },

  collections: {

    // ─── AVIS (LANDING) ───────────────────────────────────
    testimonials: collection({
      label: 'Avis clients',
      path: 'content/testimonials/*',
      slugField: 'author',
      format: { data: 'json' },
      schema: {
        author: fields.slug({ name: { label: 'Auteur' } }),
        rating: fields.select({
          label: 'Note',
          defaultValue: '5',
          options: [
            { value: '5', label: '⭐⭐⭐⭐⭐ 5/5' },
            { value: '4', label: '⭐⭐⭐⭐ 4/5' },
            { value: '3', label: '⭐⭐⭐ 3/5' },
          ]
        }),
        content: fields.text({
          label: 'Texte de l\'avis',
          multiline: true,
        }),
      }
    }),

    // ─── PRESTATIONS ──────────────────────────────────────
    prestations: collection({
      label: 'Nos Prestations',
      path: 'content/prestations/*',
      slugField: 'slug',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({ name: { label: 'Identifiant (ne pas modifier)' } }),
        title: fields.text({ label: 'Titre', defaultValue: 'Nettoyage intérieur/extérieur' }),
        image: fields.image({
          label: 'Image (partagée landing + page prestations)',
          directory: 'public/assets/images/prestations',
          publicPath: '/assets/images/prestations/',
        }),
        content: fields.document({
          label: 'Contenu',
          formatting: true,
        }),
        order: fields.integer({
          label: 'Ordre d\'affichage',
          defaultValue: 1,
          validation: { isRequired: true, min: 1 },
        }),
      }
    }),

    // ─── LANDING PRESTATIONS SUMMARY ──────────────────────
    landingPrestations: collection({
      label: 'Landing — Résumés des prestations',
      path: 'content/landing-prestations/*',
      slugField: 'slug',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({ name: { label: 'Identifiant' } }),
        title: fields.text({ label: 'Titre affiché sur la card' }),
        summary: fields.text({ label: 'Résumé (2-3 lignes)', multiline: true }),
        link: fields.text({ label: 'Ancre de lien (ex: #nettoyage)' }),
      }
    }),

    // ─── CERTIFICATIONS ───────────────────────────────────
    certifications: collection({
      label: 'Diplômes et certifications',
      path: 'content/certifications/*',
      slugField: 'title',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Titre du diplôme' } }),
        image: fields.image({
          label: 'Image du diplôme (format portrait)',
          directory: 'public/assets/images/a-propos',
          publicPath: '/assets/images/a-propos/',
        }),
        order: fields.integer({
          label: 'Ordre d\'affichage',
          defaultValue: 1,
          validation: { isRequired: true, min: 1 },
        }),
      }
    }),

    // ─── FAQ ──────────────────────────────────────────────
    faq: collection({
      label: 'FAQ',
      path: 'content/faq/*',
      slugField: 'question',
      format: { data: 'json' },
      schema: {
        question: fields.slug({ name: { label: 'Question' } }),
        answer: fields.document({
          label: 'Réponse',
          formatting: true,
        }),
        order: fields.integer({
          label: 'Ordre d\'affichage',
          defaultValue: 1,
          validation: { isRequired: true, min: 1 },
        }),
      }
    }),
  }
})
