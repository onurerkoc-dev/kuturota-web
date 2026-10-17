"use client";

const inputClassName =
  "mt-2 min-h-12 w-full min-w-0 rounded-lg border border-primary/20 bg-background px-4 py-3 text-base text-primary focus-visible:border-primary";
const labelClassName = "block text-sm font-medium text-primary";

export function QuoteForm() {
  return (
    <form
      aria-label="Taşınma talebi bilgileri"
      aria-describedby="quote-submission-status quote-form-help"
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="mt-8 min-w-0 rounded-2xl border border-primary/15 p-6 sm:mt-10 sm:p-8 lg:p-10"
    >
      <p
        id="quote-submission-status"
        className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm leading-6 text-primary"
      >
        Form gönderimi şu anda aktif değil. Bu form üzerinden henüz teklif
        talebi iletilemiyor.
      </p>
      <p id="quote-form-help" className="mt-4 mb-8 text-sm leading-6">
        Yıldız (*) ile işaretlenen alanlar zorunludur.
      </p>

      <fieldset>
        <legend className="text-xl font-semibold text-primary">
          İletişim bilgileriniz
        </legend>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="full-name" className={labelClassName}>
              Ad Soyad *
            </label>
            <input
              id="full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              pattern=".*\S.*"
              title="Lütfen boşluk dışında en az bir karakter girin."
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClassName}>
              Telefon *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              pattern=".*\S.*"
              title="Lütfen telefon numaranızı girin."
              className={inputClassName}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={labelClassName}>
              E-posta (isteğe bağlı)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputClassName}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-8 border-t border-primary/15 pt-8">
        <legend className="pr-3 text-xl font-semibold text-primary">
          Taşınma ayrıntıları
        </legend>
        <div className="grid items-end gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="moving-type" className={labelClassName}>
              Taşıma türü *
            </label>
            <select
              id="moving-type"
              name="movingType"
              defaultValue=""
              required
              className={inputClassName}
            >
              <option value="" disabled>
                Taşıma türünü seçin
              </option>
              <option value="Evden Eve">Evden Eve</option>
              <option value="Ofis">Ofis</option>
              <option value="Şehirler Arası">Şehirler Arası</option>
            </select>
          </div>
          <div>
            <label htmlFor="moving-date" className={labelClassName}>
              Tahmini taşınma tarihi (isteğe bağlı)
            </label>
            <input
              id="moving-date"
              name="movingDate"
              type="date"
              className={inputClassName}
            />
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <fieldset className="min-w-0">
            <legend className="font-semibold text-primary">
              Nereden taşınıyorsunuz?
            </legend>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="from-city" className={labelClassName}>
                  Çıkış ili *
                </label>
                <input
                  id="from-city"
                  name="fromCity"
                  type="text"
                  autoComplete="section-origin address-level1"
                  required
                  pattern=".*\S.*"
                  title="Lütfen çıkış ilini girin."
                  className={inputClassName}
                />
              </div>
              <div>
                <label htmlFor="from-district" className={labelClassName}>
                  Çıkış ilçesi *
                </label>
                <input
                  id="from-district"
                  name="fromDistrict"
                  type="text"
                  autoComplete="section-origin address-level2"
                  required
                  pattern=".*\S.*"
                  title="Lütfen çıkış ilçesini girin."
                  className={inputClassName}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="min-w-0">
            <legend className="font-semibold text-primary">
              Nereye taşınıyorsunuz?
            </legend>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="to-city" className={labelClassName}>
                  Varış ili *
                </label>
                <input
                  id="to-city"
                  name="toCity"
                  type="text"
                  autoComplete="section-destination address-level1"
                  required
                  pattern=".*\S.*"
                  title="Lütfen varış ilini girin."
                  className={inputClassName}
                />
              </div>
              <div>
                <label htmlFor="to-district" className={labelClassName}>
                  Varış ilçesi *
                </label>
                <input
                  id="to-district"
                  name="toDistrict"
                  type="text"
                  autoComplete="section-destination address-level2"
                  required
                  pattern=".*\S.*"
                  title="Lütfen varış ilçesini girin."
                  className={inputClassName}
                />
              </div>
            </div>
          </fieldset>
        </div>

        <div className="mt-8">
          <label htmlFor="notes" className={labelClassName}>
            Ek açıklama (isteğe bağlı)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className={`${inputClassName} resize-y`}
          />
        </div>
      </fieldset>

      <button
        type="button"
        disabled
        aria-describedby="quote-submission-status"
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        Teklif Talebi Gönder
      </button>
    </form>
  );
}
