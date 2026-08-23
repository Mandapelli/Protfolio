import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Loader2, Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { SEO } from '@/components/common/SEO';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations/contact';
import { contactService } from '@/services/contactService';
import { SITE_CONFIG } from '@/constants/site';
import { ApiError } from '@/services/api';

export function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const payload = {
        ...data,
        phone: data.phone || undefined,
      };
      await contactService.submit(payload);
      setIsSuccess(true);
      form.reset();
      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I will get back to you soon.',
      });
    } catch (error) {
      const message =
        error instanceof ApiError
          ? error.message
          : 'Failed to send message. Please try again later.';
      toast.error('Failed to send message', { description: message });
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Mounika Mandapelli for project inquiries, collaborations, or job opportunities."
        path="/contact"
      />

      <section className="section-padding">
        <div className="container-custom">
          <MotionWrapper className="mb-12 text-center">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">Get In Touch</h1>
            <p className="mt-4 text-muted-foreground">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            </p>
          </MotionWrapper>

          <div className="grid gap-12 lg:grid-cols-5">
            <MotionWrapper className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold">Let&apos;s Talk</h2>
                  <p className="mt-2 text-muted-foreground">
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities
                    to be part of your vision.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">{SITE_CONFIG.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.2} className="lg:col-span-3">
              <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
                    <h3 className="text-xl font-semibold">Message Sent!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setIsSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+91 8639000830" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject *</FormLabel>
                              <FormControl>
                                <Input placeholder="Project inquiry" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell me about your project..."
                                rows={6}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
