import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, FileText, Mail, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClientManagement = () => {
  const features = [
    {
      icon: Users,
      title: 'Centralized Client Database',
      description: 'Store all client information in one place — contact details, billing addresses, and payment preferences.',
    },
    {
      icon: FileText,
      title: 'Invoice History',
      description: 'View complete invoice history for each client. Track what\'s been paid and what\'s outstanding.',
    },
    {
      icon: Mail,
      title: 'Quick Communications',
      description: 'Send invoices and reminders directly from client profiles. Keep all communications organized.',
    },
    {
      icon: Clock,
      title: 'Payment Tracking',
      description: 'Monitor payment patterns and identify clients who consistently pay late.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              Included with Invoicing
            </span>
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-6">
              Client Management
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8">
              Keep all your client information organized and accessible. 
              Part of the Invoicemonk invoicing experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/invoicing">
                  View All Invoicing Features
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            Everything you need to manage clients
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
              Why manage clients with Invoicemonk?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Unlimited client profiles',
                'Quick client lookup and search',
                'Automatic invoice association',
                'Payment history tracking',
                'Custom notes and tags',
                'Export client data anytime',
                'Multiple contact persons per client',
                'Client portal access',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-heading-lg font-bold mb-4">
                Start managing your clients today
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Client management is included free with every Invoicemonk account. 
                Sign up and organize your client relationships.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
                  Create Free Account
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ClientManagement;
