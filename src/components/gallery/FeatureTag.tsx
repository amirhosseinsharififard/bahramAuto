'use client';

interface FeatureTagProps {
  feature: string;
  index: number;
}

const FeatureTag = ({ feature, index }: FeatureTagProps) => {
  return (
    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300">
      {feature}
    </span>
  );
};

export default FeatureTag;
