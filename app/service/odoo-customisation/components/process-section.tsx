export default function ProcessSection() {
  return (
    <section className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Our Odoo Implementation Process</h2>
        <p className="text-muted-foreground mt-4">
          Structured ERP deployment ensuring stability and scalability.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="font-semibold mb-2">1. Requirement Analysis</h3>
          <p className="text-sm text-muted-foreground">
            Understanding your current system and operational challenges.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">2. System Design</h3>
          <p className="text-sm text-muted-foreground">
            ERP architecture planning aligned with your growth strategy.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">3. Development & Testing</h3>
          <p className="text-sm text-muted-foreground">
            Customisation, integration and thorough testing.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">4. Deployment & Training</h3>
          <p className="text-sm text-muted-foreground">
            Smooth go-live with team training and documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
