'use client';

import Image from 'next/image';

interface TeamSectionProps {
  t: (key: string) => string;
}

const TeamSection = ({ t }: TeamSectionProps) => {
  return (
    <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 shadow-lg backdrop-blur-sm">
      {/* Section header */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          {t('about.teams.title')}
        </h2>
        <p className="text-gray-300">{t('about.teams.description')}</p>
      </div>

      {/* Team members grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            {/* Team member photo */}
            <div className="h-64 bg-gray-700">
              <Image
                src={`/images/team/member-${index + 1}.jpg`}
                alt={t(`about.team.${index}.${index}.name`)}
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Team member info */}
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold text-white">
                {t(`about.team.${index}.${index}.name`)}
              </h3>
              <p className="mb-4 text-blue-400">
                {t(`about.team.${index}.${index}.position`)}
              </p>
              <p className="text-gray-300">
                {t(`about.team.${index}.${index}.bio`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
