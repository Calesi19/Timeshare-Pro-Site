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
        <a href="#terms" class="hover:text-black transition-colors">Terms</a>
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
            <a
              href="#"
              class="inline-flex h-10 items-center"
              aria-label="Download on the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                class="h-10 w-auto"
                loading="lazy"
              />
            </a>

            <a
              href="#"
              class="inline-flex h-10 items-center"
              aria-label="Get it on Google Play"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                class="h-10 w-auto max-w-[160px]"
                loading="lazy"
              />
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

        <!-- Right: mockup image -->
        <div class="flex-1">
          <div class="mx-auto max-w-sm">
            <img
              src="/mockup.png"
              alt="Timeshare Sales Toolkit mockup"
              class="w-full"
              loading="lazy"
            />
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
            action="https://formspree.io/f/xdkjvykw""
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

    <!-- Terms of Service -->
    <section id="terms" class="bg-white">
      <div class="mx-auto max-w-5xl px-4 py-12 lg:px-6 lg:py-16">
        <div class="mb-6 space-y-2">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Terms of Service
          </p>
          <h2 class="text-2xl font-semibold tracking-tight text-neutral-900">
            Simple rules for using Timeshare Pro.
          </h2>
          <p class="text-sm text-neutral-600">
            These terms outline how you may use the app and the website. By accessing either, you agree to the policies below.
          </p>
        </div>

        <div class="space-y-6 text-sm leading-relaxed text-neutral-700">
          <section>
            <h3 class="text-sm font-semibold text-neutral-900">Professional use only</h3>
            <p class="mt-2">
              Timeshare Pro is provided as a sales enablement tool for timeshare professionals. You are responsible for verifying every calculation, complying with your company policies, and ensuring any numbers you show align with applicable laws and disclosures.
            </p>
          </section>

          <section>
            <h3 class="text-sm font-semibold text-neutral-900">No data storage guarantees</h3>
            <p class="mt-2">
              The calculators work locally and are not intended to permanently store personal data. Do not input sensitive customer information or payment details. Any information you submit through the contact form is used solely to respond to your message.
            </p>
          </section>

          <section>
            <h3 class="text-sm font-semibold text-neutral-900">Disclaimer of warranties</h3>
            <p class="mt-2">
              The toolkit is provided “as is” without warranties of accuracy, fitness, or availability. Timeshare Pro makes every effort to keep calculations current but does not promise error-free performance.
            </p>
          </section>

          <section>
            <h3 class="text-sm font-semibold text-neutral-900">Limitation of liability</h3>
            <p class="mt-2">
              To the maximum extent allowed by law, Timeshare Pro is not liable for any losses, missed sales, or damages arising from your use of the calculators or reliance on generated numbers.
            </p>
          </section>

          <section>
            <h3 class="text-sm font-semibold text-neutral-900">Updates to these terms</h3>
            <p class="mt-2">
              Policies may change as the product evolves. When we update the terms, the effective date below will change. Continued use after an update means you accept the new version.
            </p>
            <p class="mt-2 text-xs text-neutral-500">
              Last updated: November 23, 2025
            </p>
          </section>

          <section>
            <h3 class="text-sm font-semibold text-neutral-900">Questions</h3>
            <p class="mt-2">
              For questions about these terms, email us using the support form above. Include “Terms of Service” in the subject line for faster routing.
            </p>
          </section>
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
    <div class="mx-auto max-w-5xl px-4 py-6 lg:px-6">
      <div
        class="flex flex-col items-center justify-between gap-3 text-[11px] text-neutral-500 sm:flex-row"
      >
        <p>
          © <span id="year"></span> Timeshare Pro. All rights
          reserved.
        </p>
        <div class="flex items-center gap-4">
          <a href="#terms" class="hover:text-neutral-900">Terms</a>
          <a href="#privacy" class="hover:text-neutral-900">Privacy</a>
          <a href="#support" class="hover:text-neutral-900">Support</a>
          <a href="#top" class="hover:text-neutral-900">Back to top</a>
        </div>
      </div>
      <p class="mt-3 text-center text-[11px] text-neutral-400 sm:text-left">
        App Store is a trademark of Apple Inc., registered in the U.S. and other countries and regions.
        Google Play and the Google Play logo are trademarks of Google LLC.
      </p>
    </div>
  </footer>
`;

const yearSpan = document.querySelector<HTMLSpanElement>("#year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}
