import { getRecruitJobsFromMicroCMS } from "./microcms";
import { mockRecruitJobs } from "./mock-recruit-jobs";
import type { CmsRecruitEmploymentType, CmsRecruitJob } from "./types";

type GetRecruitJobsOptions = {
  employmentType?: CmsRecruitEmploymentType;
  /** When true, omits drafts (`published === false`). Defaults to true. */
  publishedOnly?: boolean;
};

export async function getRecruitJobs({
  employmentType,
  publishedOnly = true,
}: GetRecruitJobsOptions = {}): Promise<CmsRecruitJob[]> {
  const fromCms = await getRecruitJobsFromMicroCMS({ employmentType, publishedOnly });
  const source = fromCms ?? mockRecruitJobs;
  return source.filter((job) => {
    if (employmentType && job.employmentType !== employmentType) return false;
    if (publishedOnly && !job.published) return false;
    return true;
  });
}
