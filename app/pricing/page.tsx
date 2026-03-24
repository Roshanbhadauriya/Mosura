import { FeatureComparisonBlock } from "@/components/uitripled/feature-comparison-block-shadcnui";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black text-white px-4 pt-24 pb-12">
      <div className="w-full">
        {/* We use the imported FeatureComparisonBlock inside our dark theme wrapper */}
        <FeatureComparisonBlock />
      </div>
    </div>
  );
}
