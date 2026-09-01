
export interface Certificate {
  title: string;
  issuer: string;
  image: string;
  verifyUrl: string;
}

export const certifications: Certificate[] = [
  {
    title: "Google Cloud Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    image: "/gcp.png",
    verifyUrl: "https://www.credly.com/users/rushika-putta",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    image: "/azure.png",
    verifyUrl: "https://www.credly.com/users/rushika-putta",
  },
  {
    title: "Google Cloud Skills Boost Arcade",
    issuer: "Google Cloud",
    image: "/arcade.png",
    verifyUrl: "https://www.credly.com/users/rushika-putta",
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    image: "/aws_ai_cert.png",
    verifyUrl: "https://aws.amazon.com/verification",
  },
  {
    title: "Microsoft Certified: SQL AI Developer Associate",
    issuer: "Microsoft",
    image: "/ms_sql_ai_cert.png",
    verifyUrl: "https://www.credly.com/users/rushika-putta",
  },
];
