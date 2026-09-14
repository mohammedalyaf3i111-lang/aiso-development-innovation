import Link from "next/link";

export default function RootPage() {
  return (
    <main className="language-gate">
      <div className="gate-mark">AISO</div>
      <h1>AISO Development &amp; Innovation</h1>
      <p>Turning industrial challenges into commercially viable products and technologies.</p>
      <Link className="button primary" href="/en/">Enter website</Link>
      <Link className="button ghost" href="/ar/">العربية</Link>
    </main>
  );
}
