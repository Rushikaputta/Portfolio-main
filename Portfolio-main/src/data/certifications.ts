
import { getImageUrl } from "@/utils/assets";

export interface Certificate {
  title: string;
  issuer: string;
  image: string;
  verifyUrl: string;
  credentialId: string;
}

export const certifications: Certificate[] = [
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    image: getImageUrl("aws_ai_cert.png"),
    verifyUrl: "https://aws.amazon.com/verification",
    credentialId: "25211c6d3d3d4e33b39fb6415095117d",
  },
  {
    title: "Microsoft Certified: SQL AI Developer Associate",
    issuer: "Microsoft",
    image: getImageUrl("ms_sql_ai_cert.png"),
    verifyUrl: "https://www.credly.com/users/rushika-putta",
    credentialId: "D0CC374C45908805",
  },
];

