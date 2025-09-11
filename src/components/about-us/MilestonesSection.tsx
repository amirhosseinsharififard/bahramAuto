'use client';

import { Building } from 'lucide-react';

interface MilestonesSectionProps {
  t: (key: string) => string;
}

const MilestonesSection = ({ t }: MilestonesSectionProps) => {
  return (
    <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 shadow-xl backdrop-blur-sm">
      <h2 className="mb-12 text-center text-3xl font-bold text-white">
        {t('about.milestones.title')}
      </h2>
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-blue-500/30 md:block"></div>

        {/* Milestones list */}
        <div className="space-y-12">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              {/* Milestone content card */}
              <div className="md:w-1/2 md:px-8">
                <div
                  className={`rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-6 shadow-lg backdrop-blur-sm ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  {/* Milestone header with icon and title */}
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 rounded-full bg-blue-500/20 p-3">
                      <Building className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {t(`about.story.milestones.${index}.${index}.title`)}
                      </h3>
                      <p className="text-blue-400">
                        {t(`about.story.milestones.${index}.${index}.year`)}
                      </p>
                    </div>
                  </div>
                  {/* Milestone description */}
                  <p className="text-gray-300">
                    {t(`about.story.milestones.${index}.${index}.description`)}
                  </p>
                </div>
              </div>

              {/* Timeline node */}
              <div className="hidden md:flex md:w-0 md:justify-center">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <span className="font-bold">{index + 1}</span>
                  {/* Timeline connectors */}
                  <div className="absolute -left-1/2 top-1/2 h-1 w-1/2 -translate-y-1/2 transform bg-blue-500/30"></div>
                  <div className="absolute -right-1/2 top-1/2 h-1 w-1/2 -translate-y-1/2 transform bg-blue-500/30"></div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MilestonesSection;
