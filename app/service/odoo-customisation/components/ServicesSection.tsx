import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesSection() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">
            What We Do — Odoo ERP Customisation Services
          </h2>
          <p className="text-muted-foreground mt-4">
            Complete Odoo implementation and development services tailored for
            Indian SMEs and enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Odoo Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              End-to-end ERP deployment for accounting, sales, inventory, HR and
              operations.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Module Development</CardTitle>
            </CardHeader>
            <CardContent>
              Tailored modules built specifically for your workflow and industry
              requirements.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GST & Indian Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              GST-ready accounting, invoice formats and Indian tax
              configuration.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workflow Automation</CardTitle>
            </CardHeader>
            <CardContent>
              Reduce manual errors with automated approvals and reporting
              systems.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Migration & Upgrade</CardTitle>
            </CardHeader>
            <CardContent>
              Seamless migration from legacy systems or older Odoo versions.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ongoing Support</CardTitle>
            </CardHeader>
            <CardContent>
              Dedicated support and maintenance for smooth business operations.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
