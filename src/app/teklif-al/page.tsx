import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Teklif Al | KutuRota",
  description:
    "Evden eve, ofis ve şehirler arası nakliyat ihtiyaçlarınız için iletişim ve taşınma bilgilerinizi KutuRota teklif formunda düzenleyin.",
};

export default function TeklifAlPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto w-full max-w-site flex-1 px-6 py-12 sm:px-8 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[52rem]">
        <header>
          <h1 className="text-3xl leading-tight font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Taşınmanız İçin Teklif Alın
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 sm:text-lg">
            Taşınma ihtiyaçlarınıza uygun bir planlama için iletişim, adres ve
            taşıma bilgilerinizi doldurun.
          </p>
        </header>
        <QuoteForm />
      </div>
    </main>
  );
}
