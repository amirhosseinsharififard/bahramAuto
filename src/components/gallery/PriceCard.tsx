'use client';

interface PriceCardProps {
  t: (key: string) => string;
  labelKey: string;
  value: string;
  gradient: string;
}

const PriceCard = ({ t, labelKey, value, gradient }: PriceCardProps) => {
  return (
    <div
      className={`rounded-xl bg-gradient-to-r ${gradient} p-6 text-center text-white`}
    >
      <p className="text-sm">{t(labelKey)}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default PriceCard;
