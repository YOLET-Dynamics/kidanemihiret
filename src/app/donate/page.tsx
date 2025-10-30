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
import {
  membershipFormSchema,
  type MembershipFormData,
} from "@/lib/validations";
import { toast } from "sonner";
import { Heart, CheckCircle2 } from "lucide-react";

export default function DonatePage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MembershipFormData>({
    resolver: zodResolver(membershipFormSchema),
  });

  const onSubmit = async (data: MembershipFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Membership form data:", data);

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
                {t("donate_page_title")}
              </h1>
              <p className="text-lg text-[#6E6E73]">
                {t("donate_page_subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Donation Coming Soon Card */}
              <div className="bg-gradient-to-br from-[#F5F5F7] to-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] h-fit">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-sm">
                  <Heart className="w-8 h-8 text-[#2C2C2E]" />
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#2C2C2E] mb-4">
                  {t("donate_coming_soon")}
                </h2>

                <p className="text-[#6E6E73] leading-relaxed mb-6">
                  {t("donate_coming_soon_desc")}
                </p>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-[#2C2C2E] mb-3">
                    {t("contact_info_title")}
                  </h3>
                  <div className="space-y-2 text-sm text-[#6E6E73]">
                    <p>{t("footer_address")}</p>
                  </div>
                </div>
              </div>

              {/* Membership Form */}
              <div>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#2C2C2E] mb-2">
                      {t("membership_title")}
                    </h2>
                    <p className="text-[#6E6E73]">{t("membership_subtitle")}</p>
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

                    {/* Phone */}
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-[#2C2C2E] mb-2 block"
                      >
                        {t("form_phone")}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="w-full bg-[#F5F5F7] border-gray-300 focus:border-[#2C2C2E] focus:ring-[#2C2C2E] rounded-lg"
                        disabled={isSubmitting}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-sm text-red-600">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Address */}
                    <div>
                      <Label
                        htmlFor="address"
                        className="text-sm font-medium text-[#2C2C2E] mb-2 block"
                      >
                        {t("form_address")}
                      </Label>
                      <Input
                        id="address"
                        {...register("address")}
                        className="w-full bg-[#F5F5F7] border-gray-300 focus:border-[#2C2C2E] focus:ring-[#2C2C2E] rounded-lg"
                        disabled={isSubmitting}
                      />
                      {errors.address && (
                        <p className="mt-1.5 text-sm text-red-600">
                          {errors.address.message}
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
                        rows={4}
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
