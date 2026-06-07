"use client";

import { useCallback } from "react";
import type { MembershipPlan } from "@/models/membership_plan";
import {
  PLAN_CATEGORIES,
  PLAN_GROUP_LABELS,
  PLAN_GROUP_FEATURES,
  getPlanGroup,
  type PlanCategory,
} from "@/data/plans";
import { MobileInViewHover } from "@/components/ui/mobile-in-view-hover";
import { useBranch } from "./BranchContext";

const BRANCH_PHONES = {
  currency_nagar: { display: "999 666 7714", tel: "tel:+919996667714" },
  bhavanipuram: { display: "999 666 4188", tel: "tel:+919996664188" },
};

type GroupedPlans = Record<PlanCategory, MembershipPlan[]>;

function groupPlans(plans: MembershipPlan[]): GroupedPlans {
  const grouped: GroupedPlans = { GT: [], PT: [], FT: [] };
  for (const p of plans) {
    const g = getPlanGroup(p.name);
    grouped[g].push(p);
  }
  return grouped;
}

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function getDurationLabel(plan: MembershipPlan): string {
  const months = plan.duration_days / 30;
  if (months >= 12) return "12 Months";
  if (months >= 6) return "6 Months";
  if (months >= 3) return "3 Months";
  if (plan.name.includes("Functional")) return "Functional classes";
  if (plan.name.includes("Group")) return "Group (3 members)";
  return "1 Month";
}

function getTotalPrice(plan: MembershipPlan): number {
  if (plan.total_fee != null) return plan.total_fee;
  const months = plan.duration_days / 30;
  return Math.round(plan.price_monthly * months);
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-brand-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

type Props = { plans: MembershipPlan[] };

export function PlanGroups({ plans }: Props) {
  const { selectedBranch } = useBranch();
  const contactPhone = BRANCH_PHONES[selectedBranch];
  const grouped = groupPlans(plans);
  const categoriesToShow = PLAN_CATEGORIES.filter((c) => grouped[c].length > 0);

  const handleGetStarted = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const phone = contactPhone.tel.replace("tel:+", "");
    const message = "Hi HIIT Fitness, I'm interested in joining the gym!";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  }, [contactPhone.tel]);

  return (
    <div
      className={`grid gap-6 sm:gap-8 items-stretch justify-items-center md:justify-items-stretch ${categoriesToShow.length === 1 ? "max-w-md mx-auto" : categoriesToShow.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
    >
      {categoriesToShow.map((category, i) => {
        const items = grouped[category];
        const label = PLAN_GROUP_LABELS[category];
        const features = PLAN_GROUP_FEATURES[category];
        const isPopular = category === "PT";
        
        const isThreeCols = categoriesToShow.length === 3;
        const xOffset = isThreeCols ? (i === 0 ? "100%" : i === 2 ? "-100%" : "0") : "0";

        return (
          <div 
            key={category} 
            className="flex justify-center md:block w-full plan-card"
            style={{ '--x-offset': xOffset, '--delay': `${i * 150}ms` } as React.CSSProperties}
          >
            <MobileInViewHover className="w-full max-w-md md:max-w-none h-full min-h-0 p-3 md:p-0">
              <article
                className={`bg-white rounded-2xl overflow-hidden   flex flex-col h-full transition-all duration-300 ease-out border ${isPopular
                    ? "border-[#FE0000] md:-mt-2 md:mb-2 hover:scale-[1.04] hover:shadow-xl"
                    : "border-stone-200 hover:scale-[1.04] hover:  hover:border-red-300"
                  }`}
              >
                <div className="p-6 pb-4 border-b border-stone-100">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-[#FE0000] mb-3 uppercase tracking-wide">
                      {label}
                    </h3>
                    {isPopular && (
                      <span className="text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-red-100 text-[#FE0000] border border-red-200">
                        Popular
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing table + features + button: flex-1 so button sits at bottom on desktop */}
                <div className="p-6 pt-4 flex flex-col flex-1 min-h-0">
                  <p className="text-xl font-bold text-[#FE0000] mb-3 uppercase tracking-wide">
                    Pricing
                  </p>
                  <ul className="space-y-2 mb-6">
                    {items.map((plan) => (
                      <li
                        key={plan.id}
                        className="flex items-center justify-between gap-3 py-2 border-b border-stone-100 last:border-0"
                      >
                        <span className="text-stone-600 md:text-black md:font-bold text-sm md:text-base">{getDurationLabel(plan)}</span>
                        <span className="text-black font-bold flex items-center gap-2">
                          {plan.original_fee && (
                            <span className="line-through decoration-[#FE0000] decoration-2 font-bold text-black">{formatPrice(plan.original_fee)}</span>
                          )}
                          {formatPrice(getTotalPrice(plan))}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Feature list */}
                  <p className="text-xl font-bold text-[#FE0000] mb-3 uppercase tracking-wide">
                    What&apos;s included
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm md:text-base text-stone-600 md:text-black md:font-bold">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={handleGetStarted}
                    className={`mt-auto block w-full text-center py-3 rounded-xl font-semibold text-sm transition ${isPopular
                        ? "bg-[#FE0000] text-white hover:bg-red-700"
                        : "border border-stone-300 text-stone-700 hover:border-red-300 hover:text-[#FE0000]"
                      }`}
                  >
                    Get started
                  </button>
                </div>
              </article>
            </MobileInViewHover>
          </div>
        );
      })}

    </div>
  );
}
