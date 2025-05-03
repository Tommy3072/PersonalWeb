import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { sendContactForm } from "@/lib/contact";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { AtSign, Phone, MapPin } from "lucide-react";
import { SocialButton } from "@/components/ui/social-button";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, introduce un email válido" }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  // Contact form mutation
  const mutation = useMutation({
    mutationFn: sendContactForm,
    onSuccess: () => {
      toast({
        title: "Mensaje enviado",
        description: "Tu mensaje ha sido enviado correctamente. Me pondré en contacto contigo pronto.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error al enviar el mensaje",
        description: "Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });
  
  // Form submission handler
  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    mutation.mutate(values);
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contacto"
          subtitle="¿Interesado en colaborar? ¡Hablemos!"
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <AtSign className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <a 
                        href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-muted-foreground">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                    Sígueme en
                  </h4>
                  <div className="flex space-x-3">
                    <SocialButton 
                      platform="LinkedIn" 
                      url={personalInfo.socialLinks.linkedin} 
                      icon={<FaLinkedin className="h-5 w-5" />} 
                    />
                    <SocialButton 
                      platform="GitHub" 
                      url={personalInfo.socialLinks.github} 
                      icon={<FaGithub className="h-5 w-5" />} 
                    />
                    <SocialButton 
                      platform="Twitter" 
                      url={personalInfo.socialLinks.twitter} 
                      icon={<FaTwitter className="h-5 w-5" />} 
                    />
                    <SocialButton 
                      platform="Instagram" 
                      url={personalInfo.socialLinks.instagram} 
                      icon={<FaInstagram className="h-5 w-5" />} 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                              <Input placeholder="Tu nombre" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="tu.email@ejemplo.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Asunto</FormLabel>
                          <FormControl>
                            <Input placeholder="Asunto del mensaje" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Escribe tu mensaje aquí..." 
                              className="min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
