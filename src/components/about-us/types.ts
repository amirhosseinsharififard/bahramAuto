/**
 * About Us Components Types
 *
 * This file contains shared TypeScript interfaces and types
 * used across all about-us page components.
 *
 * @fileoverview Type definitions for about-us components
 * @author Amir Hossein Shrififard
 * @version 1.0.0
 */

/**
 * Translation function type
 * Used for internationalization across all about-us components
 */
export type TranslationFunction = (key: string) => string;

/**
 * Base props interface for all about-us components
 * All about-us components receive a translation function
 */
export interface BaseAboutProps {
  t: TranslationFunction;
}

/**
 * Milestone data structure
 * Used in MilestonesSection component
 */
export interface Milestone {
  title: string;
  year: string;
  description: string;
}

/**
 * Value data structure
 * Used in ValuesSection component
 */
export interface Value {
  title: string;
  description: string;
}

/**
 * Team member data structure
 * Used in TeamSection component
 */
export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

/**
 * About page data structure
 * Complete data structure for about-us page content
 */
export interface AboutPageData {
  title: string;
  subtitle: string;
  story: {
    title: string;
    description: string;
    milestones: Milestone[];
  };
  values: {
    title: string;
    subtitle: string;
    items: Value[];
  };
  team: {
    title: string;
    description: string;
    members: TeamMember[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}
