
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
  {
    title: "SAP Certified - Back-End Developer - ABAP Cloud",
    issuer: "SAP",
    image: "https://images.credly.com/size/340x340/images/acf3ceaf-d9a9-490f-87fd-c8a6ad02cbe7/image.png",
    verifyUrl: "https://www.credly.com/badges/acf3ceaf-d9a9-490f-87fd-c8a6ad02cbe7",
    credentialId: "acf3ceaf-d9a9-490f-87fd-c8a6ad02cbe7",
  },
];

