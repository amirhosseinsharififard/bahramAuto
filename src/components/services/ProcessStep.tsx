'use client';

interface ProcessStepProps {
  t: (key: string) => string;
  stepNumber: number;
}

const ProcessStep = ({ t, stepNumber }: ProcessStepProps) => {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xl font-bold text-white shadow-lg">
        {stepNumber}
      </div>
      <h3 className="mb-3 text-xl font-bold text-white">
        {t(`services.process.step${stepNumber}.title`)}
      </h3>
      <p className="text-blue-100 leading-relaxed">
        {t(`services.process.step${stepNumber}.description`)}
      </p>
    </div>
  );
};

export default ProcessStep;
