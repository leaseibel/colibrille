import { reader } from './keystatic-reader'

export async function getSettings() {
  const settings = await reader.singletons.settings.read()
  return {
    phone: settings?.phone ?? '06 11 48 98 61',
    email: settings?.email ?? 'atelier.colibrille.17@gmail.com',
    address: settings?.address ?? '2 rue Le Verrier, 17440 Aytré',
    siret: settings?.siret ?? '100 817 677 844 48',
    hoursWeek: settings?.hoursWeek ?? '08h30 / 18h30',
    hoursSat: settings?.hoursSat ?? '09h00 / 12h30',
    hoursSun: settings?.hoursSun ?? 'Fermé',
    instagram: settings?.instagram ?? 'https://www.instagram.com/ateliercolibrille',
    facebook: settings?.facebook ?? 'https://www.facebook.com/people/Atelier-Colibrille/61574280063226/',
    google: settings?.google ?? 'https://share.google/a8l0b7AVYfWwomhUj',
    googleMapsUrl: settings?.googleMapsUrl ?? 'https://www.google.com/maps/place/Colibrille/@46.1302288,-1.1000299,17z/data=!3m1!4b1!4m6!3m5!1s0x48014d91505b2053:0x306c9b7bd7a3e358!8m2!3d46.1302288!4d-1.097455!16s%2Fg%2F11nb6xc5td?hl=fr-FR&entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    googleMapsEmbed: settings?.googleMapsEmbed ?? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.123!2d-1.0974550!3d46.1302288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48014d91505b2053%3A0x306c9b7bd7a3e358!2sColibrille!5e0!3m2!1sfr!2sfr!4v1680000000000!5m2!1sfr!2sfr',
    logoWithBaseline: settings?.logoWithBaseline ?? '/assets/logo/logo-with-baseline.svg',
    logoWithoutBaseline: settings?.logoWithoutBaseline ?? '/assets/logo/logo-without-baseline.svg',
    favicon: settings?.favicon ?? null,
  }
}
