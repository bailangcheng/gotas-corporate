import type { CmsRecruitJob } from "./types";

export const mockRecruitJobs: CmsRecruitJob[] = [
  {
    id: "midcareer-placeholder",
    title: "中途採用（一般募集）",
    employmentType: "mid-career",
    location: "沖縄県",
    descriptionHtml:
      "<p>正式な募集要項はクライアントから提供され次第差し替えます。</p>",
    published: false,
  },
  {
    id: "parttime-placeholder",
    title: "パート・アルバイト（一般募集）",
    employmentType: "part-time",
    location: "沖縄県",
    descriptionHtml:
      "<p>正式な募集要項はクライアントから提供され次第差し替えます。</p>",
    published: false,
  },
];
