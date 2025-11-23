import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Root element #app not found");
}

app.innerHTML = `
  <!-- Top Navigation -->
  <header class="sticky top-0 z-30 border-b border-neutral-200 bg-white/80 backdrop-blur">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
      <a href="#top" class="flex items-center gap-2">
        <span class="text-sm font-semibold tracking-tight">
          Timeshare Pro
        </span>
      </a>

      <nav class="hidden items-center gap-6 text-sm text-neutral-700 sm:flex">
        <a href="#features" class="hover:text-black transition-colors">Features</a>
        <a href="#support" class="hover:text-black transition-colors">Support</a>
        <a href="#privacy" class="hover:text-black transition-colors">Privacy</a>
      </nav>
    </div>
  </header>

  <main id="top" class="flex-1">
    <!-- Hero -->
    <section class="border-b border-neutral-200 bg-white">
      <div
        class="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12 lg:flex-row lg:items-center lg:py-16 lg:px-6"
      >
        <!-- Left: text -->
        <div class="flex-1 space-y-6">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Timeshare Pro • Sales Toolkit
          </p>
          <h1 class="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Presentation-ready numbers,
            <span class="text-neutral-500">in seconds.</span>
          </h1>
          <p class="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Timeshare Pro brings mortgage proposals, VPG, salary
            breakdowns, referral earnings, and more into one clean,
            presentation-ready app designed specifically for timeshare sales
            professionals.
          </p>

          <div class="flex flex-wrap items-center gap-3">
            <!-- App Store buttons (placeholder links) -->
            <a
              href="#"
              class="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-medium text-white shadow-sm transition hover:bg-neutral-900"
            >
              <span class="text-lg"></span>
              <span class="flex flex-col text-left leading-tight">
                <span class="text-[10px] uppercase tracking-[0.16em]">Download on the</span>
                <span class="text-xs font-semibold">App Store</span>
              </span>
            </a>

            <a
              href="#"
              class="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-xs font-medium text-neutral-900 shadow-sm transition hover:border-neutral-400"
            >
              <img class="h-4 w-4 rounded-sm" src="/play-icon.webp"/>
              <span class="flex flex-col text-left leading-tight">
                <span class="text-[10px] uppercase tracking-[0.16em]">Get it on</span>
                <span class="text-xs font-semibold">Google Play</span>
              </span>
            </a>

            <p class="ml-1 text-xs text-neutral-500">Available on iOS and Android.</p>
          </div>

          <div class="mt-4 grid gap-3 text-xs text-neutral-600 sm:grid-cols-2">
            <div class="flex items-start gap-2">
              <span class="mt-[3px] h-1.5 w-1.5 rounded-full bg-black"></span>
              <p>Built for live client presentations and sales tables.</p>
            </div>
            <div class="flex items-start gap-2">
              <span class="mt-[3px] h-1.5 w-1.5 rounded-full bg-black"></span>
              <p>No customer data is stored in the app.</p>
            </div>
          </div>
        </div>

        <!-- Right: phone mock -->
        <div class="flex-1">
          <div
            class="mx-auto max-w-xs rounded-[2.2rem] bg-neutral-900 p-2.5 shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
          >
            <div class="mb-2 flex items-center justify-between px-10 pt-1 text-[10px] text-neutral-400">
              <span>9:41</span>
              <span class="flex gap-1">
                <span class="h-2 w-3 rounded-sm bg-neutral-600/80"></span>
                <span class="h-2 w-3 rounded-sm bg-neutral-600/80"></span>
                <span class="h-2 w-3 rounded-sm bg-neutral-600/80"></span>
              </span>
            </div>

            <div class="rounded-[1.8rem] bg-neutral-950 px-4 py-5 text-neutral-50">
              <p class="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                Toolkit
              </p>
              <h2 class="mt-1 text-lg font-semibold tracking-tight">
                Mortgage Proposal
              </h2>

              <div class="mt-4 grid grid-cols-2 gap-3 text-[11px]">
                <div class="rounded-2xl bg-neutral-900/80 p-3">
                  <p class="text-neutral-400">Down payment</p>
                  <p class="mt-1 text-sm font-semibold">$9,400</p>
                </div>
                <div class="rounded-2xl bg-neutral-900/80 p-3">
                  <p class="text-neutral-400">Monthly</p>
                  <p class="mt-1 text-sm font-semibold">$742.18</p>
                </div>
                <div class="rounded-2xl bg-neutral-900/80 p-3">
                  <p class="text-neutral-400">Closing costs</p>
                  <p class="mt-1 text-sm font-semibold">$1,451</p>
                </div>
                <div class="rounded-2xl bg-neutral-900/80 p-3">
                  <p class="text-neutral-400">Total due today</p>
                  <p class="mt-1 text-sm font-semibold">$10,960</p>
                </div>
              </div>

              <div
                class="mt-4 flex items-center justify-between rounded-2xl bg-neutral-900/70 px-3 py-2.5 text-[11px]"
              >
                <div>
                  <p class="text-neutral-400">Mode</p>
                  <p class="text-xs font-semibold">Dark • Clean UI</p>
                </div>
                <button
                  type="button"
                  class="rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium"
                >
                  Switch theme
                </button>
              </div>
            </div>
          </div>
          <p class="mt-4 text-center text-xs text-neutral-400">
            Mock interface for illustration only.
          </p>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="bg-neutral-50">
      <div class="mx-auto max-w-5xl px-4 py-12 lg:px-6 lg:py-16">
        <div class="mb-8 max-w-3xl space-y-3">
          <h2 class="text-2xl font-semibold tracking-tight text-neutral-900">
            All the numbers you need, in one place.
          </h2>
          <p class="text-sm leading-relaxed text-neutral-600 sm:text-base">
            Instead of juggling spreadsheets, separate calculators, and
            handwritten notes, Timeshare Pro gives you a focused set
            of tools designed specifically for live customer conversations.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article class="flex flex-col gap-2 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-semibold text-neutral-900">
              Mortgage proposal builder
            </h3>
            <p class="text-sm text-neutral-600">
              Generate down payments, monthly payments, closing costs, and
              total due at signing from just a few inputs. Built for clarity
              and consistency across your team.
            </p>
          </article>

          <article class="flex flex-col gap-2 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-semibold text-neutral-900">
              Inflation projection
            </h3>
            <p class="text-sm text-neutral-600">
              Show long-term cost comparisons with quick inflation
              projections, helping guests see the value of locking in today’s
              pricing.
            </p>
          </article>

          <article class="flex flex-col gap-2 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-semibold text-neutral-900">
              Referral &amp; VPG tools
            </h3>
            <p class="text-sm text-neutral-600">
              Estimate referral earnings and track VPG (Volume Per Guest) to
              keep performance metrics front and center.
            </p>
          </article>

          <article class="flex flex-col gap-2 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-semibold text-neutral-900">
              Salary breakdown
            </h3>
            <p class="text-sm text-neutral-600">
              Convert salary figures into hourly, weekly, monthly, and yearly
              breakdowns for clearer conversations around income and
              incentives.
            </p>
          </article>

          <article class="flex flex-col gap-2 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-semibold text-neutral-900">
              Built-in calculator
            </h3>
            <p class="text-sm text-neutral-600">
              A standard calculator is always available so you never have to
              switch apps mid-presentation.
            </p>
          </article>

          <article class="flex flex-col gap-2 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-semibold text-neutral-900">
              Themes &amp; Dark Mode
            </h3>
            <p class="text-sm text-neutral-600">
              A clean interface with theme support and Dark Mode keeps numbers
              easy to read across different lighting conditions and screens.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Support / Contact -->
    <section id="support" class="border-y border-neutral-200 bg-white">
      <div
        class="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12 lg:flex-row lg:px-6 lg:py-16"
      >
        <div class="flex-1 space-y-4">
          <h2 class="text-2xl font-semibold tracking-tight text-neutral-900">
            Support &amp; feedback
          </h2>
          <p class="text-sm leading-relaxed text-neutral-600 sm:text-base">
            For questions, suggestions, or issues with Timeshare Pro, send us a message using the form. We typically respond by
            email as soon as we can.
          </p>
          <p class="text-xs text-neutral-500">
            Please do not include sensitive customer details, credit card
            numbers, or personal financial information in your message.
          </p>
        </div>

        <!-- Formspree form -->
        <div class="flex-1">
          <form
            action="https://formspree.io/f/YOUR_FORMSPREE_ID_HERE"
            method="POST"
            class="space-y-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm"
          >
            <!-- Hidden field to identify the source -->
            <input
              type="hidden"
              name="source"
              value="Timeshare Pro website"
            />

            <div class="space-y-1.5">
              <label
                for="email"
                class="block text-xs font-medium text-neutral-700"
                >Your email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                required
                class="block w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                placeholder="you@example.com"
              />
            </div>

            <div class="space-y-1.5">
              <label
                for="subject"
                class="block text-xs font-medium text-neutral-700"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                name="subject"
                class="block w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                placeholder="Issue, feature request, or question"
              />
            </div>

            <div class="space-y-1.5">
              <label
                for="message"
                class="block text-xs font-medium text-neutral-700"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                class="block w-full resize-none rounded-2xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                placeholder="Tell us what you need help with..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-full bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-900"
            >
              Send message
            </button>

            <p class="text-[11px] leading-snug text-neutral-500">
              This form is powered by Formspree. By submitting, you agree that
              your message and email address may be used solely to respond to
              your support request.
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Privacy -->
    <section id="privacy" class="bg-neutral-50">
      <div class="mx-auto max-w-5xl px-4 py-12 lg:px-6 lg:py-16">
        <div class="mb-6 space-y-2">
          <h2 class="text-2xl font-semibold tracking-tight text-neutral-900">
            Privacy Policy
          </h2>
          <p class="text-sm text-neutral-600">
            Last updated: <span>November 23, 2025</span>
          </p>
        </div>

        <div class="space-y-6 text-sm leading-relaxed text-neutral-700">
          <section>
            <h3 class="text-sm font-semibold text-neutral-900">Overview</h3>
            <p class="mt-2">
              Timeshare Pro is designed as a professional calculator
              and projection tool for timeshare sales associates. The app
              focuses on running numbers quickly and clearly during customer
              conversations. It is not intended to store or manage customer
              records.
            </p>
          </section>

          <section>
            <h3 class="text-sm font-semibold text-neutral-900">
              Data the app handles
            </h3>
            <p class="mt-2">
              The app allows you to enter figures such as purchase price, down
              payment percentage, interest rate, salary, and other numeric
              values to generate calculations. These inputs are used locally
              on your device to perform calculations and display results.
            </p>
            <p class="mt-2">
              The app is not designed to permanently store individual customer
              names, contact details, or other personal identifiers. Any
              numbers you enter are for calculation purposes only.
            </p>
          </section>

          <section>
            <h3 class="text-sm font-semibold text-neutral-900">
              Customer information
            </h3>
            <p class="mt-2">
              The app does not collect, upload, or transmit customer
              information to external servers for storage. Its purpose is to
              support transparent, confident presentations by keeping the math
              consistent and easy to follow in real time.
            </p>
          </section>

          <section>
            <h3 class="text-sm font-semibold text-neutral-900">
              Analytics &amp; crash reporting
            </h3>
            <p class="mt-2">
              Depending on the app store platform and configuration, basic
              anonymous analytics or crash reporting may be provided by Apple,
              Google, or third-party services. This type of information is
              typically used to understand app performance, fix bugs, and
              improve reliability. It does not include the numeric data you
              enter into the calculators.
            </p>
          </section>

          <section>
            <h3 class="text-sm font-semibold text-neutral-900">
              Contact &amp; support
            </h3>
            <p class="mt-2">
              When you contact support through this website, your email
              address and any information you include in your message are used
              solely to reply to your request and improve the app. This
              information is handled via Formspree and email.
            </p>
          </section>

          <section>
            <h3 class="text-sm font-semibold text-neutral-900">
              Changes to this policy
            </h3>
            <p class="mt-2">
              This privacy policy may be updated as the app evolves or as
              platform requirements change. When we update the policy, the
              “Last updated” date at the top of this section will also be
              updated.
            </p>
          </section>

          <section>
            <h3 class="text-sm font-semibold text-neutral-900">Questions</h3>
            <p class="mt-2">
              If you have any questions about how Timeshare Pro
              handles data or about this privacy policy, please reach out
              through the support form above.
            </p>
          </section>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="border-t border-neutral-200 bg-white">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-[11px] text-neutral-500 sm:flex-row lg:px-6"
    >
      <p>
        © <span id="year"></span> Timeshare Pro. All rights
        reserved.
      </p>
      <div class="flex items-center gap-4">
        <a href="#privacy" class="hover:text-neutral-900">Privacy</a>
        <a href="#support" class="hover:text-neutral-900">Support</a>
        <a href="#top" class="hover:text-neutral-900">Back to top</a>
      </div>
    </div>
  </footer>
`;

const yearSpan = document.querySelector<HTMLSpanElement>("#year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}
