"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "./meals";
// import { v4 as uuidv4 } from "uuid";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // console.log(meal);

  // const uniqueIdentifier = uuidv4();

  await saveMeal(meal);
  redirect("/meals");
}
