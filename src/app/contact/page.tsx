"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { toast } from "sonner";
import { MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Contact form data:", data);

      setIsSuccess(true);
      toast.success(t("form_success"));
      reset();

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error(t("form_error"));
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-semibold text-[#2C2C2E] mb-4">
                {t("contact_page_title")}
              </h1>
              <p className="text-lg text-[#6E6E73]">
                {t("contact_page_subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#2C2C2E] mb-6">
                    {t("contact_info_title")}
                  </h2>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F5F5F7] rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#2C2C2E]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2C2C2E] mb-1">
                          {t("contact_address_title")}
                        </h3>
                        <p className="text-[#6E6E73] leading-relaxed">
                          {t("footer_address")}
                        </p>
                      </div>
                    </div>

                    {/* Phone - Placeholder */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F5F5F7] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[#2C2C2E]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2C2C2E] mb-1">
                          {t("contact_phone_title")}
                        </h3>
                        <p className="text-[#6E6E73]">(Coming Soon)</p>
                      </div>
                    </div>

                    {/* Email - Placeholder */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F5F5F7] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#2C2C2E]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2C2C2E] mb-1">
                          {t("contact_email_title")}
                        </h3>
                        <p className="text-[#6E6E73]">(Coming Soon)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Card */}
                <div className="bg-gradient-to-br from-[#F5F5F7] to-white rounded-2xl p-8 border border-gray-200">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl mb-4 shadow-sm">
                    <span className="text-2xl">✟</span>
                  </div>
                  <p className="text-[#6E6E73] leading-relaxed">
                    We look forward to hearing from you and welcoming you to our
                    church community.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#2C2C2E] mb-2">
                      {t("contact_form_title")}
                    </h2>
                    <p className="text-[#6E6E73]">
                      {t("contact_form_subtitle")}
                    </p>
                  </div>

                  {isSuccess && (
                    <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <p className="text-sm text-green-800">
                        {t("form_success")}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <Label
                        htmlFor="fullName"
                        className="text-sm font-medium text-[#2C2C2E] mb-2 block"
                      >
                        {t("form_full_name")}
                      </Label>
                      <Input
                        id="fullName"
                        {...register("fullName")}
                        className="w-full bg-[#F5F5F7] border-gray-300 focus:border-[#2C2C2E] focus:ring-[#2C2C2E] rounded-lg"
                        disabled={isSubmitting}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-sm text-red-600">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-[#2C2C2E] mb-2 block"
                      >
                        {t("form_email")}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full bg-[#F5F5F7] border-gray-300 focus:border-[#2C2C2E] focus:ring-[#2C2C2E] rounded-lg"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <Label
                        htmlFor="subject"
                        className="text-sm font-medium text-[#2C2C2E] mb-2 block"
                      >
                        {t("contact_form_subject")}
                      </Label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        className="w-full bg-[#F5F5F7] border-gray-300 focus:border-[#2C2C2E] focus:ring-[#2C2C2E] rounded-lg"
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <p className="mt-1.5 text-sm text-red-600">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-[#2C2C2E] mb-2 block"
                      >
                        {t("form_message")}
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        rows={5}
                        className="w-full bg-[#F5F5F7] border-gray-300 focus:border-[#2C2C2E] focus:ring-[#2C2C2E] rounded-lg resize-none"
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-sm text-red-600">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#2C2C2E] text-white hover:bg-[#1a1a1a] rounded-full py-6 text-base font-medium shadow-[0_2px_8px_rgba(0,0,0,0.12)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t("form_submitting") : t("form_submit")}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
