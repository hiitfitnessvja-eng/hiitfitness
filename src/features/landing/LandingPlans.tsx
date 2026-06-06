import { unstable_noStore as noStore } from "next/cache";
import { getPublicPlans } from "@/services/membership_service";
import { PlanGroups } from "@/features/landing/PlanGroups";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { CountdownTimer } from "@/features/landing/CountdownTimer";

/** Plans from membership_plans table; always fetched fresh (no cache). */
export async function LandingPlans() {
  noStore();
  const plans = await getPublicPlans();

  return (
    <section id="plans" className="py-16 sm:py-10 px-4 sm:px-6 scroll-mt-[var(--header-height)] bg-stone-50">
      <AnimateOnScroll className="max-w-6xl mx-auto relative group-fan">
        <div className="text-center mb-10 sm:mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FE0000] mb-4">
            Membership plans
          </h2>
          <CountdownTimer />
        </div>
        {plans.length > 0 ? (
          <PlanGroups plans={plans} />
        ) : (
          <div className="bg-white shadow-sm border border-stone-200 border-dashed text-center py-12 rounded-xl text-stone-500">
            <p>Plans are being updated. Check back soon.</p>
          </div>
        )}
      </AnimateOnScroll>
      <style>{`
        /* Desktop fan-out animation */
        @media (min-width: 768px) {
          .animate-in-scroll-placeholder:not(.animate-in-scroll-visible) .plan-card {
            opacity: 0;
            transform: translateX(var(--x-offset)) scale(0.85);
          }
          .animate-in-scroll-visible .plan-card {
            opacity: 1;
            transform: translateX(0) scale(1);
            transition: all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
            transition-delay: var(--delay);
          }
        }
        /* Mobile stagger animation */
        @media (max-width: 767px) {
          .animate-in-scroll-placeholder:not(.animate-in-scroll-visible) .plan-card {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          .animate-in-scroll-visible .plan-card {
            opacity: 1;
            transform: translateY(0) scale(1);
            transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
            transition-delay: var(--delay);
          }
        }
      `}</style>
    </section>
  );
}
