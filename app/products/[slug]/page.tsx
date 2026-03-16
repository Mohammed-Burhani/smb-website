import Navbar from "../../components/Navbar";
import PageBanner from "../../components/PageBanner";
import ProductDetailSection from "../../components/ProductDetailSection";
import ProductTypesSection, { ProductType } from "../../components/ProductTypesSection";
import ProductFeaturesSection from "../../components/ProductFeaturesSection";
import Footer from "../../components/Footer";

interface ProductPageData {
  outlinedText: string;
  solidText: string;
  subtitle: string;
  image: string;
  detailOutlinedText: string;
  detailSolidText: string;
  description: string[];
  detailImage: string;
  typesOutlinedText: string;
  typesSolidText: string;
  types: ProductType[];
  featuresImage: string;
  features: string[];
}

// Placeholder data — will be replaced by Sanity CMS fetch
const productData: Record<string, ProductPageData> = {
  "mild-steel-elbows": {
    outlinedText: "MILD STEEL",
    solidText: "ELBOWS",
    subtitle: "Durable Pipe Direction Solutions for Industrial Applications",
    image: "/home/prod-1.png",
    detailOutlinedText: "RELIABLE",
    detailSolidText: "MILD STEEL ELBOWS",
    description: [
      "SMB Fitting Industry manufactures and supplies high-quality mild steel elbows designed to change the direction of pipelines while maintaining structural integrity and smooth flow. These fittings are widely used in construction, fabrication, and industrial piping systems where durability and dimensional accuracy are essential.",
      "Our elbows are manufactured with attention to strength, consistency, and reliable performance in demanding environments.",
    ],
    detailImage: "/home/prod-1.png",
    typesOutlinedText: "TYPES",
    typesSolidText: "OF MILD STEEL ELBOWS",
    types: [
      { title: "45 Degree Elbow", description: "Designed to change pipeline direction by 45 degrees while maintaining smooth flow.", image: "/home/prod-1.png" },
      { title: "90 Degree Elbow", description: "Commonly used pipe fitting that changes direction at a right angle.", image: "/home/prod-1.png" },
      { title: "Long Radius Elbow", description: "Provides smoother flow with reduced pressure loss in piping systems.", image: "/home/prod-1.png" },
      { title: "Short Radius Elbow", description: "Compact elbow design suitable for tight installation spaces.", image: "/home/prod-1.png" },
    ],
    featuresImage: "/home/prod-1.png",
    features: [
      "High strength mild steel construction",
      "Accurate bending and shaping",
      "Durable industrial performance",
      "Reliable pipe connectivity",
      "Suitable for fabrication and construction systems",
    ],
  },
  "ms-pipe-fittings": {
    outlinedText: "MS PIPE",
    solidText: "FITTINGS",
    subtitle: "High-Quality Pipe Fittings for Construction & Fabrication",
    image: "/home/prod-2.png",
    detailOutlinedText: "PRECISION",
    detailSolidText: "MS PIPE FITTINGS",
    description: [
      "We supply a comprehensive range of MS pipe fittings including couplings, reducers, bends, and connectors used in fabrication workshops, construction projects, and industrial pipeline systems.",
      "Each fitting is manufactured to meet dimensional standards ensuring reliable connections and long-term performance across industrial applications.",
    ],
    detailImage: "/home/prod-2.png",
    typesOutlinedText: "TYPES",
    typesSolidText: "OF MS PIPE FITTINGS",
    types: [
      { title: "Couplings", description: "Used to connect two pipes of the same diameter securely.", image: "/home/prod-2.png" },
      { title: "Reducers", description: "Connects pipes of different diameters in a pipeline system.", image: "/home/prod-2.png" },
      { title: "Tee Fittings", description: "Allows branching of pipelines in a T-shaped configuration.", image: "/home/prod-2.png" },
      { title: "End Caps", description: "Seals the end of a pipe to close off a pipeline section.", image: "/home/prod-2.png" },
    ],
    featuresImage: "/home/prod-2.png",
    features: [
      "Wide range of sizes and configurations",
      "Precision threaded and welded options",
      "Corrosion-resistant mild steel material",
      "Suitable for high-pressure applications",
      "Consistent dimensional accuracy",
    ],
  },
  "steel-pipes-sections": {
    outlinedText: "STEEL PIPES &",
    solidText: "SECTIONS",
    subtitle: "Durable Steel Pipes & Structural Sections for Industrial Use",
    image: "/home/prod-3.png",
    detailOutlinedText: "DURABLE",
    detailSolidText: "STEEL PIPES & SECTIONS",
    description: [
      "Our steel pipes and structural sections are sourced and supplied for use in fabrication, framework construction, and mechanical installations across industrial sectors.",
      "Available in various sizes and grades, these products deliver consistent structural performance and dimensional accuracy for demanding project requirements.",
    ],
    detailImage: "/home/prod-3.png",
    typesOutlinedText: "TYPES",
    typesSolidText: "OF STEEL PIPES & SECTIONS",
    types: [
      { title: "Round Pipes", description: "Standard circular cross-section pipes for general industrial use.", image: "/home/prod-3.png" },
      { title: "Square Sections", description: "Square hollow sections used in structural frameworks.", image: "/home/prod-3.png" },
      { title: "Rectangular Sections", description: "Rectangular hollow sections for fabrication and construction.", image: "/home/prod-3.png" },
      { title: "Angle Sections", description: "L-shaped steel sections for structural support applications.", image: "/home/prod-3.png" },
    ],
    featuresImage: "/home/prod-3.png",
    features: [
      "Available in multiple sizes and wall thicknesses",
      "High tensile mild steel material",
      "Suitable for structural and mechanical use",
      "Consistent length and dimensional tolerance",
      "Bulk supply capability for large projects",
    ],
  },
  "custom-fabricated-components": {
    outlinedText: "CUSTOM FABRICATED",
    solidText: "COMPONENTS",
    subtitle: "Tailored Fabrication Solutions for Your Project Requirements",
    image: "/home/fabrication.png",
    detailOutlinedText: "TAILORED",
    detailSolidText: "CUSTOM FABRICATED COMPONENTS",
    description: [
      "SMB Fitting Industry supports customized fabrication requirements based on specific project specifications and industrial needs. Our in-house manufacturing capability allows us to produce components to exact dimensions and tolerances.",
      "From one-off prototypes to batch production, we deliver consistent quality and reliable turnaround for custom steel fabrication orders.",
    ],
    detailImage: "/home/fabrication.png",
    typesOutlinedText: "TYPES",
    typesSolidText: "OF CUSTOM COMPONENTS",
    types: [
      { title: "Custom Elbows", description: "Non-standard angle elbows fabricated to project specifications.", image: "/home/fabrication.png" },
      { title: "Fabricated Flanges", description: "Custom flanges designed for specific pipe connections.", image: "/home/fabrication.png" },
      { title: "Structural Brackets", description: "Steel brackets and supports fabricated to drawing.", image: "/home/fabrication.png" },
      { title: "Special Fittings", description: "Any non-standard fitting produced to customer requirements.", image: "/home/fabrication.png" },
    ],
    featuresImage: "/home/fabrication.png",
    features: [
      "Fabricated to exact customer specifications",
      "In-house manufacturing for quality control",
      "Flexible batch sizes from single units",
      "Consistent finishing and dimensional accuracy",
      "Fast turnaround for urgent project needs",
    ],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = productData[slug] ?? {
    outlinedText: "OUR", solidText: "PRODUCT",
    subtitle: "Precision Steel Fittings for Industrial Applications",
    image: "/home/banner.png",
    detailOutlinedText: "QUALITY", detailSolidText: "STEEL PRODUCTS",
    description: ["Premium steel fittings and components for industrial use."],
    detailImage: "/home/banner.png",
    typesOutlinedText: "TYPES", typesSolidText: "OF PRODUCTS",
    types: [], featuresImage: "/home/banner.png", features: [],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageBanner image={data.image} outlinedText={data.outlinedText} solidText={data.solidText} subtitle={data.subtitle} />
      <ProductDetailSection outlinedText={data.detailOutlinedText} solidText={data.detailSolidText} description={data.description} image={data.detailImage} />
      <ProductTypesSection outlinedText={data.typesOutlinedText} solidText={data.typesSolidText} types={data.types} />
      <ProductFeaturesSection image={data.featuresImage} features={data.features} />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }));
}
