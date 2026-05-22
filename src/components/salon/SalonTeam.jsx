import { motion } from "framer-motion";
import { team } from "../../data/sharedContent";
import SafeImage from "../ui/SafeImage";
import ScrollReveal from "../ui/ScrollReveal";
import SalonSectionHeader from "./SalonSectionHeader";

export default function SalonTeam() {
  return (
    <section id="team" data-nav-theme="light" className="scroll-mt-24 bg-[#ebebeb] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SalonSectionHeader
          align="center"
          label="The Collective"
          title="Meet Our Stylists"
          description="Creative directors, master colorists, and beauty specialists — each bringing editorial and red-carpet expertise to your chair."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.08}>
              <motion.div whileHover={{ y: -8 }} className="group text-center">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl md:rounded-3xl">
                  <div className="aspect-[3/4] overflow-hidden">
                    <SafeImage
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#c41e3a]/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="absolute bottom-4 left-4 right-4 text-left text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {member.bio}
                  </p>
                </div>
                <h3 className="mt-4 font-editorial text-lg font-bold uppercase text-neutral-900">{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#c41e3a]">{member.role}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
