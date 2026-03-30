import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    prestations: collection({
      label: "Prestations",
      slugField: "title",
      path: "src/content/prestations/*",
      format: { contentField: "description" },
      schema: {
        title: fields.slug({ name: { label: "Titre" } }),
        description: fields.markdoc({ label: "Description" }),
        image: fields.image({
          label: "Image",
          directory: "public/images/prestations",
          publicPath: "/images/prestations",
        }),
      },
    }),
    tarifs: collection({
      label: "Tarifs",
      slugField: "title",
      path: "src/content/tarifs/*",
      schema: {
        title: fields.slug({ name: { label: "Titre" } }),
        items: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            price: fields.text({ label: "Prix" }),
          }),
          {
            label: "Éléments",
            itemLabel: (props) => props.fields.label.value,
          }
        ),
      },
    }),
    faq: collection({
      label: "FAQ",
      slugField: "question",
      path: "src/content/faq/*",
      format: { contentField: "answer" },
      schema: {
        question: fields.slug({ name: { label: "Question" } }),
        answer: fields.markdoc({ label: "Réponse" }),
      },
    }),
  },
  singletons: {
    siteSettings: singleton({
      label: "Paramètres du site",
      path: "src/content/site-settings",
      schema: {
        phone: fields.text({ label: "Téléphone" }),
        email: fields.text({ label: "Email" }),
        address: fields.text({ label: "Adresse" }),
        siret: fields.text({ label: "SIRET" }),
        hoursWeekday: fields.text({ label: "Horaires semaine" }),
        hoursWeekend: fields.text({ label: "Horaires samedi" }),
        offDay: fields.text({ label: "Jour de fermeture" }),
      },
    }),
  },
});
