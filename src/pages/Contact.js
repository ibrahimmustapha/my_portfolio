import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

const contactChannels = [
  {
    id: 1,
    title: "Location",
    details: "Accra, Ghana",
    icon: faMapLocation,
  },
  {
    id: 2,
    title: "Email",
    details: "musib581@gmail.com",
    icon: faEnvelopeOpenText,
  },
];

const Contact = ({ surfaceClasses }) => {
  return (
    <div className={`${surfaceClasses} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/15 via-transparent to-transparent blur-3xl opacity-80 dark:from-brand-accent/15" />
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-primary dark:text-brand-accent">
            Let's collaborate
          </span>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            Have an idea or need a developer who slots into your team quickly?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
            I'm always excited to partner on ambitious projects, join product
            teams, or help explore what's next for your business. Reach out and
            let's build something remarkable.
          </p>
          <a
            href="mailto:musib581@gmail.com"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary px-6 py-3 text-sm font-semibold uppercase tracking-tight text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
          >
            Start a project
          </a>
        </div>
        <div className="grid gap-4">
          {contactChannels.map((channel) => (
            <div
              key={channel.id}
              className="flex items-center gap-4 rounded-2xl border border-slate-200/60 bg-white/60 p-5 transition hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-md hover:shadow-brand-primary/15 dark:border-slate-700/60 dark:bg-slate-900/70 dark:hover:border-brand-accent/40 dark:hover:shadow-brand-accent/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary dark:bg-brand-accent/15 dark:text-brand-accent">
                <FontAwesomeIcon icon={channel.icon} className="text-lg" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {channel.title}
                </p>
                <p className="text-base font-medium text-slate-700 dark:text-slate-200">
                  {channel.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
