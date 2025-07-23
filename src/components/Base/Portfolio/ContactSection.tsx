// components/ContactSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle title="Get In Touch" />
                <p className="text-center text-lg max-w-2xl mx-auto text-muted-foreground -mt-10 mb-16">
                    Ready to bring your next project to life? Let's discuss how we can work together.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">First Name</Label>
                                            <Input id="first-name" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">Last Name</Label>
                                            <Input id="last-name" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="Project Discussion" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" rows={5} placeholder="Tell me about your project..." />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full">
                                        Send Message <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Right Column: Contact Details & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {[
                            { icon: Mail, title: "Email", content: "abrardar988651@gmail.com", href: "mailto:abrardar988651@gmail.com" },
                            { icon: Phone, title: "Phone", content: "6006045264", href: "tel:6006045264" },
                            { icon: MapPin, title: "Location", content: "Bengaluru, India", href: "#" }
                        ].map((contact) => (
                            <motion.a key={contact.title} href={contact.href} whileHover={{ scale: 1.03, x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                                <Card className="hover:border-primary transition-colors">
                                    <CardContent className="p-6 flex items-center">
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-primary text-primary-foreground flex-shrink-0">
                                            <contact.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-foreground">{contact.title}</h4>
                                            <p className="text-muted-foreground">{contact.content}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.a>
                        ))}

                        {/* ✨ RE-ADDED: Follow Me Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Follow Me</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex space-x-4">
                                    {[
                                        { icon: Github, href: "https://github.com/Abrarhussaindar" },
                                        { icon: Linkedin, href: "https://linkedin.com/in/abrarhussain0366" },
                                    ].map((social) => (
                                        <Button key={social.href} asChild variant="outline" size="icon">
                                            <motion.a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <social.icon size={20} />
                                            </motion.a>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* ✨ RE-ADDED: Available for Work Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Card>
                                <CardContent className="p-6 flex items-center">
                                    <motion.div
                                        className="w-3 h-3 rounded-full mr-3 bg-green-500"
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <div>
                                        <h4 className="font-semibold text-foreground">Available for Work</h4>
                                        <p className="text-sm text-muted-foreground">Open to new opportunities and exciting projects.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;