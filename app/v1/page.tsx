import ConceptA from "@/concepts/a";
import ConceptB from "@/concepts/b";
import ConceptC from "@/concepts/c";
import ConceptD from "@/concepts/d";

export default async function V1({
  searchParams,
}: {
  searchParams: Promise<{ c?: string }>;
}) {
  const { c } = await searchParams;
  if (c === "b") {
    return <ConceptB />;
  }
  if (c === "c") {
    return <ConceptC />;
  }
  if (c === "d") {
    return <ConceptD />;
  }
  return <ConceptA />;
}
