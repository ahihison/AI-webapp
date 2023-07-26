import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Image Prompt is required",
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});
export const amountOptions = [
  { values: "1", label: "1 Photo" },
  { values: "2", label: "2 Photos" },
  { values: "3", label: "3 Photos" },
  { values: "4", label: "4 Photos" },
  { values: "5", label: "5 Photos" },
];
export const resolutionOptions = [
  {
    values: "256x256",
    label: "256x256",
  },
  {
    values: "512x512",
    label: "512x512",
  },
  {
    values: "1024x1024",
    label: "1024x1024",
  },
];
