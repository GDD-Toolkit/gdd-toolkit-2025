/**
 * Type definitions for case studies from the API
 * Matches the structure returned by the /casestudies endpoint
 */

export type CaseStudy = {
  id: string;
  name: string;
  description?: string;
  lessons_learned?: string;
  evaluation?: string;
  image?: string; // S3 URL (s3://...) or regular URL
  keywords?: string[];
  regions?: string[];
  values?: string[];
  // Additional fields that might exist
  [key: string]: unknown;
};

/**
 * Segment type for filtering case studies
 */
export type CaseStudySegment = "worthwhile" | "maldevelopment";

