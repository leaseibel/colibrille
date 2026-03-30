import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos prestations", href: "/nos-prestations" },
  { label: "Nos tarifs", href: "/nos-tarifs" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-green-900 text-white">
      <div className="max-w-container mx-auto px-24 py-40 lg:px-24 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-32">
          {/* Logo + social */}
          <div className="md:col-span-4 flex flex-col gap-16">
            <span className="font-display font-bold text-lg">Colibrille</span>
            <p className="text-xs text-white/60">
              Esthétique automobile à Aytré (17)
            </p>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-xs mb-12">Navigation</h3>
            <ul className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-xs mb-12">Légal</h3>
            <ul className="flex flex-col gap-8">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business info */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-xs mb-12">Contact</h3>
            <ul className="flex flex-col gap-8 text-xs text-white/60">
              <li>2 rue Le Verrier, 17440 Aytré</li>
              <li>
                <a href="tel:+33611489861" className="hover:text-white transition-colors">
                  06 11 48 98 61
                </a>
              </li>
              <li>
                <a
                  href="mailto:atelier.colibrille.17@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  atelier.colibrille.17@gmail.com
                </a>
              </li>
              <li>Lun - Ven : 08h30 / 18h30</li>
              <li>Sam : 09h00 / 12h30</li>
              <li>Dim : Fermé</li>
              <li className="mt-8 text-xxs">SIRET : 100 817 677 844 48</li>
            </ul>
          </div>
        </div>

        <div className="mt-40 pt-24 border-t border-[var(--color-ghost-inverted-stroke)] text-xxs text-white/40 text-center">
          &copy; {new Date().getFullYear()} Colibrille. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
