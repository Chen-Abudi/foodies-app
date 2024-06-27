import fs from "fs/promises";
import path from "path";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = path.extname(meal.image.name);
  const fileName = `${meal.slug}${extension}`;
  const filePath = `public/images/${fileName}`;

  try {
    const bufferedImage = await meal.image.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(bufferedImage));

    meal.image = `/images/${fileName}`;

    db.prepare(
      `
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
    ).run(meal);
  } catch (error) {
    console.error("Error saving meal:", error);
    throw new Error("Saving meal failed!");
  }
}
