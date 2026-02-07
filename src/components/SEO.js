import Head from "next/head";

export default function SEO({
  title = "SuperTech ReadyMix Pvt. Ltd. | ReadyMix Concrete Manufacturer Jaipur",
  description = "Trusted ReadyMix Concrete manufacturer on Jaipur–Ajmer National Highway supplying high-quality concrete for residential, commercial, and infrastructure projects.",
}) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Basic SEO */}
      <meta name="author" content="SuperTech ReadyMix Pvt. Ltd." />
      <meta
        name="keywords"
        content="ReadyMix Concrete Jaipur, RMC Jaipur, Concrete Supplier Jaipur, SuperTech ReadyMix"
      />
    </Head>
  );
}
